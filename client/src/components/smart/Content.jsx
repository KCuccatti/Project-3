import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import fetch from 'node-fetch';

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
            .then(data => this.setState({ questions: data }))
    }

    render() {

        return (
            <div className="content">

                <h2>Category <i>Electromagnatism</i></h2><br></br>

                {
                    this.state.questions.map((question, index) =>
                        <div>
                            <div className="question">
                                <h3 key={index}>
                                    {question.question_text}
                                </h3>

                            </div>

                            <div className="choices">
                                <input type="radio" name="answer" value="A"></input>{question.choices[0].choice}<br></br>
                                <input type="radio" name="answer" value="B"></input>{question.choices[1].choice}<br></br>
                                <input type="radio" name="answer" value="C"></input>{question.choices[2].choice}<br></br>
                                <input type="radio" name="answer" value="D"></input>{question.choices[3].choice}<br></br>
                            </div> <br></br>
                        </div>

                    )
                }

                <div className="buttons ">
                    <Button className="mr-3" color="primary">Previous</Button>{''}
                    <Button color="primary">Next</Button>{''}
                </div>

            </div>

        )
    }
}