import { Button, Input, Modal } from 'antd';
import React, { useContext, useState } from 'react';
import { login, registration } from '../../../http/userAPI';

const Header = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const registr = async () => {
    let data;
    data = await registration(email, password);
  };

  const loginUser = async () => {
    let user;
    user = await login(email, password);
    console.log(user);
  };

  return (
    <header style={{ display: 'flex', justifyContent: 'flex-end' }}>
      <Button type='ghost' onClick={() => setLoginModal(true)}>
        Sign In
      </Button>
      <Button
        onClick={() => setRegistrationModal(true)}
        type='primary'
        style={{ marginLeft: 10, fontWeight: 'bold' }}
      >
        Sign Up
      </Button>
      <Modal
        title='Sign In'
        centered
        visible={loginModal}
        onOk={() => setLoginModal(false), () => loginUser()}
        onCancel={() => setLoginModal(false)}
      >
        <form>
          <section style={{ display: 'flex' }}>
            <p style={{ marginRight: 57 }}>Mail:</p>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ height: 27 }}
              placeholder='yourmail@gmail.com...'
            ></Input>
          </section>
          <section style={{ display: 'flex' }}>
            <p style={{ marginRight: 25 }}>Password:</p>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ height: 27 }}
              placeholder='steveJobs123...'
              type='password'
            ></Input>
          </section>
        </form>
      </Modal>
      <Modal
        title='Sign Up'
        centered
        visible={registrationModal}
        onOk={(() => setRegistrationModal(false), () => registr())}
        onCancel={() => setRegistrationModal(false)}
      >
        <p style={{ textAlign: 'center', fontSize: 18 }}>Welcome!</p>
        <form>
          <section style={{ display: 'flex' }}>
            <p style={{ marginRight: 57 }}>Mail:</p>
            <Input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ height: 27 }}
              placeholder='yourmail@gmail.com...'
            ></Input>
          </section>
          <section style={{ display: 'flex' }}>
            <p style={{ marginRight: 25 }}>Password:</p>
            <Input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ height: 27 }}
              placeholder='steveJobs123...'
              type='password'
            ></Input>
          </section>
        </form>
      </Modal>
    </header>
  );
};

export default Header;
