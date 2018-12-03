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
                    <label>Not too bad, but you can do better...<br></br> You scored a {props.test.currentScore}.</label>
                    :


                    props.test.currentScore < 3 ?
                        <label>Looks like somebody didn't study hard enough...<br></br> You scored a {props.test.currentScore}.</label>
                        : ''
            }

            <hr></hr>For additional research, please visit the following...<br></br>
            {
                props.currentCategoryDesc === 'Quantum' ?
                <a target="new" href="https://www.forbes.com/sites/chadorzel/2015/07/08/six-things-everyone-should-know-about-quantum-physics/#614478617d46"> {props.currentCategoryDesc} Study Guide</a>
                
                : props.currentCategoryDesc === 'Relativity' ?
                 <a target="new" href="https://www.space.com/17661-theory-general-relativity.html"> {props.currentCategoryDesc} Study Guide</a>
                 
                 : props.currentCategoryDesc === 'Thermodynamics' ? 
                 <a target="new" href="https://www.britannica.com/science/thermodynamics"> {props.currentCategoryDesc} Study Guide</a>

                 : ''
            }

        </div>
    )
}

export default Score;
