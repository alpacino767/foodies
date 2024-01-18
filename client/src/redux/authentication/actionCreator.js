import Cookies from 'js-cookie';
import { toast } from 'react-hot-toast';
import actions from './actions';
import { DataService } from '../../config/dataService/dataService';

const {
  loginBegin,
  loginSuccess,
  loginErr,
  logoutBegin,
  logoutSuccess,
  logoutErr,
  changepasswordBegin,
  changepasswordSuccess,
  changepasswordErr,
} = actions;

const login = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/auth/login', values);
      if (response.data.error) {
        toast.error(response.data.error);
        dispatch(loginErr(response.data.error));
      } else {
        console.log('respone', response);
        Cookies.set('access_token', response.data.userDetails.token);
        console.log(response.data.userDetails.token);
        Cookies.set('logedIn', true);
        dispatch(loginSuccess(true));
        callback();
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const register = (values, callback) => {
  return async (dispatch) => {
    dispatch(loginBegin());
    try {
      const response = await DataService.post('/auth/register', values);
      if (response.data.error) {
        toast.error(response.data.error);
        dispatch(loginErr('Registration failed!'));
      } else {
        console.log('see the data', response);
        Cookies.set('access_token', response.data.userDetails.token);
        Cookies.set('logedIn', true);
        dispatch(loginSuccess(true));
        callback();
      }
    } catch (err) {
      dispatch(loginErr(err));
    }
  };
};

const logOut = (callback) => {
  return async (dispatch) => {
    dispatch(logoutBegin());
    try {
      Cookies.remove('logedIn');
      Cookies.remove('access_token');
      dispatch(logoutSuccess(false));
      callback();
    } catch (err) {
      dispatch(logoutErr(err));
    }
  };
};

const changepassword = (password, newPassword) => {
  return async (dispatch) => {
    dispatch(changepasswordBegin());
    try {
      const response = await DataService.patch('/settings/password', {
        password,
        newPassword,
      });
      console.log('changepassword response', response);
      if (response.data.error) {
        dispatch(changepasswordErr('Invalid password, try again'));
        toast.error('Invalid password, try again');
      } else {
        dispatch(changepasswordSuccess(response.data));
        toast.success('password changed successfully');
      }
    } catch (error) {
      dispatch(changepasswordErr(error.message || 'Error changing password'));
    }
  };
};

export { login, logOut, register, changepassword };
