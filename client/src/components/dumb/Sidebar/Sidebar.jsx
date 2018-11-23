import React from 'react';

import Quantum from '../../../resources/image/Quantum.png';
import CondensedMatter from '../../../resources/image/Condensed-Matter.png';
import Electromagnatism from '../../../resources/image/Electromagnatism.png';
import Particle from '../../../resources/image/Particle.png';
import Optical from '../../../resources/image/Optical.png';
import Thermodynamics from '../../../resources/image/thermodynamics.png';
import Relativity from '../../../resources/image/Relativity.png';
import Cosmology from '../../../resources/image/Cosmology.png';

import './Sidebar.css';

const Sidebar =(props) => {

    return (

      <div className="category">
        {props.loggedIn ?
          <div>
            {
              props.category.map((category, index) => (
                <h5 key={index}><img src={'../../../resources/image/' + category + '.png'} width="60" alt="asdfasdf" />{category}</h5>
              ))
            }
          </div>
          : ""
        }
      </div>
    )
  }

  export default Sidebar;