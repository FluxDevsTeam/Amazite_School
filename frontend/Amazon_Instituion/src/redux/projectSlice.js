import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isSidebarOpen: false,
};

const projectSlice = createSlice({
  name: 'amaziteProject',
  initialState,
  reducers: {
    setIsSidebarOpen: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setIsSidebarOpen } = projectSlice.actions;
export default projectSlice.reducer;
