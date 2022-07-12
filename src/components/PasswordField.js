import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setPass, setValidation } from '../redux/slices/loginSlice';
import { englishCharsAndNumbersForPass, validPassword } from '../utils/regex';

import TextField from '@mui/material/TextField';

const PasswordField = () => {
  const [isTouched, setTouched] = useState(false);
  const isValid = useSelector((state) => state.login.pass.isValid);
  const pass = useSelector((state) => state.login.pass.value);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (englishCharsAndNumbersForPass.test(e.target.value)) {
      dispatch(setPass(e.target.value));
    }
  };

  const handleBlur = () => {
    if (!isTouched) setTouched(true);
    validate();
  };

  const validate = () => {
    if (!validPassword.test(pass)) {
      dispatch(setValidation({ field: 'pass', isValid: false }));
    } else {
      dispatch(setValidation({ field: 'pass', isValid: true }));
    }
  };

  return (
    <TextField
      fullWidth
      type='password'
      label='Password'
      value={pass}
      onChange={handleChange}
      onBlur={handleBlur}
      size='small'
      error={isTouched && !isValid}
      helperText={
        isTouched &&
        !isValid &&
        'Must contain at least 8 chars, 1 uppercase letter and a number'
      }
    />
  );
};

export default PasswordField;
