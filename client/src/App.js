import React, { Component } from 'react';
import Login from './components/smart/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from '../src/components/dumb/Card/Card.jsx';
import Sidebar from '../src/components/dumb/Sidebar/Sidebar.jsx';

class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: '',
    };
  }

  // Define callback function in Parent (App.js) and send it as props to Child 1 (Login)
  passLoggedInState(params) {
    this.setState({
      loggedIn: params
    })
  }

  render() {
    return (
      <div className="App" >
        <div>
          <Login callback={this.passLoggedInState.bind(this)} />
        </div>
        <Sidebar loggedIn={this.state.loggedIn}/>
        <Card loggedIn={this.state.loggedIn}/>
      </div>
      
    );
  }
}

export default App;
