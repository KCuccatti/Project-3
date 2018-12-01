import React from 'react';
import "./Score.css";


const Score = (props) => {
   
    return (
        // Component to store score display
        <div className="score">
            <h3>Test Results</h3>
            {props.test.currentScore >= 4 ?
                <label>Congratulations... You scored a {props.test.currentScore}.</label>
                :
            

        props.test.currentScore = 3 ?
                <label>Not too bad, but you can do better... You scored a {props.test.currentScore}.</label>
                :
            
            
            props.test.currentScore < 3 ?
                <label>Looks like somebody didn't study hard enough... You scored a {props.test.currentScore}.</label>
            : ''
            }   
        </div>
    )
}

export default Score;
