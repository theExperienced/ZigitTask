import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import PasswordField from './PasswordField';
import MailField from './MailField';
import LoadingAwareButton from './LoadingAwareButton';

const LoginForm = () => {
  return (
    <Paper sx={{ maxWidth: '300px', p: 4, py: 8 }}>
      <Grid container justifyContent='center' rowGap={4}>
        <Grid item xs={12}>
          <MailField />
        </Grid>
        <Grid item xs={12}>
          <PasswordField />
        </Grid>
        <Grid item xs={6}>
          <LoadingAwareButton />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default LoginForm;
