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

  componentDidMount() {
    fetch('/api/GetCategory')
      .then(response => response.json())
      .then(data => this.setState({ categories: data }));
  }

  render() {
    console.log("The Categories");
    return (
      <div className="category">
          {
            this.state.categories.map((category, index) =>
              <h5 key={index}>
                <img src={category.image_name} alt={category.description} width="60" />{category.description}<br></br>
              </h5>
            )
          }
      </div>

    )

  }
}

Sidebar.propTypes = {
  callback: PropTypes.func,
}

