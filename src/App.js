// main import
import RegistrationPage from './components/UI/headerAuth/RegistrationPage';
import LoginPage from './components/UI/headerAuth/LoginPage';
import Header from './components/UI/headerAuth/Header';
import Todos from './components/UI/headerAuth/Todos';
import { useEffect, useState } from 'react';
import './App.css';

// router's import

import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

function App() {
  const [isAuth, setIsAuth] = useState();

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('token'));
  }, []);

  return (
    <div className='App'>
      <HashRouter>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Redirect to='/login' />
        <Switch>
          {!isAuth ? (
            <>
              <Route path='/login'>
                <LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />
              </Route>
              <Route path='/registration'>
                <RegistrationPage isAuth={isAuth} setIsAuth={setIsAuth} />
              </Route>
              <Redirect to='/login' />
            </>
          ) : (
            <>
              <Route path='/'>
                <Todos isAuth={isAuth} />
              </Route>
            </>
          )}
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
