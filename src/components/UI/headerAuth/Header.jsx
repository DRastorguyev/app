import { Button } from 'antd';
import React from 'react';

export default function Header() {
  return (
    <header style={{  display: 'flex', justifyContent: 'flex-end'}}>
      <Button>Sign In</Button>
      <Button type='primary' style={{ marginLeft: 10, fontWeight: 'bold' }}>
        Sign Up
      </Button>
    </header>
  );
}
