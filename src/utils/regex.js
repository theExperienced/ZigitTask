const validMail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

const validPassword =
  /(?=[A-Za-z0-9@#$%^&+!=]+$)^(?=.*[A-Z])(?=.*[0-9])(?=.{8,}).*$/;

const englishCharsAndNumbersForMail = /^$|^[a-zA-Z0-9!@#$%&'*+-/=?^_`{|}~]+$/;

const englishCharsAndNumbersForPass = /^$|^[a-zA-Z0-9]+$/;

module.exports = {
  validMail,
  validPassword,
  englishCharsAndNumbersForMail,
  englishCharsAndNumbersForPass,
};
