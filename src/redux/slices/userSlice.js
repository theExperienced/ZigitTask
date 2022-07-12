import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    personalDetails: null,
    projects: [],
  },
  reducers: {
    setTokenAndDetails: (state, action) => {
      const { token, personalDetails } = action.payload;

      state.token = token;
      state.personalDetails = personalDetails;
    },
    setProjects: (state, action) => {
      state.projects = action.payload;
    },
  },
});

export const getProjectsAsync = () => async (dispatch, getState) => {
  try {
    const res = await axios.get(process.env.REACT_APP_PROJECTS_API, {
      headers: {
        Authorization: `Bearer ${getState().user.token}`,
      },
    });

    if (res.status === 200 || res.status === 201) {
      const projects = res.data;

      dispatch(setProjects(projects));
    }
  } catch (error) {
    console.log(
      '🚀 ~ file: loginSlice.js ~ line 150 ~ loginAsync ~ error',
      error
    );
  }
};

export const { setTokenAndDetails, setProjects } = userSlice.actions;

export default userSlice.reducer;
