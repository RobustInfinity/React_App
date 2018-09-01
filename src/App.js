import './stylesheets/App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import { Provider } from './Context'
import Header from './components/Header'
import Home from './components/Home'
import About from './views/About'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'
import NotFound from './views/NotFound'

class App extends Component {
  render() {
    // return (
    //   <div className="App">
    //     <Header brand='Contact Manager' />
    //      <Contact name='Jhon doe' email='jdoe@gmail.com' phoneNumber='9999999' />
    //      <Contact name='Bob Ross' email='bross@gmail.com' phoneNumber='88888888' />
    //   </div>
    // );
    return (
      <Provider>
      <Router>
      <div className="App container">
        <Header brand="Contact Manager" />
        <Switch>
          <Route exact path='/' render={(props) => <Home title="Modern Contact Directory" {...props} />}></Route>
          <Route exact path='/contact' component={Contacts}></Route>
          <Route exact path='/contact/add' component={AddContact}></Route>
          <Route exact path='/about' component={About}></Route>
          <Route component={NotFound}></Route>
         </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}

export default App;


