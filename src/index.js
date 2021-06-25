import React, {StrictMode} from 'react';
import ReactDOM from 'react-dom';
import {HashRouter as Router} from 'react-router-dom';
import {Provider} from 'react-redux';

import {store} from './store/store';
import {App} from './components/app/app';

import './index.scss';

ReactDOM.render((
  <StrictMode>
    <Provider store={store}>
      <Router>
        <App/>
      </Router>
    </Provider>
  </StrictMode>
), document.querySelector(`#root`));

