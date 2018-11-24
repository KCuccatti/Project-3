import React, { Component } from 'react';

import Quantum from '../../../resources/image/Quantum.png';
import CondensedMatter from '../../../resources/image/Condensed-Matter.png';
import Electromagnatism from '../../../resources/image/Electromagnatism.png';
import Particle from '../../../resources/image/Particle.png';
import Optical from '../../../resources/image/Optical.png';
import Thermodynamics from '../../../resources/image/thermodynamics.png';
import Relativity from '../../../resources/image/Relativity.png';
import Cosmology from '../../../resources/image/Cosmology.png';
import axios from 'axios';
import PropTypes from 'prop-types';
import './Sidebar.css';


export default class Sidebar extends Component {
  constructor() {
    super()

    this.state = {
      categories: [],
    };
  }

 

  // Gets categories from backend, maps through the array object, and populates the 
  // 'categories' array with the data. Returns catagories and sets the 'category' state
  // to the array with the data.
  getCategories = () => {
    let categories = [];
    axios.get('/api/GetCategory').then(category => {
      categories = category.data.map(value => value.description);
      this.setState({
        categories: categories
      });
    });
  }

  render() {
this.getCategories();
console.log(this.state.categories);
    return (

      <div className="category">
        <div>
          {
            this.state.categories.data.map((category, index) => (
              <h5 key={index}><img src={'../../../resources/image/' + category + '.png'} width="60" alt="asdfasdf" />{category}</h5>
            ))
          }
        </div>
      </div>
    )
  }
}

Sidebar.propTypes = {
  callback: PropTypes.func,
}

