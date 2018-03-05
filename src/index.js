import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import {createStore, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import thunk from 'redux-thunk';

import App from './components/App';
import searchReducer, { initialState } from './reducers/searchReducer';

import './css/main.css';

const store = createStore(searchReducer, initialState, applyMiddleware(thunk) );

render(<Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>     
    , document.getElementById('app'));
