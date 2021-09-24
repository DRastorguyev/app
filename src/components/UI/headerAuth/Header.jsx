import { Button } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { logout } from '../../../http/userAPI';

export default function Header({ isAuth, setIsAuth }) {

  const logoutUser = () => {
    logout(setIsAuth)
  }

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <div>
        <Link style={{ fontSize: 60, fontWeight: 100, color: 'white' }} to='/'>
          Todo
        </Link>
      </div>
      <div>
        {!isAuth ? (
          <>
            <Link to='/login'>
              <Button style={{ marginRight: 10 }} value='small' type='ghost'>
                Sign In
              </Button>
            </Link>
            <Link to='/registration'>
              <Button value='small' type='primary'>
                Sign Up
              </Button>
            </Link>
          </>
        ) : (
          <Link to='/'>
            <Button onClick={logoutUser} value='small' type='primary'>
              Logout
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
}
