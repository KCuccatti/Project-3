import React, { Component } from 'react';
import Login from './components/smart/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from '../src/components/smart/Card/Card.jsx';
import Sidebar from '../src/components/dumb/Sidebar/Sidebar.jsx';

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: '',
      categories: [],
      currentCategory: ''
    };
  }

  //**************************************************************************
  // Callback function will be called from Login Component to pass back the 
  // loggedIn state.
  //**************************************************************************
  passLoggedInState = (params) => {
    this.setState({
      loggedIn: params
    })
  }

  //**************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // categories state.
  //**************************************************************************
  passCategoriesState = (params) => {
    this.setState({
      categories: params
    })
  }

  //**************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // currentCategory state.
  //**************************************************************************
  passCurrentCategory = (params) => {
    console.log("Here is the current Category in App.js" + params);
    this.setState({
      currentCategory: params
    })
  }

  render() {
    return (
      <div className="App" >
        <Login callback={this.passLoggedInState.bind(this)} />
        {
          this.state.loggedIn ?
            <Sidebar callback={this.passCategoriesState && this.passCurrentCategory} />
            : ""
        }
        <Card loggedIn={this.state.loggedIn} currentCategory={this.state.currentCategory} />
      </div>

    );
  }
}

export default App;
