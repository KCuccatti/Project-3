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
            showLoginDiv: true
        };
    }
    
    //**************************************************************************
    // Pass the loggedIn state up to the parent (App) component
    //**************************************************************************
    getContent(aPropertyValue) {
        this.props.callback(aPropertyValue);
    }


    // Handles what occurs on click of the login button. If no user or pass is detected
    // change state of error. Also call getUser function to grab user info from db
    // and see if login information passed is valid.
    handleLogin = (evt) => {
        this.clearMsgState();
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

    //*****************************************************************
    // Cancel Membership for the user (Deletes from Database)
    //*****************************************************************
    handleCancelMembership = (evt) => {
        evt.preventDefault();
        if (!this.state.username) {
            this.setState({ msg: '' });
            return this.setState({ error: ' Username is required' });
        }
        if (!this.state.password) {
            this.setState({ msg: '' });
            return this.setState({ error: ' Password is required' });
        }
        this.deleteUser();
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
        } else if (this.state.loggedIn === false) {
            this.setState({ error: ' Invalid username/password' });
        }
    }

    // Gets user information from the db, sets state of loggedIn determined from backend. 
    // Also calls conditionalLogin function to determine what to display based on state recieved from backend.
    getUser = () => {
        axios.get(`/api/GetUser/${this.state.username}/${this.state.password}/${this.state.srcSystemCode}`)
            .then((result) => {
                this.setState({ loggedIn: result.data.loggedIn })
                this.conditionalLogin();
                
                // pass loggedIn state to parent (App Component)
                this.getContent(this.state.loggedIn); 
            })
    }

    addUser = () => {
        axios.post(`/api/Signup/${this.state.username}/${this.state.password}/${this.state.srcSystemCode}`)
            .then((result) => {
                if (result.data.success) {
                    this.setState({msg: "Glad to have you!"})

                } else { 
                    this.setState({ error: 'User already exists.' });
                }
            })
            this.clearMsgState();
    }


    deleteUser = () => {
        axios.delete(`/api/CancelMembership/${this.state.username}/${this.state.password}/${this.state.srcSystemCode}`)
            .then((result) => {
                if (result.data.success) {
                   this.setState({msg: 'User deleted'});
                }
                else {
                    this.setState({error: 'Error deleting user'});
                }
            })
            this.clearMsgState();
    }

    clearMsgState() {
        this.setState({msg: ''});
        this.setState({error: ''});
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
        this.addUser();

        this.clearMsgState();
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
    dismissMsg = () => {
        this.clearMsgState();
    }

    render() {
        return (
            <div>
                <LoginDiv handleLogin={this.handleLogin} handleCancelMembership={this.handleCancelMembership} user={this.state} handleUserChange={this.handleUserChange} handlePassChange={this.handlePassChange} dismissMsg={this.dismissMsg} handleSignup={this.handleSignup} />
            </div>
        );
    }
}

Login.propTypes = {
    callback: PropTypes.func,
}


