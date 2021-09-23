import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-dom'
import App from './App';
import 'antd/dist/antd.css';

ReactDOM.render(
  <HashRouter> <App /></HashRouter>,
  document.getElementById('root')
);