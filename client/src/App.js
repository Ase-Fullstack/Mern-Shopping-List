import React, { Component } from 'react';
import AppNavbar from './Components/AppNavbar';
import ShoppingList from './Components/ShoppingList';
import ItemModal from './Components/ItemModal';
import { Container } from 'reactstrap';

import { Provider } from 'react-redux';
import store from './store';

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './Components/Navbar.css';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
        <AppNavbar/>
        <Container>
          <ItemModal/>
          <ShoppingList/>
        </Container>
      </div>
      </Provider>
    );
  }
}




export default App;
