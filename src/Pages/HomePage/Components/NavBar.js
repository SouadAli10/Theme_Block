import React from 'react';
const NavBar = () => (
  <div id="navigation" className="navbar navbar-inverse navbar-fixed-top default" role="navigation">
    <div className="container">


      <div className="navbar-header">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" href="index.html">Groovin</a>
      </div>

      <div className="navigation">
        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1"><nav>
          <ul className="nav navbar-nav navbar-right">
            <li className="current"><a href="#intro">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#works">Works</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul></nav>
        </div>
      </div>

    </div>
  </div>
)
export default NavBar