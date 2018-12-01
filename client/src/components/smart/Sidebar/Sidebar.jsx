import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';


export default class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      currentCategory: '1',
      currentCategoryDesc: 'Quantum',
      questionNumber: 0
    };
  }

 
  // **********************************************************
  // Pass currentCategory up to parent (App) component
  // **********************************************************
  passCurrentCategory(aPropertyValue) {
    this.props.callback(aPropertyValue);
    this.props.getQuestions(aPropertyValue);
  }

  // **********************************************************
  // Pass currentCategoryDesc up to parent (App) component
  // **********************************************************
  passCurrentCategoryDesc(aPropertyValue) {
    this.props.callback(aPropertyValue);
  }

  passCurrentQuestionNumber(aPropertyValue) {
    this.props.callbackForQuestionNumber(aPropertyValue);
  }


 // **********************************************************************
  // Handle what occurs on click of a category, set state of currentCategory
  // to value of category attribute. Also, call getCurrentCategory to set 
  // props of value for category to be used for the callback in App.js
  // **********************************************************************
  handleCategoryClick = (evt) => {
    this.setState({ questionNumber: 0});
    this.setState({ currentCategory: evt.target.getAttribute('category') });
    this.passCurrentCategory(evt.target.getAttribute('category'));
    this.passCurrentCategoryDesc(evt.target.getAttribute('selectedcategory'));
    this.passCurrentQuestionNumber(0); // pass up to App.js
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

  render() {
    return (
      <div className="category" >
        <br></br>
        {
          this.state.categories.map((category, index) =>
            <div onClick={this.handleCategoryClick} className="sidebarBtn" category={index + 1} key={index} selectedcategory={category.description}>
              <img className="sidebarImg" src={category.image_name} alt={category.description} width="60"/> {category.description}
            </div>
          )
        }
      </div>
    )
  }
}

Sidebar.propTypes = {
  callback: PropTypes.func,
  callbackForQuestionNumber: PropTypes.func
}

