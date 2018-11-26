import React, { Component } from 'react';
import { Card } from 'reactstrap';
import Content from '../../smart/Content.jsx';

export default class card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: '',
      currentCategory: ''
    };
  }


  render() {
    console.log("Value of currentCategory in Card.jsx" + this.props.currentCategory);
    var currentCategory = this.props.currentCategory;

    return (
        <div>
          {
            this.props.loggedIn ?
              <Card className="card">
                 <Content  currentCategory={this.props.currentCategory} />
              </Card>
              : ""
          }
        </div>
    );
  }
};

