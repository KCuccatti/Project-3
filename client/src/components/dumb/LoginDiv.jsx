import React from 'react';
import Logo from '../../resources/image/physicsLogo.png';

const loginDiv = (props) => {

    return (
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

                <form className="loginForm" onSubmit={props.handleLogin}>

                    <input className="form-control form w-75 text-center mt-3" maxLength="80" type="text" data-test="username" value={props.user.username} onChange={props.handleUserChange} placeholder="Enter username" />
                    <br></br>

                    <input className="form-control form w-75 text-center" maxLength="80" type="password" data-test="password" placeholder="Enter password" value={props.user.password} onChange={props.handlePassChange} />

                    <button onClick={props.handleLogin} className="btn btn-dark m-3" data-test="submit">Log in</button>

                    <button className="btn btn-dark m-3" data-test="submit">Sign Up</button>

                    {
                        props.user.error ?
                            <h6 className="invalidLoginMsg" data-test="error" onClick={props.dismissError}>
                                <button className="closeBtn" onClick={props.dismissError}><label className="closeBtnLbl">✖</label></button>
                                {props.user.error}
                            </h6>
                            : ""
                    }
                </form> : ""

            }
            {props.user.msg}
        </div>
    )
}

export default loginDiv;