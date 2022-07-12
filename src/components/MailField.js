import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setMail, setValidation } from '../redux/slices/loginSlice';
import { englishCharsAndNumbersForMail, validMail } from '../utils/regex';

import TextField from '@mui/material/TextField';

const MailField = () => {
  const [isTouched, setTouched] = useState(false);
  const mail = useSelector((state) => state.login.mail.value);
  const isValid = useSelector((state) => state.login.mail.isValid);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    if (englishCharsAndNumbersForMail.test(e.target.value)) {
      dispatch(setMail(e.target.value));
    }
  };

  const handleBlur = () => {
    if (!isTouched) setTouched(true);
    validate();
  };

  const validate = () => {
    if (!validMail.test(mail)) {
      dispatch(setValidation({ field: 'mail', isValid: false }));
    } else {
      dispatch(setValidation({ field: 'mail', isValid: true }));
    }
  };

  return (
    <TextField
      fullWidth
      type='text'
      label='Mail'
      value={mail}
      onChange={handleChange}
      size='small'
      onBlur={handleBlur}
      error={isTouched && !isValid}
      helperText={isTouched && !isValid && 'Not a valid email address'}
    />
  );
};

export default MailField;
