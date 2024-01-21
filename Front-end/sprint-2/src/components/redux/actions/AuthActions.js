import * as authService from "../../../services/AccountService";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
export const loginUser = (account) => async (dispatch) => {
    try {
        let res = await authService.loginService(account);
        localStorage.setItem('user', JSON.stringify(res));
        dispatch({
            type: "GET_USER_LOGIN",
            payload: res,
        });
    } catch (error) {
        throw error
    }
};
