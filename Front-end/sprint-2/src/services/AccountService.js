import axios from "axios";
import {jwtDecode} from "jwt-decode"

const URL_LOGIN = "http://localhost:8080/api"

export function authHeader() {
    const user = localStorage.getItem('user');
    if (user && user.accessToken) {
        return {
            "Authorization": 'Bearer ' + user.accessToken,
            "Content-Type": 'application/json'
        };
    } else {
        return {};
    }
}

export const loginService = async (values) => {
    const user = localStorage.getItem('user');
    console.log(user)
    const res = await axios.post(URL_LOGIN + `/login`, values);
    return res.data;
}

export const infoToken = () => {
    const jwtToken = localStorage.getItem("user")
    console.log(jwtToken)
    if (jwtToken != null) {
        return jwtDecode(jwtToken);
    } else {
        return null;
    }
}

export const getUsernameFromJWT = async () => {
    const jwtToken = localStorage.getItem("user")
    if (jwtToken) {
        return jwtToken.data;
    } else return null;
}

export const addJwtTokenToStorage = (jwtToken) => {
    localStorage.setItem("user", jwtToken)
}

export const logoutService = async () => {
    localStorage.removeItem("user")
}

export const getAccountByUsernameService = async (username) => {
    return await axios.get(URL_LOGIN + `/account/${username}`)
}