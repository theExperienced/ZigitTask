import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loginAsync } from '../redux/slices/loginSlice';

import Button from '@mui/material/Button';
import LoadingSpin from 'react-loading-spin';

const LoadingAwareButton = () => {
  const [isLoading, setLoading] = useState(false);
  const [isClicked, setClicked] = useState(false);
  const personalDetails = useSelector((state) => state.user.personalDetails);
  const isMailValid = useSelector((state) => state.login.mail.isValid);
  const isPassValid = useSelector((state) => state.login.pass.isValid);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isClicked) {
      setLoading(true);
    }
  }, [isClicked, personalDetails]);

  const handleClick = (e) => {
    if (isMailValid && isPassValid) {
      setClicked(true);

      dispatch(loginAsync());
    }
  };

  return (
    <Button
      onClick={handleClick}
      fullWidth
      sx={{ textTransform: 'capitalize' }}
    >
      Login&nbsp;&nbsp; {isClicked && isLoading && <LoadingSpin size='13px' />}
    </Button>
  );
};

export default LoadingAwareButton;
