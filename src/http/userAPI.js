import { $host } from './index';
import { message } from 'antd';

export const registration = async (email, password, callback = false) => {
  try {
    const { data } = await $host.post('/user/registration', {
      email,
      password,
    });
    if (!data.token) return;
    localStorage.setItem('token', data.token);
    if (callback) callback()
  } catch (error) {
    if(email) message.error('Email already exists')
  }
};

export const login = async (email, password, callback = false) => {
  try {
    const { data } = await $host.post('/user/login', {
      email,
      password,
    });
    if (!data.token) return;
    localStorage.setItem('token', data.token);
    if (callback) callback()
  } catch (error) {
    message.error('Incorrect login or password');
  }
};

export const logout = (setIsAuth) => {
  localStorage.removeItem('token');
  setIsAuth(false);
};

export const check = async () => {
  const responce = await $host.post('user/auth');
};
