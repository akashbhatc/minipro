import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  token: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginUser: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
    },
    logoutUser: (state) => {
      state.user = null;
      state.token = null;
    },
    setStudentId: (state, action) => {
      state.user.studentId = action.payload.studentId;
    },
    setAlumniId: (state, action) => {
      state.user.alumniId = action.payload.alumniId;
    },
    setAdminId: (state, action) => {
      state.user.adminId = action.payload.adminId;
    },
  },
});

export const { loginUser, logoutUser, setStudentId, setAlumniId, setAdminId } = authSlice.actions;
export default authSlice.reducer;
