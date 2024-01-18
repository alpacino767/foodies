const actions = {
  LOGIN_BEGIN: 'LOGIN_BEGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGIN_ERR: 'LOGIN_ERR',

  LOGOUT_BEGIN: 'LOGOUT_BEGIN',
  LOGOUT_SUCCESS: 'LOGOUT_SUCCESS',
  LOGOUT_ERR: 'LOGOUT_ERR',

  CHANGE_PASSWORD_BEGIN: 'CHANGE_PASSWORD_BEGIN',
  CHANGE_PASSWORD_SUCCESS: 'CHANGE_PASSWORD_SUCCESS',
  CHANGE_PASSWORD_ERR: 'CHANGE_PASSWORD_ERR',

  loginBegin: () => {
    return {
      type: actions.LOGIN_BEGIN,
    };
  },

  loginSuccess: (data) => {
    return {
      type: actions.LOGIN_SUCCESS,
      data,
    };
  },

  loginErr: (err) => {
    return {
      type: actions.LOGIN_ERR,
      err,
    };
  },

  logoutBegin: () => {
    return {
      type: actions.LOGOUT_BEGIN,
    };
  },

  logoutSuccess: (data) => {
    return {
      type: actions.LOGOUT_SUCCESS,
      data,
    };
  },

  logoutErr: (err) => {
    return {
      type: actions.LOGOUT_ERR,
      err,
    };
  },
  changepasswordBegin: () => {
    return {
      type: actions.CHANGE_PASSWORD_BEGIN,
    };
  },

  changepasswordSuccess: (data) => {
    return {
      type: actions.CHANGE_PASSWORD_SUCCESS,
      data,
    };
  },

  changepasswordErr: (err) => {
    return {
      type: actions.CHANGE_PASSWORD_ERR,
      err,
    };
  },
};

export default actions;
