import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

export const getAllUsers = createAsyncThunk("users/getAllUsers", async () => {
  return await getDocs(collection(db, "users")).then((query) => {
    return query.docs.map((user, i) => {
      const { name, uid, email, imgUrl } = user.data();
      return { id: i, name, uid, email, imgUrl };
    });
  });
});

export enum Status {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

type UserDb = {
  id: number;
  name: string;
  uid: string;
  email: string;
  imgUrl: string | null;
};

interface IAllUsers {
  users: UserDb[];
  status: string;
}

const initialState: IAllUsers = {
  users: [],
  status: Status.LOADING,
};

const allUsersSlice = createSlice({
  name: "allUsers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, (state) => {
      state.users = [];
      state.status = Status.LOADING;
    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.status = Status.SUCCESS;
    });
    builder.addCase(getAllUsers.rejected, (state) => {
      state.users = [];
      state.status = Status.ERROR;
    });
  },
});

export default allUsersSlice.reducer;
