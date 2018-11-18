import React, { Component } from 'react';
class TrueFalse extends Component {
    render() {
        return (
            <div className="choices">
                <input type="radio" name="answerTF" value="True" />True<br></br>
                <input type="radio" name="answerTF" value="False" />False<br></br>
            </div>
        )
    }
}

export default TrueFalse;