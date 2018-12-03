import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';


export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      currentCategoryNumber: 1,
      currentCategoryDesc: 'Quantum',
      questionNumber: 0
    };
  }


  // **********************************************************
  // Pass currentCategory up to parent (App) component
  // **********************************************************
  passCurrentCategoryNumber(aPropertyValue) {
    this.props.callbackForCurrentCategoryNumber(aPropertyValue);
    this.props.getQuestions(aPropertyValue);
  }

  // **********************************************************
  // Pass currentCategoryDesc up to parent (App) component
  // **********************************************************
  passCurrentCategoryDesc(aPropertyValue) {
    this.props.callback(aPropertyValue);
  }


  // **********************************************************

  passCurrentQuestionNumber(categoryNumber, questionNumberState) {
    this.props.callbackForQuestionNumber(categoryNumber, questionNumberState);
  }


  // **********************************************************************
  // Handle what occurs on click of a category, set state of currentCategory
  // to value of category attribute. Also, call getCurrentCategory to set 
  // props of value for category to be used for the callback in App.js
  // **********************************************************************
  handleCategoryClick = (evt) => {
    this.setState({ currentCategoryNumber: evt.target.getAttribute('category'), questionNumber:0 });
    this.passCurrentCategoryNumber(evt.target.getAttribute('category'));
    this.passCurrentCategoryDesc(evt.target.getAttribute('selectedcategory'));
    this.passCurrentQuestionNumber(evt.target.getAttribute('category'), 0);
  }

  // *********************************************************
  // When component mounts, fetch categories from back end, and
  // set state of categories to data coming from back end
  // *********************************************************
  componentDidMount() {
    fetch('/api/GetCategory')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }

  
  // Needs work. Need to find a way to make content's question number state reset
  // on click of a new category, but a new category click happens here, in sidebar.
  /*
  resetQuestionNum = () => {
    console.log("In resetQuestionNum"); 
    console.log("currentCategory in resetQuestionNum is " + this.state.currentCategoryNumber);
    if (!this.props.currentCategoryNumber) {
      this.setState({ questionNumber: 0 });
    }
    console.log("Question number in content after resetQuestionNum runs" + this.state.questionNumber);
}
*/


  render() {
    return (
      <div className="category" >
        <br></br>
        {
          this.state.categories.map((category, index) =>
            <div onClick={this.handleCategoryClick} className="sidebarBtn" category={index + 1} key={index} selectedcategory={category.description}> <img className="sidebarImg" src={category.image_name} alt={category.description} width="60" /> {category.description}
            </div>
          )
        }
      </div>
    )
  }
}

Sidebar.propTypes = {
  callback: PropTypes.func,
  callbackForQuestionNumber: PropTypes.func,
  callbackForCurrentCategoryNumber: PropTypes.func
}

