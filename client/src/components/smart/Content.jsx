import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Score from '../dumb/Score.jsx';
import PropTypes from 'prop-types';
import Submit from '../dumb/Submit.jsx';

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            questions: [],
            questionNumber: 0,
            answer: '',
            userSubmittedChoice:"",
            currentCategory: '1',
            currentCategoryDesc: 'Quantum',
            currentScore: 0,
            showScore: false
        };
    }

    componentDidMount() {
        console.log(this.props)
        this.setState({
            questions: this.props.questions
        })
    }

    // ****************************************************************
    // Set state of answer to value of selected choie. On change of answer 
    // choice, if the user selects the correct answer, change class to 
    // CorrectAnswer to make text green. Otherwise, change it to red.
    // ****************************************************************
    handleAnswerChange = (evt) => {
        if (evt.target.value === this.props.questions[this.state.questionNumber].answer) {
            evt.target.nextElementSibling.className = "correctAnswer";
            this.setState({ currentScore: this.state.currentScore + 1 });
        } else {
            evt.target.nextElementSibling.className = "incorrectAnswer";
            this.setState({ currentScore: this.state.currentScore - .25 });
        }
        this.setState({
            answer: evt.target.value,
            userSubmittedChoice:evt.target.value
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
        //alert("Question number props in content jsx" + this.props.questionNumber); 
        //alert("Question number in cotent jsx" + this.state.questionNumber);
        return (
            <div>
                {this.state.questionNumber <= 4 ?
                    <div className="content">
                        <h2>{this.props.currentCategoryDesc}</h2>
                        <br></br>

                        <div className="buttons">
                            <Button onClick={this.handlePreviousClick} className="mr-3 btnPrev" color="primary">Previous</Button>

                        {this.state.questionNumber < 4 ?
                            <Button onClick={this.handleNextClick} className="btnNext" color="primary">Next</Button>
                            : <Submit onClick={this.handleNextClick}/>
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
                    :
                    <Score test={this.state} />
                }
            </div>
        )
    }
}

Content.propTypes = {
    callback: PropTypes.func,
}
