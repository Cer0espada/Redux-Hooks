import * as ACTIONS from '../actions/types';

const INITIAL_STATE ={
    isSignedIn: null,
    userId: null
}

const authReducer = (state=INITIAL_STATE, action) =>{
switch(action.type) {
    case ACTIONS.SIGN_IN:
        return {...state, isSignedIn: true, userId: action.payload}
    case ACTIONS.SIGN_IN_FAIL:
        return{...state, isSignedIn: false}
    case ACTIONS.SIGN_OUT:
        return {...state, isSignedIn: false, userId: null};
    case ACTIONS.SIGN_OUT_FAIL:
        return {...state, isSignedIn: true}
    default:
        return state;
}
};

export default authReducer;

//gapi.auth2.getAuthInstance().currentUser