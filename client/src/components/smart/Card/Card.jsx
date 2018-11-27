import React, { Component } from 'react';
import { Card } from 'reactstrap';
import Content from '../../smart/Content.jsx';

export default class card extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loggedIn: '',
      currentCategory: '1',
      currentCategoryDesc: 'Quantum'
    };
  }

  render() {
    console.log("currentCategoryDesc in Card: " + this.props.currentCategoryDesc)
    return (
        <div>
          {
            this.props.loggedIn ?
              <Card className="card">
                 <Content categories={this.props.categories} questions={this.props.questions} currentCategory={this.props.currentCategory} currentCategoryDesc={this.props.currentCategoryDesc} />
              </Card>
              : ""
          }
        </div>
    );
  }
};

