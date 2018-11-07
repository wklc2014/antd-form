import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store/index.js';
import App from '../pages/App/AppContainer.jsx';

import '../mock/index.js';
import '../utils/global.js';
import '../assets/index.less';

render(
  <Provider store={store}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById("root")
);