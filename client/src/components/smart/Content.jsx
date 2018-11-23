import React, { Component } from 'react';
import './Content.css';
import { Button } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';


export default class Content extends Component {
   
     // Gets user information from the db, sets state of loggedIn determined from backend. 
    // Also calls conditionalLogin function to determine what to display based on state recieved from backend.

    

    getQuestions = () => {
        let questions = [];
        axios.get(`/api/GetQuestions/1`)
            .then((response) => {
                console.log("*********** THE Question RESULT: " + response.data[5]);

               // questions = questions.data.map(value => value.question_text);
            // console.log(questions);
                // console.log("Currently logged In: " + result.data.loggedIn);
            })
    }

   
    render() {
        this.getQuestions();
        return (
            <div className="content">
                <h2>Category <i>Electromagnatism</i></h2><br></br>
                <div className="question">
                    <h5>Who clarified the photoelectric effect</h5>
                </div>
                <div className="answer">
                    <input type="radio" name="answer" value="A"></input>John Northington<br></br>
                    <input type="radio" name="answer" value="B"></input>Albert Einstein<br></br>
                    <input type="radio" name="answer" value="C"></input>Kyle Cuccatti<br></br>
                    <input type="radio" name="answer" value="D"></input>Robert Dizon<br></br>
                </div> <br></br>
                <div className="buttons ">
                    <Button className="mr-3" color="primary">Previous</Button>{''}
                    <Button color="primary">Next</Button>{''}
                </div>

            </div>

        )
    }
}