import React from 'react';
import Logo from '../../resources/image/physicsLogo.png';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';



const loginDiv = (props) => {

    return (
        <Container>
        <div className="login-div mx-auto">
            
            {/* Hide when user logged in */}
            {props.user.showLoginDiv ?
                <div className="logoDiv">
                    <img src={Logo} width="150" alt="physicsLogo" />
                </div>
                : ""
            }

            {/* Hide when user logged in */}
            {props.user.showLoginDiv ?

                <form className="loginForm" onSubmit={props.handleLogin && props.handleCancelMembership}>

                    <input className="form-control form w-75 text-center mt-3" maxLength="80" type="text" data-test="username" value={props.user.username} onChange={props.handleUserChange} placeholder="Enter username" />
                    <br></br>

                    <input className="form-control form w-75 text-center" maxLength="80" type="password" data-test="password" placeholder="Enter password" value={props.user.password} onChange={props.handlePassChange} />

                    <button onClick={props.handleLogin} className="btn btn-dark m-3" data-test="submit">Log in</button>

                    <button className="btn btn-dark m-3" onClick={props.handleSignup} data-test="submit">Sign Up</button>
                    <button onClick={props.handleCancelMembership} className="btn btn-dark m-3" data-test="submit">Cancel Membership</button>
                   
                    {
                        props.user.error ?
                            <h6 className="invalidLoginMsg" data-test="error" onClick={props.dismissError}>
                                <button className="closeBtn" onClick={props.dismissMsg}><label className="closeBtnLbl">✖</label></button>
                                {props.user.error}
                            </h6>
                            : ""
                    }

                    {
                        props.user.msg ?
                            <h6 className="successMsg" data-test="success" onClick={props.dismissMsg}>
                                <button className="closeBtn" onClick={props.dismissMsg}><label className="closeBtnLbl">✖</label></button>
                                {props.user.msg}
                            </h6>
                            : ""
                    }
                </form> : ""

            }
            
        </div>
        </Container>
    )
}

Container.propTypes = {
    fluid:  PropTypes.bool
    // applies .container-fluid class
  }

export default loginDiv;