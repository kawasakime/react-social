import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
    email: string | null,
    token: string | null,
    id: string | null,
    name: string | null,
    imgUrl: string | null
}

const initialState: UserState = {
    email: null,
    token: null,
    id: null,
    name: null,
    imgUrl: null
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      state.email = action.payload.email
      state.token = action.payload.token
      state.id = action.payload.id
      state.name = action.payload.name
      state.imgUrl = action.payload.imgUrl
    },
    removeUser: (state) => {
      state.email = null;
      state.token = null;
      state.id = null;
      state.name = null
      state.imgUrl = null
    }
  }
})

export const {setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;