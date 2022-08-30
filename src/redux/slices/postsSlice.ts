import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { get, ref, update } from "firebase/database";
import { IPost, PostState } from "../../@types/types";
import { database } from "../../firebase";
import { Status } from "./allUsersSlice";

export const getPosts = createAsyncThunk("users/getPosts", async () => {
  console.log('ВЫЗВАНО')
  return await (await get(ref(database, "posts/"))).val();
});

const initialState: PostState = {
  posts: {},
  status: Status.LOADING,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<{ userId: string; post: IPost }>) => {
      const { userId, post } = action.payload;
      const postObj = { id: post.id, date: String(post.date), text: post.text };
      const newPosts = post.id === 0 ? [postObj] : [...state.posts[`${userId}`], postObj];

      const updates: { [key: string]: IPost[] } = {};
      updates[`/posts/${action.payload.userId}`] = newPosts;
      update(ref(database), updates);
    },
    removePost: (state, action: PayloadAction<number>) => {
      // let newPosts = state.posts
      //   .filter((post) => post.id !== action.payload)
      //   .map((post, i) => {
      //     post.id = i;
      //     return post;
      //   });
      // state.posts = newPosts;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getPosts.pending, (state) => {
      state.posts = {};
      state.status = Status.LOADING;
    });
    builder.addCase(getPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.status = Status.SUCCESS;
      console.log('GOOD')
    });
    builder.addCase(getPosts.rejected, (state) => {
      state.posts = {};
      state.status = Status.ERROR;
    });
  },
});

export const { addPost, removePost } = postsSlice.actions;
export default postsSlice.reducer;
