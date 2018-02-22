import React from 'react';
import * as ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { render } from 'react-dom';
import {createStore, combineReducers, applyMiddleware} from "redux";
import {Provider} from "react-redux";

import App from './components/App';
import searchReducer, { initialState } from './reducers/searchReducer';

import result, { movieResult, relatedItems } from './resultmock';

import './css/main.css';

const store = createStore(searchReducer, initialState );

render(<Provider store={store}>
            <Router>
                <App/>
            </Router>
        </Provider>     
    , document.getElementById('app'));
