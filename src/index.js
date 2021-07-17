import React from 'react';
import reactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reminder from './reducers/reduce';
import App from './components/App';

const store=createStore(reminder);

reactDom.render(<Provider store={store}><App/></Provider>,document.getElementById('root'))