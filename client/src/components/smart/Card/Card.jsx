import React, { Component } from 'react';
import { Card } from 'reactstrap';
import Content from '../../smart/Content.jsx';

export default class card extends Component {
  state = {
      loggedIn: '',
      currentCategoryNumber: '1',
      currentCategoryDesc: 'Quantum',
      questionNumber: 0
    };

  
  render() {
    return (
        <div>
          {
            this.props.loggedIn ?
              <Card className="card">
                 <Content categories={this.props.categories} questions={this.props.questions} currentCategoryNumber={this.props.currentCategoryNumber} currentCategoryDesc={this.props.currentCategoryDesc} questionNumber={this.props.questionNumber}/>
              </Card>
              : ""
          }
        </div>
    );
  }
};

