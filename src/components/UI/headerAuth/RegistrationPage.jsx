import React, { useState } from 'react';
import { Button, Input } from 'antd';
import { registration, logout as callLogout } from '../../../http/userAPI';
import cl from './AuthPageStyleSheets.module.css';

export default function RegistrationPage({ setIsAuth }) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registr = async () => {
    let data;
    data = await registration(email, password, setIsAuth);
  };
  return (
    <div className={cl.login_form}>
      <p className={cl.title}>Create account</p>
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
        <Button onClick={registr} className={cl.login_btn} type='primary'>
          Register!
        </Button>
      </div>
    </div>
  );
}
