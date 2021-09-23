import { $authHost, $host } from './index';
import { message } from 'antd';

export const registration = async (email, password, setIsAuth) => {
  const {data} = await $host.post('/user/registration', {
    email,
    password,
  });
  if(!data.token) return
  localStorage.setItem('token', data.token)
  
  setIsAuth(true)
};

export const login = async (email, password, setIsAuth) => {
  const {data} = await $host.post('/user/login', {
    email,
    password,
  });
  if(!data.token) return 
  localStorage.setItem('token', data.token)
  setIsAuth(true)
};

export const logout = (setIsAuth) => {
  localStorage.removeItem('token')
  setIsAuth(false)
}

export const check = async () => {
  const responce = await $host.post('user/auth');
};