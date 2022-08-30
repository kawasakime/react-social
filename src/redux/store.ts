import { configureStore } from "@reduxjs/toolkit";
import allUsersSlice from "./slices/allUsersSlice";
import postsSlice from "./slices/postsSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    allUsers: allUsersSlice,
    posts: postsSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
