import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login as loginRequest } from '../../api/api';

const [isloading, setIsloading] = useState(false);

export const useLogin = () => {
  const navigate = useNavigate();

  const Login = async (email, password) => {
    setIsloading(true);
    const response = await loginRequest({
      email,
      password,
    });

    setIsloading(false);
    if (response.error) {
      return console.log(response.error);
    }
    const { userDetails } = response.data;
    localStorage.setItem('user', userDetails);
    navigate('/');
  };
  return {
    Login,
    isloading,
  };
};
