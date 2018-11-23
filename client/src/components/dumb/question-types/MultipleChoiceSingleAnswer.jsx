import React from 'react';
const MultipleChoiceSingleAnswer = () => {
    return (
        <div className="choices">
        A&nbsp;<input type="radio" name="MCSA" value="A"/>Red<br></br>
        B&nbsp;<input type="radio" name="MCSA" value="B"/>Blue<br></br>
        C&nbsp;<input type="radio" name="MCSA" value="C"/>Some other Color<br></br>
        D&nbsp;<input type="radio" name="MCSA" value="D"/>All of them<br></br>                
        </div>
    )    
}

export default MultipleChoiceSingleAnswer;