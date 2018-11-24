import React, { Component } from 'react';

import Quantum from '../../../resources/image/Quantum.png';
import CondensedMatter from '../../../resources/image/Condensed-Matter.png';
import Electromagnatism from '../../../resources/image/Electromagnatism.png';
import Particle from '../../../resources/image/Particle.png';
import Optical from '../../../resources/image/Optical.png';
import Thermodynamics from '../../../resources/image/thermodynamics.png';
import Relativity from '../../../resources/image/Relativity.png';
import Cosmology from '../../../resources/image/Cosmology.png';
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
    console.log("THE CURRENT CATEGORIES: " + this.state.categories);
    return (

      <div className="category">
        <div>
            {  
               this.state.categories.map((category, index) =>
                 <h5 key={index}>
                   <img src={category.image_name} alt={category.description} width="60" />{category.description}<br></br>
                 </h5>
               )
            } 
        </div>
      </div>
      
    )
    
  }
}

Sidebar.propTypes = {
  callback: PropTypes.func,
}

