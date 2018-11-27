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

  // **********************************************************************
  // Handle what occurs on click of a category, set state of currentCategory
  // to value of category attribute. Also, call getCurrentCategory to set 
  // props of value for category to be used for the callback in App.js
  // **********************************************************************
  handleCategoryClick = (evt) => {
    this.setState({questionNumber: 0});
    this.setState({ currentCategory: evt.target.getAttribute('category') });
    this.getCurrentCategory(evt.target.getAttribute('category'));
    this.getCurrentCategoryDesc(evt.target.getAttribute('selectedcategory'));
    this.getQuestionNumber(this.state.questionNumber);
  }

  // **********************************************************
  // Pass currentCategory up to parent (App) component
  // **********************************************************
  getCurrentCategory(aPropertyValue) {
    // Pass the currently selected category to the parent (App) Component
    this.props.callback(aPropertyValue);
    this.props.getQuestions(aPropertyValue);
  }

  // **********************************************************
  // Pass currentCategoryDesc up to parent (App) component
  // **********************************************************
  getCurrentCategoryDesc(aPropertyValue) {
    // Pass the currently selected category desc to the parent (App) Component
    this.props.callback(aPropertyValue);
  }

  // **********************************************************
  // Pass questionNumber up to parent (App) component
  // **********************************************************
  getQuestionNumber(aPropertyValue) {
    this.props.callback(aPropertyValue);
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
}

