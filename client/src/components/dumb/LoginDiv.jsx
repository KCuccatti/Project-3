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

                    <form className="loginForm">

                        <input className="form-control form w-75 text-center mt-3" maxLength="80" type="text" data-test="username" value={props.user.username} onChange={props.handleUserChange} placeholder="Enter username" />
                        <br></br>

                        <input className="form-control form w-75 text-center" maxLength="80" type="password" data-test="password" placeholder="Enter password" value={props.user.password} onChange={props.handlePassChange} />


                        <label onClick={props.showNewPasswordFunc} className="BtnChangePsw">Change Password?</label>

                        {props.user.showNewPassword ?
                            <div>
                                <input className="form-control form w-75 text-center" maxLength="80" type="password" data-test="password" placeholder="New Password" value={props.user.newPassword} onChange={props.handleNewPassChange} />

                                <button onClick={props.submitNewPasswordFunc} className="btn btn-dark mt-2 w-50">Submit</button>
                            </div>

                            : ""
                        }

                        <br></br>
                        <br></br>

                    {!props.user.showNewPassword ?
                    <div>
                        <button onClick={props.handleLogin} className="btn btn-dark btnLogin" data-test="submit">Log in</button>

                        <button className="btn btn-dark btnSignup" onClick={props.handleSignup} data-test="submit">Sign Up</button>

                        <button onClick={props.handleCancelMembership} className="btn btn-dark btnCancelMembership" data-test="submit">Cancel Membership</button>
                        
                        </div>: ''
                    }

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
    fluid: PropTypes.bool
    // applies .container-fluid class
}

export default loginDiv;