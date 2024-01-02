import React from 'react';
import "../login/login.css"
import {login1} from "../../assets/images/index"

function Login() {
    return (
        <>
            <title>Webleb</title>
            <meta charSet="utf-8" />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link href="../login/login.css" rel="stylesheet" />
            <div className="vid-container">
                <img
                    id="Video1"
                    src={login1}
                    className="bgvid back"
                 alt="img">
                </img>
                <div className="inner-container">
                    <div className="box">
                        <h1 style={{ color: "white"}}>Xin chào<div>こんにちは</div> </h1>
                        <input type="text" placeholder="Username" />
                        <input type="text" placeholder="Password" />
                        <a href="/">
                            <button>Login</button>
                        </a>
                        <p style={{position: "relative", bottom: "15px"}}>
                            Not a member? <span className="signup">Sign Up</span>
                        </p>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;