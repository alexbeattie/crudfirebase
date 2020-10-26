// import logo from './logo.svg';
import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';


import AddTutorial from "./components/add-tutorial.component";
import TutorialsList from "./components/tutorials-list.component";


class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <div>
          [Page content here]
        </div>
      </div>
    )
  }
}
class Navbar extends React.Component {
  render() {
    return (
      <div>
        <li>
          <a href="/tutorials" className="navbar-brand">
            bezKoder
          </a>
        </li>
        <li className="nav-item">
          <Link to={"/tutorials"} className="nav-link">
            Tutorials
              </Link>
        </li>
        <li className="nav-item">
          <Link to={"/add"} className="nav-link">
            Add
              </Link>
        </li>

        <Switch>
          <Route exact path={["/", "/tutorials"]} component={TutorialsList} />
          <Route exact path="/add" component={AddTutorial} />
        </Switch>

      </div>
    );
  }
}


export default App;
