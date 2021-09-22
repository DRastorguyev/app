import { $authHost, $host } from './index';

export const registration = async (email, password) => {
  const {data} = await $host.post('/user/registration', {
    email,
    password,
  });
  localStorage.setItem('token', data.token)
};

export const login = async (email, password) => {
  const {data} = await $host.post('/user/login', {
    email,
    password,
  });
  localStorage.setItem('token', data.token)
};

export const check = async () => {
  const responce = await $host.post('user/auth');
};
