import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import fetch from 'node-fetch';

export default class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            questionNumber: 0,
            answer: '',
            showNextButton: true,
            showPreviousButton: false
        };
    }

    togglePreviousBtn = () => {
        if (this.state.questionNumber > 0) {
            this.setState({ showPreviousButton: true })
        }
    }

    toggleNextBtn = () => {
        if (this.state.questionNumber > 4) {
            this.setState({ showPreviousButton: false })
        }
    }


    handleAnswerChange = (evt) => {
        if (evt.target.value === this.state.questions[this.state.questionNumber].answer) {
            evt.target.nextElementSibling.className = "correctAnswer";
        } else {
            evt.target.nextElementSibling.className = "incorrectAnswer";
        }
        this.setState({
            answer: evt.target.value,
        });
    }

    handleNextClick = () => {

        if (this.state.questionNumber < 4) {
            this.setState({ questionNumber: this.state.questionNumber + 1 })
        }
    }

    handlePreviousClick = () => {
        if (this.state.questionNumber > 0) {
            this.setState({ questionNumber: this.state.questionNumber - 1 })
        }
    }

    componentDidMount() {
        fetch('/api/GetQuestions/1')
            .then(response => response.json())
            .then(data => this.setState({ questions: data }))
    }

    render() {

        return (
            <div className="content">

                <h2 className="categoryHeading">Category <i>Electromagnatism</i></h2><br></br>

                {
                    this.state.questions.map((question, index) =>
                        index === this.state.questionNumber ?

                            <div>
                                <div className="question">
                                    <h3 key={index}>
                                        {question.question_text}
                                    </h3>

                                </div>

                                <div className="choices">
                                    <input id="choice1" className="choice" onChange={this.handleAnswerChange} type="radio" name="answer" value="A" /><label>{question.choices[0].choice}</label><br></br>
                                    <input id="choice2" className="choice" onChange={this.handleAnswerChange} type="radio" name="answer" value="B" /><label>{question.choices[1].choice}</label><br></br>
                                    <input id="choice3" className="choice" onChange={this.handleAnswerChange} type="radio" name="answer" value="C" /><label>{question.choices[2].choice}</label><br></br>
                                    <input id="choice4" className="choice" onChange={this.handleAnswerChange} type="radio" name="answer" value="D" /><label>{question.choices[3].choice}</label><br></br>


                                </div> <br></br>
                            </div>
                            : ""
                    )
                }

                <div className="buttons ">
                    {
                        this.state.questionNumber > 0 ?

                            <Button showOrNotShowNextButton={this.showOrNotShowPreviousButton} onClick={this.handlePreviousClick} className="mr-3" color="primary">Previous</Button>
                            : ""
                    }

                    {
                        this.state.questionNumber < 4 ?

                            <Button onClick={this.handleNextClick} color="primary">Next</Button>
                            : ""
                    }

                </div>
            </div>

        )
    }
}