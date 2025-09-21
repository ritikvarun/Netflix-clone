import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: {
    user: null,
    isLoading: false,
  },
  reducers: {
    //actions
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setLoding: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});
export const { setUser, setLoding } = userSlice.actions;
export default userSlice.reducer;
