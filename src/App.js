import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Provider } from './Context'
import Header from './components/Header'
import Contacts from './components/Contacts'
import AddContact from './components/AddContact'

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
      <div className="App container">
        <Header brand="Contact Manager" />
        <AddContact />
         <Contacts />
      </div>
      </Provider>
    );
  }
}

export default App;


