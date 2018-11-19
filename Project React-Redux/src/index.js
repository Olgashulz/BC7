import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App.jsx';
import  { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import store from "./redux/store/store";
import { ConnectedRouter } from 'connected-react-router'
import {history} from "./redux/store/store"



ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
        <App />
    </ConnectedRouter>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
