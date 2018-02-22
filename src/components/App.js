import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { render } from 'react-dom';

import SearchPage from './SearchPage';
import ResultPage from './ResultPage';
import { Footer } from './Footer';


function App(props) {
    return (
      <div className="container">
        <Switch>
           <Route exact path="/" component={SearchPage}/>
           <Route path="/search/:keyWord" component={SearchPage}/>
           <Route path="/result/:resultId" component={ResultPage}/>
        </Switch>
        <Footer/>
      </div>
    )
};

export default App;
