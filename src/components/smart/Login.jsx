import React, { Component } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import Logo from '../../resources/image/TekSystemsLogo.png';
import axios from 'axios';
import LoggedIn from '../dumb/LoggedIn';
import NotLoggedIn from '../dumb/NotLoggedIn';
import Category from '../dumb/Category';

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
            category: ''
        };

        this.dismissError = this.dismissError.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
        this.handleSignup = this.handleSignup.bind(this);
        this.handleUserChange = this.handleUserChange.bind(this);
        this.handlePassChange = this.handlePassChange.bind(this);

    }

    dismissError() {
        this.setState({ error: '' });
    }


    handleLogin(evt) {
        evt.preventDefault();

        if (!this.state.username) {
            this.setState({ msg: '' });
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            this.setState({ msg: '' });
            return this.setState({ error: 'Password is required' });
        }

        //        this.getUser();
        this.componentDidMount();


        return this.setState({ error: '' });

    }

    conditionalLogin = () => {
        if (this.state.loggedIn === true) {
            this.setState({ msg: <LoggedIn username={this.state.username} /> });
            this.setState({ category: <Category /> });
        } else if (this.state.loggedIn === false) {
            this.setState({ msg: <NotLoggedIn /> });
        }
    }


    componentDidMount() {
        this.getUser();
    }

    getUser = () => {
        axios.get(`/api/GetUser/${this.state.username}/${this.state.password}/${this.state.srcSystemCode}`)
            .then((result) => {
                console.log(result);
                this.setState({ loggedIn: result.data.loggedIn })
                this.conditionalLogin();
            })
    }

    handleSignup(evt) {
        evt.preventDefault();
        if (!this.state.username) {
            return this.setState({ error: 'Username is required' });
        }

        if (!this.state.password) {
            return this.setState({ error: 'Password is required' });
        }

        console.log(this.state.username);
        console.log(this.state.password);

        return this.setState({ error: '' });
    }


    handleUserChange(evt) {
        this.setState({
            username: evt.target.value,
        });

    };

    handlePassChange(evt) {
        this.setState({
            password: evt.target.value,
        });
    }

    render() {

        return (
            <div className="login-div mx-auto">
                <img src={Logo} width="150" alt="TEKSystems Logo" />
                <form onSubmit={this.handleLogin}>

                    <input className="form-control form w-50 text-center mt-3" maxLength="80" type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} placeholder="Enter username" />
                    <br></br>
                    <input className="form-control form w-50 text-center" maxLength="80" type="password" data-test="password" placeholder="Enter password" value={this.state.password} onChange={this.handlePassChange} />

                    <button onClick={this.handleLogin} className="btn btn-primary m-3" data-test="submit">Log in</button>
                    <button className="btn btn-primary m-3" data-test="submit">Sign Up</button>

                    {
                        this.state.error &&
                        <h3 data-test="error" onClick={this.dismissError}>
                            <button onClick={this.dismissError}>✖</button>
                            {this.state.error}
                        </h3>
                    }
                </form>
                {this.state.msg}
                {this.state.category}
            </div>
        );
    }
}


