import { configureStore } from "@reduxjs/toolkit";
import allUsersSlice from "./slices/allUsersSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    user: userSlice,
    allUsers: allUsersSlice
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
