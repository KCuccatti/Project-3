import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';


export default class Sidebar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: [],
      currentCategory: 1
    };
  }

  handleCategoryClick = (evt) => {
    console.log("Currently selected Category in handleCategoryClick(): " + evt.target.getAttribute('category'));
    this.setState({ currentCategory: evt.target.getAttribute('category')});
    this.getCurrentCategory(evt.target.getAttribute('category'));
  }


  getCurrentCategory(aPropertyValue) {
    console.log("The property value in getCurrentCategory" + aPropertyValue);
    // Pass the currently selected category to the parent (App) Component
    this.props.callback(aPropertyValue);
  }

  componentDidMount() {
    fetch('/api/GetCategory')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }

  
  render() {
    return (
      <div className="category">
        <br></br>
        {
          this.state.categories.map((category, index) =>
            <div onClick={this.handleCategoryClick} className="sidebarBtn" category={index + 1} key={index}>
              <img className="sidebarImg" src={category.image_name} alt={category.description} width="60" />   {category.description}</div>
          )
        }
      </div>

    )

  }
}

Sidebar.propTypes = {
  callback: PropTypes.func,
}

