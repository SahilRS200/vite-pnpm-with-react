import { Action } from "../../common/types";
// import { DO_LOGOUT, GET_LOGIN_STATUS, SET_LOGIN_STATUS, UPDATE_COUNT } from "../actions/mockActions";


const initialState = {
    count : 0,
    isLoggedIn: false,
    loading: false

}

const dummyReducer = (state = initialState, action: Action) => {
    const { type, payload={} } = action;

    switch(type) {
        // case GET_LOGIN_STATUS:
        //     return { ...state, ...payload }
        // case SET_LOGIN_STATUS:
        //     return { ...state, ...payload}
        // case UPDATE_COUNT:
        //     return {...state, ...payload}
        // case DO_LOGOUT: 
        //     return {...state, ...payload}
        default:
            return {...state, ...payload}
    }
}

export default dummyReducer;