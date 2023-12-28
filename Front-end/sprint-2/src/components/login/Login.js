import React from 'react';
import "./login.css"


function Login() {
    return (
        <div className="login-thien">
            <div className="login-thien-main">
                <input type="checkbox" id="chk" aria-hidden="true"/>
                <div className="signup">
                    <form>
                        <label className="login-label" htmlFor="chk" aria-hidden="true">
                            Sign up
                        </label>
                        <input className="login-input" type="text" name="txt" placeholder="User name" required=""/>
                        <input className="login-input" type="email" name="email" placeholder="Email" required=""/>
                        <input className="login-input" type="password" name="pswd" placeholder="Password" required=""/>
                        <button className="login-button">Sign up</button>
                    </form>
                </div>
                <div className="login">
                    <form>
                        <label className="login-label" htmlFor="chk" aria-hidden="true">
                            Login
                        </label>
                        <input className="login-input" type="email" name="email" placeholder="Email" required=""/>
                        <input className="login-input" type="password" name="pswd" placeholder="Password" required=""/>
                        <button className="login-button" >Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;