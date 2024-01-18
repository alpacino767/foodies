export const validateUsername = (username) => {
  //  username should have between 3 and 8 characters without the spaces
  const regex = /^\S{3,8}$/;
  return regex.test(username);
};

export const usernameValidationMessage = 'username should have between 3 and 8 characters. No spaces are allowed';
