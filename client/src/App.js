import React, { Component } from 'react';
import Login from './components/smart/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from '../src/components/smart/Card/Card.jsx';
import Sidebar from '../src/components/dumb/Sidebar/Sidebar.jsx';
import axios from "axios";
class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: '',
      categories: [],
      questions:[],
      currentCategory: '1',
      currentCategoryDesc: 'Quantum'
    };
  }

  // ***********************************************************
  // Default to the first Category when component first mounts
  // ***********************************************************
  componentDidMount = () => {
    this.getQuestions(1);
  }

  getQuestions = (aCategory) => {
    axios.get(`/api/GetQuestions/${aCategory}`)
    .then((response)=>{this.setState({questions:response.data})})
    
}
  // **************************************************************************
  // Callback function will be called from Login Component to pass back the 
  // loggedIn state.
  // *************************************************************************
  passLoggedInState = (params) => {
    this.setState({
      loggedIn: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // categories state.
  // **************************************************************************
  passCategoriesState = (params) => {
    this.setState({
      categories: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // currentCategory state.
  // **************************************************************************
  passCurrentCategory = (params) => {
    this.setState({
      currentCategory: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // currentCategory description state.
  // **************************************************************************
  passCurrentCategoryDesc = (params) => {
    this.setState({
      currentCategoryDesc: params
    })
  }


  render() {
    let currentCategory = this.state.currentCategory;
    return (
      <div className="App" >
        <Login callback={this.passLoggedInState.bind(this)} />
        {
          this.state.loggedIn ?
            <Sidebar getQuestions={this.getQuestions} callback={this.passCategoriesState && this.passCurrentCategory && this.passCurrentCategoryDesc} />
            : ""
        }
        <Card questions={this.state.questions} loggedIn={this.state.loggedIn} currentCategory={currentCategory} categories={this.state.categories} currentCategoryDesc={this.state.currentCategoryDesc}/>
      </div>

    );
  }
}

export default App;
