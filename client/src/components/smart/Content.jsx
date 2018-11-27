import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';

export default class Content extends Component {

    constructor(props) {
        super(props)

        this.state = {
            questions: [],
            questionNumber: 0,
            answer: '',
            disableNextButton: false,
            disablePreviousButton: true,
            currentCategory: '1',
            currentCategoryDesc: 'Quantum'
        };
    }

    // ****************************************************************
    // Set state of answer to value of selected choie. On change of answer 
    // choice, if the user selects the correct answer, change class to 
    // CorrectAnswer to make text green. Otherwise, change it to red.
    // ****************************************************************
    handleAnswerChange = (evt) => {
        if (evt.target.value === this.props.questions[this.state.questionNumber].answer) {
            evt.target.nextElementSibling.className = "correctAnswer";
        } else {
            evt.target.nextElementSibling.className = "incorrectAnswer";
        }
        this.setState({
            answer: evt.target.value,
        });
    }

    // ************************************************************
    // Show the next question and increment state of questionNumber
    // on click of 'Next' button as long as there is another question
    // ************************************************************
    handleNextClick = () => {
        if (this.state.questionNumber < 4) {
            this.setState({ questionNumber: this.state.questionNumber + 1 },
                () => {
                    this.props.changeDisa
                })
        }
        this.toggleNavButtons();
    }

    // ****************************************************************
    // Decrement state of questionNumber when 'Previos' button is clicked
    // as long as state of question number > 0
    // ****************************************************************
    handlePreviousClick = () => {
        if (this.state.questionNumber > 0) {
            this.setState({ questionNumber: this.state.questionNumber - 1 })
        }
        this.toggleNavButtons();
    }

    // *******************************************************
    // Toggle between disabling the previous/next buttons
    // *******************************************************
    toggleNavButtons = () => {
        alert(this.state.questionNumber + "  -  " + this.state.disablePreviousButton + "  -   " + this.state.disableNextButton);
        if (this.state.questionNumber > 0) {
            this.setState({ disablePreviousButton: false })
        } else {
            this.setState({ disablePreviousButton: true })
        }
        
        if (this.state.questionNumber >= 4) {
            this.setState({ disableNextButton: true })
        } else {
            this.setState({ disableNextButton: false })
        }
    }

    render() {
        return (
            <div>
                <div className="content">
                    <h2>{this.props.currentCategoryDesc}</h2>
                    <br></br>

                    <div className="buttons">
                        {this.state.disablePreviousButton ?
                            <Button disabled onClick={this.handlePreviousClick} className="mr-3 btnPrev" color="primary">Previous</Button>
                            :
                            <Button onClick={this.handlePreviousClick} className="mr-3 btnPrev" color="primary">Previous</Button>
                        }

                        {this.state.disableNextButton ?
                            <Button disabled onClick={this.handleNextClick} className="btnNext" color="primary">Next</Button>
                            :
                            <Button onClick={this.handleNextClick} className="btnNext" color="primary">Next</Button>
                        }
                    </div>
                    <hr></hr>

                    {
                        this.props.questions.map((question, index) =>
                            index === this.state.questionNumber ?
                                <div key={index}>
                                    <div className="question">
                                        <h3>{question.question_text}</h3>
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
                </div>
            </div>
        )
    }
}

