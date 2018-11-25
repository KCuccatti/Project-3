import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Sidebar.css';


export default class Sidebar extends Component {

  constructor(props) {
    super(props)

    this.state = {
      categories: []
    };
  }

handleCategoryClick = (evt) => {
  alert(evt.target.getAttribute('category'));
}


  componentDidMount() {
    fetch('/api/GetCategory')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }

  render() {
    console.log("The Categories");
    return (
      <div className="category">
        <br></br>
          {
            this.state.categories.map((category, index) =>
                <div onClick={this.handleCategoryClick} className="sidebarBtn" category={index+1} key={index}>
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

