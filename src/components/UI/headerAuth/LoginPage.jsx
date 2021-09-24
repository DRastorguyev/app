import { Button, Form, Input } from 'antd';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { login as loginApi, logout as callLogout } from '../../../http/userAPI';
import MyInput from '../input/MyInput';
import cl from './AuthPageStyleSheets.module.css';

export default function LoginPage({ setIsAuth, isAuth }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const login = () => {
    loginApi(email, password, setIsAuth);
  };

  if(isAuth) return (<Redirect to='/' />)

  return (
    <div className={cl.login_form}>
      <p className={cl.title}>Welcome back!</p>
      <div className={cl.main_form}>
        <div>
          <div className={cl.form}>
            <p className={cl.form_title__email}>email:</p>
            <Input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              style={{ marginBottom: 15, marginLeft: 32 }}
              type='email'
              placeholder='ex: index@mail.com'
            ></Input>
          </div>
          <div className={cl.form}>
            <p className={cl.form_title__password}>password:</p>
            <Input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type='password'
              placeholder='ex: steveJobs123'
            ></Input>
          </div>
        </div>
        <Button onClick={login} className={cl.login_btn} type='ghost'>
          Login!
        </Button>
      </div>
    </div>
  );
}
