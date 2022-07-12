import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { getProjectsAsync } from '../redux/slices/userSlice';

import Grid from '@mui/material/Grid';
import UserDetailsTable from '../components/UserDetailsTable';
import UserProjectsTable from '../components/UserProjectsTable/index.jsx';

const Info = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProjectsAsync());
  }, []);

  return (
    <Grid container justifyContent='center' rowGap={5}>
      <Grid item>
        <UserDetailsTable />
      </Grid>
      <Grid item>
        <UserProjectsTable />
      </Grid>
    </Grid>
  );
};

export default Info;
