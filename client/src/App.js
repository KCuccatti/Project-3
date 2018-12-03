import React, { Component } from 'react';
import Login from './components/smart/Login';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import Card from '../src/components/smart/Card/Card.jsx';
import Sidebar from '../src/components/smart/Sidebar/Sidebar.jsx';
import axios from "axios";
class App extends Component {

  constructor() {
    super()
    this.state = {
      loggedIn: '',
      categories: [],
      questions: [],
      currentCategoryNumber: 1,
      currentCategoryDesc: 'Quantum',
      questionNumber: 0
    };
  }

  // ***********************************************************
  // Default to the first Category when component first mounts
  // ***********************************************************
  componentDidMount = () => {
    this.getQuestions(1);
  }

  // **********************************************************
  // Get questions from db and set state of questions to response
  // **********************************************************
  getQuestions = (aCategory) => {
    axios.get(`/api/GetQuestions/${aCategory}`)
      .then((response) => { this.setState({ questions: response.data }) })
  }

  // **************************************************************************
  // Callback function will be called from Login Component to pass back the 
  // loggedIn state.
  // **************************************************************************
  getLoggedInState = (params) => {
    this.setState({
      loggedIn: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // categories state.
  // **************************************************************************
  getCategoriesState = (params) => {
    this.setState({
      categories: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // currentCategory state.
  // **************************************************************************
  getCurrentCategoryNumber = (params) => {
    this.setState({
      currentCategoryNumber: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // currentCategory description state.
  // **************************************************************************
  getCurrentCategoryDesc = (params) => {
    this.setState({
      currentCategoryDesc: params
    })
  }

  // **************************************************************************
  // Callback function will be called from Sidebar Component to pass back the 
  // questionNumber state.
  // **************************************************************************
  getQuestionNumber = (params) => {
    this.setState({
      questionNumber: params
    })
  }

  hello = () => {
    this.sidebar.resetQuestionNum();
  }
  
  render() {
    return (
      <div className="App" >
        <Login callback={this.getLoggedInState} />

        {
          this.state.loggedIn ?
            <Sidebar getQuestions={this.getQuestions} callback={this.getCategoriesState && this.getCurrentCategoryDesc} callbackForQuestionNumber={this.getQuestionNumber} callbackForCurrentCategoryNumber={this.getCurrentCategoryNumber} />
            : ""
        }

        <Card onRef={ref => (this.sidebar = ref)} questions={this.state.questions} loggedIn={this.state.loggedIn} currentCategoryNumber={this.state.currentCategoryNumber} categories={this.state.categories} currentCategoryDesc={this.state.currentCategoryDesc} questionNumber={this.state.questionNumber} />
      </div>
    );
  }
}

export default App;
