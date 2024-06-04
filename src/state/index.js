import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setLogin: (state, action) => {
      const { user, token, type } = action.payload;
      state.user = user;
      state.token = token;
      if (type === 'student/login') {
        state.user.studentId = user._id;
      } else if (type === 'alumni/login') {
        state.user.alumniId = user._id;
      } else if (type === 'admin/login') {
        state.user.adminId = user._id;
      }
      console.log("User logged in:", state.user);
    },
    setLogout: (state) => {
      state.user = null;
      state.token = null;
    },
  },
});

export const { setLogin, setLogout } = authSlice.actions;
export default authSlice.reducer;
