import { Button, Input, Modal } from 'antd';
import React, { useState } from 'react';

export default function Header() {
  const [loginModal, setLoginModal] = useState(false);
  const [registrationModal, setRegistrationModal] = useState(false);

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
        onOk={() => setLoginModal(false)}
        onCancel={() => setLoginModal(false)}
      ></Modal>
      <Modal
        title='Sign Up'
        centered
        visible={registrationModal}
        onOk={() => setRegistrationModal(false)}
        onCancel={() => setRegistrationModal(false)}
      >
        <p style={{textAlign: 'center', fontSize: 18}} >Welcome!</p>
        <form>
          <section>
            
          </section>
        </form>
        <Input></Input>
        <Input></Input>
      </Modal>
    </header>
  );
}
