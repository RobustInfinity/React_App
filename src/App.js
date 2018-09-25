import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Header from './components/Header'
import Users from './components/Users'
import Todos from './components/Todos'
import Photos from './components/Photos'
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App container">
      <Header></Header>
      <Switch>
      <Route exact path='/users' component={Users}></Route>
      <Route exact path='/todos' component={Todos}></Route>
      <Route exact path='/photos' component={Photos}></Route>
        </Switch>
      </div>
      </Router>
    );
  }
}

export default App;
