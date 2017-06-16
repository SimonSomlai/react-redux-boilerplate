import React from 'react';

import Home from "../pages/Home.js"
import Page1 from "../pages/Page1.js"
import Page2 from "../pages/Page2.js"

import {main, Switch, Route} from "react-router-dom"

class Routes extends React.Component {

  render() {
    return (
      <main>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/page1" component={Page1}/>
          <Route exact path="/page2" component={Page2}/>
        </Switch>
      </main>
    );
  }
}



export default Routes;
