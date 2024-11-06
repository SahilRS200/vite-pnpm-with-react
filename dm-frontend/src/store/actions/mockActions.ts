import { AuthData, CounterData } from "../../common/types";

export const GET_LOGIN_STATUS = 'GET_LOGIN_STATUS';
export const SET_LOGIN_STATUS = 'SET_LOGIN_STATUS';
export const DO_LOGOUT = 'DO_LOGOUT';
export const UPDATE_COUNT = 'UPDATE_COUNT';

export const doLogout = () => {
    return {
        type: DO_LOGOUT,
        payload: {
            isLoggedIn: false
        }
    }
}

export const getLoginStatus = () => {
    console.log('in action');

    return {
        type: GET_LOGIN_STATUS,
        payload: {
            isLoggedIn: false,
            loading: true,
            isError: false
        }
    }
}

export const setLoginStatus = (data: AuthData) => {
    console.log('in set login status', data);
    return {
        type: SET_LOGIN_STATUS,
        payload: {
            ...data,
            loading: false,
            isError: false
        }
    }
}

export const updateCount = (data: CounterData) => {
    return {
        type: UPDATE_COUNT,
        payload: {
            ...data
        }
    }
}