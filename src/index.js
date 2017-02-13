import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import HomePag from './Component/HomePag';
import Test from './Component/Test';
import Music from './Component/Music';
import Foto from './Component/Foto';
import { Router, Route, browserHistory } from 'react-router';
import './index.css';
import 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

ReactDOM.render(
  <Router history={browserHistory}>
      <Route path='/' component={App}>
            <Route path='home' component={HomePag} />
            <Route path='test' component={Test} />
            <Route path='music' component={Music} />
            <Route path='fotochgi' component={Foto} />
      </Route>
  </Router>,
  document.getElementById('root')
);
