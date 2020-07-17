import * as ACTIONS from './types'

export const signIn = ()=> async(dispatch) => {
    try{
        await window.gapi.auth2.getAuthInstance().signIn()
        dispatch({
        type: ACTIONS.SIGN_IN,
        payload: window.gapi.auth2.getAuthInstance().currentUser.get().getId()
    })
//window.gapi.auth2.getAuthInstance()
    }catch(error){
        console.log(error)
    dispatch({
        type: ACTIONS.SIGN_IN_FAIL
    })
    }
}

export const signOut = () => async(dispatch) =>{
    try{
        await window.gapi.auth2.getAuthInstance().signOut()
        dispatch({
            type: ACTIONS.SIGN_OUT
        })
    }catch(error){
        console.log(error);
        dispatch({
            type:ACTIONS.SIGN_OUT_FAIL
        })
    }


}