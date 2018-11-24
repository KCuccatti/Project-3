import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Content extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
          questions: []
        };
      }
    
      componentDidMount() {
        fetch('/api/GetQuestions/1')
          .then(response => response.json())
          .then(data => this.setState({ questions: data }));
          console.log("THE QUESTIONS: " + this.state.questions);
      }

    render() {
        return (
            <div className="content">
                <h2>Category <i>Electromagnatism</i></h2><br></br>
                <div className="question">
                    <h5>sdaf</h5>
                </div>
                <div className="answer">
                    <input type="radio" name="answer" value="A"></input>John Northington<br></br>
                    <input type="radio" name="answer" value="B"></input>Albert Einstein<br></br>
                    <input type="radio" name="answer" value="C"></input>Kyle Cuccatti<br></br>
                    <input type="radio" name="answer" value="D"></input>Robert Dizon<br></br>
                </div> <br></br>
                <div className="buttons ">
                    <Button className="mr-3" color="primary">Previous</Button>{''}
                    <Button color="primary">Next</Button>{''}
                </div>

            </div>

        )
    }
}