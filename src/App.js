import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import './assets/css/animate.css';
import './assets/css/bootstrap.css';
import './assets/css/bootstrap-theme.css';
import './assets/css/custom-fonts.css';
import './assets/css/font-awesome.css';
import './assets/css/overwrite.css';
import './assets/css/slippry.css';
import './assets/css/style.css';
import Home from './Pages/Router/RouterPage'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
      </div>
    );
  }
}

export default App;
