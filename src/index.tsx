import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';

import { reducer } from 'data/reducer';

import { App } from 'container/app';

const store = createStore(reducer, devToolsEnhancer({}));

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('react-content'),
);
