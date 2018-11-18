import React, { Component } from 'react';
import QuestionText from '../dumb/QuestionText';
import FillInTheBlank from '../dumb/question-types/FillInTheBlank';
import TrueFalse from '../dumb/question-types/TrueFalse';
import MultipleChoiceSingleAnswer from '../dumb/question-types/MultipleChoiceSingleAnswer';

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { questionType: "MCSA" };
    }

    render() {

        let questionType;
        if (this.state.questionType === "TF") {
            questionType = <TrueFalse/>;
        } else if (this.state.questionType === "MCSA") {
            questionType = <MultipleChoiceSingleAnswer/>;
        } else if (this.state.questionType === "FITB") {
            questionType = <FillInTheBlank/>;
        }

        return (
            <div>
            <QuestionText />
            {questionType}
            </div>
        )
    }
}

export default Question;