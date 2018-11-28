import React from 'react';
import { Button } from 'reactstrap';

const Submit = (props) => {
   
    return (
        <div className="btnSubmit" color="success"><Button onClick={props.onClick}>Submit</Button></div>
    )
}

export default Submit;
