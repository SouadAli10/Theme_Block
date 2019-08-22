import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import HomePage from '../HomePage/HomePage.js';
class Home extends React.Component {

    render() {
      return (
        <Router>
          <Switch>
            <Route exact path="/" render={() => <HomePage/>} />

          </Switch>
        </Router>
      );
    }
  }
  export default Home;