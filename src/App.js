import './App.css';
import Header from './components/UI/headerAuth/Header';
import LoginPage from './components/UI/headerAuth/LoginPage';
import RegistrationPage from './components/UI/headerAuth/RegistrationPage';

// Router

import { Switch, Route, HashRouter, Redirect } from 'react-router-dom';

import Todos from './components/UI/headerAuth/Todos';
import { useEffect, useState } from 'react';

function App() {

  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    setIsAuth(!!localStorage.getItem('token'));
  }, []);

  return (
    <div className='App'>
      <HashRouter>
        <Header isAuth={isAuth} setIsAuth={setIsAuth} />
        <Switch>
          <Route path='/login'>
            <LoginPage isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route path='/registration'>
            <RegistrationPage isAuth={isAuth} setIsAuth={setIsAuth} />
          </Route>
          <Route exact path='/'>
            <Todos isAuth={isAuth} />
          </Route>
          <Redirect to='/login' />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
