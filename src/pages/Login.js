import Grid from '@mui/material/Grid';
import LoginForm from '../components/LoginForm';

const Login = () => {
  return (
    <Grid container justifyContent='center'>
      <Grid item>
        <LoginForm />
      </Grid>
    </Grid>
  );
};

export default Login;
