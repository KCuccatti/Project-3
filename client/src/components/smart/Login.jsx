import React, { Component } from 'react';
import './login.css';
import axios from 'axios';
import LoginDiv from '../dumb/LoginDiv';
import PropTypes from 'prop-types';

export default class Login extends Component {
    constructor() {
        super()

        this.state = {
            srcSystemCode: "QUIZ",
            username: '',
            password: '',
            error: '',
            loggedIn: '',
            msg: '',
            category: [],
            showLoginDiv: true
        };
    }

    getContent(aPropertyValue) {
        console.log("CURRENT VALUE OF loggedIn: " + aPropertyValue);
        this.props.callback(aPropertyValue);
    }

    // Handles what occurs on click of the login button. If no user or pass is detected
    // change state of error. Also call getUser function to grab user info from db
    // and see if login information passed is valid.
    handleLogin = (evt) => {
        evt.preventDefault();

        if (!this.state.username) {
            this.setState({ msg: '' });
            return this.setState({ error: ' Username is required' });
        }

        if (!this.state.password) {
            this.setState({ msg: '' });
            return this.setState({ error: ' Password is required' });
        }


        this.getUser();

        return this.setState({ error: '' });

    }


    // Checks state of loggedIn determined from backend and informs user if
    // credintials are incorrect, if correct, welcome them.
    conditionalLogin = () => {
        if (this.state.loggedIn === true) {
            this.setState(
                {
                    showLoginDiv: false
                })

            this.getCategory();
        } else if (this.state.loggedIn === false) {
            this.setState({ error: ' Invalid username/password' });
        }
    }

    // Gets user information from the db, sets state of loggedIn determined from backend. 
    // Also calls conditionalLogin function to determine what to display based on state recieved from backend.
    getUser = () => {
        axios.get(`/api/GetUser/${this.state.username}/${this.state.password}/${this.state.srcSystemCode}`)
            .then((result) => {
                console.log("Currently logged In: " + result.data.loggedIn);
                this.setState({ loggedIn: result.data.loggedIn })
                this.conditionalLogin();
                this.getContent(this.state.loggedIn);
            })
    }

    // Gets categories from backend, maps through the array object, and populates the 
    // 'categories' array with the data. Returns catagories and sets the 'category' state
    // to the array with the data.
    getCategory = () => {
        let categories = [];
        axios.get('/api/GetCategory').then(category => {
            categories = category.data.map(value => value.description);
            console.log(categories);
            this.setState({
                category: categories
            });
        });
    }


    // If no user or password is passed in for user to signup, set state of error.
    handleSignup = (evt) => {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }
        return this.setState({ error: '' });
    }


    // Sets state of username to value of username input box
    handleUserChange = (evt) => {
        this.setState({
            username: evt.target.value,
        });
    };


    // Sets state of password to value of password input box
    handlePassChange = (evt) => {
        this.setState({
            password: evt.target.value,
        });
    }


    // Sets state of error to empty 
    dismissError = () => {
        this.setState({ error: '' });
    }

    render() {
        return (
            <div>
                <LoginDiv handleLogin={this.handleLogin} user={this.state} handleUserChange={this.handleUserChange} handlePassChange={this.handlePassChange} dismissError={this.dismissError} />
            </div>
        );
    }
}

Login.propTypes = {
    callback: PropTypes.func,
}


