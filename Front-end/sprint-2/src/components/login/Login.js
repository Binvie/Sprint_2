import React, {useState} from 'react';
import "./login.css"
import {login1} from "../../assets/images"
import {useNavigate} from "react-router-dom";
import * as accountService from '../../services/AccountService'
import * as Yup from "yup";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {toast} from "react-toastify";

function Login() {
    const navigate = useNavigate();
    // const dispatch = useDispatch();
    const [disableSubmit, setDisableSubmit] = useState(false);


    const handleLogin = async (values) => {
        try {
            const res = await accountService.loginService(values);
            setDisableSubmit(true)
            await accountService.addJwtTokenToStorage(JSON.stringify(res));
            navigate("/")
            console.log(res)
        } catch (e) {
            setDisableSubmit(false)
            console.log(e)
        }
    }

    const initValues = {
        username: "",
        password: ""
    }

    const validateFormLogin = Yup.object({
        username: Yup.string()
            .required("Vui lòng nhập tên đăng nhập."),
        password: Yup.string()
            .required("Vui lòng nhập mật khẩu.")
    });


    return (
        <>
            <title>Foovie</title>
            <meta charSet="utf-8"/>
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1, shrink-to-fit=no"
            />
            <link href="login.css" rel="stylesheet"/>
            <div className="vid-container">
                <img
                    id="Video1"
                    src={login1}
                    className="bgvid back"
                    alt="img">
                </img>
                <div className="inner-container">
                    <div className="box">
                        <h1 style={{color: "white"}}>Xin chào
                            <div>こんにちは</div>
                        </h1>
                        <Formik initialValues={initValues}
                                onSubmit={values => handleLogin(values)}
                                validationSchema={validateFormLogin}
                        >
                            <Form>
                                {/*<label htmlFor="username" className="form-label">Username: </label>*/}
                                <Field type="text" name="username" placeholder="Username"
                                       id="username"/>
                                <ErrorMessage name="username" className="text-danger"
                                              component="p"/>
                                <Field type="password" name="password" placeholder="Password"
                                       id="password"/>
                                <ErrorMessage name="password" className="text-danger"
                                              component="p"/>
                                <button type="submit" disabled={disableSubmit}
                                        className="btn btn-primary">Đăng nhập
                                </button>

                                <p style={{position: "relative", bottom: "15px"}}>
                                    Not a member? <span className="signup">Sign Up</span>
                                </p>
                            </Form>
                        </Formik>
                    </div>
                </div>
            </div>
        </>

    );
}

export default Login;