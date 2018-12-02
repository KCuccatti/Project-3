import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Score from '../dumb/Score.jsx';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            questionNumber: 0,
            answer: '',
            userSubmittedChoice: "",
            evaluated: true,
            currentCategoryNumber: 1,
            currentCategoryDesc: 'Quantum',
            currentScore: 0,
        };
    }

    // *******************************************************
    // When component mounts, set state of questions to questions
    // coming from above parent components.
    // *******************************************************
    componentDidMount() {
        this.setState({
            questions: this.props.questions
        })
    }

    // *******************************************************
    // Checks user answer compared to answer from db. If correct
    // incremenet user score by one, else decrement by one.
    // *******************************************************
    evaluateAnswer = (evt) => {
        evt.preventDefault();
        if (this.state.userSubmittedChoice === this.state.questions[this.state.questionNumber].answer) {
            this.setState({ currentScore: this.state.currentScore + 1, evaluated: true, questionNumber: this.state.questionNumber + 1 });
        } else {
            this.setState({ currentScore: this.state.currentScore + 0, evaluated: true, questionNumber: this.state.questionNumber + 1 });
        }
    }

    // ****************************************************************
    // Set state of answer to value of selected choie. 
    // ****************************************************************
    handleAnswerChange = (evt) => {
        this.setState({
            answer: evt.target.value,
            userSubmittedChoice: evt.target.value
        });
    }

    // ************************************************************
    // Show the next question and increment state of questionNumber
    // on click of 'Next' button as long as there is another question
    // ************************************************************
    handleNextClick = (event) => {
        event.preventDefault();
        let limit = (this.state.questions.length);
        if (this.state.questionNumber <= limit) {
            this.setState({ questionNumber: this.state.questionNumber + 1 })
        }
    }

    // ****************************************************************
    // Decrement state of questionNumber when 'Previos' button is clicked
    // as long as state of question number > 0
    // ****************************************************************
    handlePreviousClick = () => {
        if (this.state.questionNumber > 0) {
            this.setState({ questionNumber: this.state.questionNumber - 1 })
        }
    }

    render() {
        alert("Question Number state/props in Content is :" + this.state.questionNumber + " - " + this.props.questionNumber);

        return (
            <div>
                {this.state.questionNumber <= 4 ?
                    <div className="content">
                        <h2>{this.props.currentCategoryDesc}</h2>

                        <hr></hr>
                        {
                            this.props.questions.map((question, index) =>
                                index === this.state.questionNumber ?
                                    <div key={index}>
                                        <div className="question">
                                            <h3>{this.state.questionNumber}{question.question_text}</h3>
                                        </div>

                                        <div className="choices">
                                            <input id="choice1" className={this.state.userSubmittedChoice === "A" && this.state.evaluated ? "choice correctAnswer" : "choice"} onChange={this.handleAnswerChange} type="radio" name="answer" value="A" /><label>{question.choices[0].choice}</label><br></br>
                                            <input id="choice2" className={this.state.userSubmittedChoice === "B" && this.state.evaluated ? "choice correctAnswer" : "choice"} onChange={this.handleAnswerChange} type="radio" name="answer" value="B" /><label>{question.choices[1].choice}</label><br></br>
                                            <input id="choice3" className={this.state.userSubmittedChoice === "C" && this.state.evaluated ? "choice correctAnswer" : "choice"} onChange={this.handleAnswerChange} type="radio" name="answer" value="C" /><label>{question.choices[2].choice}</label><br></br>
                                            <input id="choice4" className={this.state.userSubmittedChoice === "D" && this.state.evaluated ? "choice correctAnswer" : "choice"} onChange={this.handleAnswerChange} type="radio" name="answer" value="D" /><label>{question.choices[3].choice}</label><br></br>
                                        </div>
                                    </div>
                                    : ""
                            )

                        }
                        <div className="btnDiv">
                            <Button disabled={this.state.questionNumber > 0 ? false : true} onClick={this.handlePreviousClick} className="mr-3 btnPrev" color="primary">Previous</Button>

                            <Button color="success" disabled={this.state.userSubmittedChoice ? false : true} onClick={this.evaluateAnswer}>Submit Answer</Button>
                        </div>
                    </div>
                    :
                    <Score test={this.state} />
                }
            </div>
        )
    }
}