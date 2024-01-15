import axios from "axios";
import {jwtDecode} from "jwt-decode"

const URL_LOGIN = "http://localhost:8080/api"

export  function authHeader() {
    const user = JSON.parse(localStorage.getItem('JWT'));

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
    return await axios.post(URL_LOGIN + `/login`, values);
}

export const infoToken = () => {
    const jwtToken = localStorage.getItem("JWT")
    if(jwtToken != null) {
        return jwtDecode(jwtToken);
    }else{
        return null;
    }
}

export const getJwtToken = async () => {
    const jwtToken = localStorage.getItem("JWT")
    if (jwtToken) {
        // return
    }
}

export const addJwtTokenToStorage =  (jwtToken) => {
    localStorage.setItem("JWT",jwtToken)
}

export const logoutService = async () => {
    localStorage.removeItem("JWT")
}

export const getAccountService = async () => {

}