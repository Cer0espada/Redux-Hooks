import React, {useEffect} from 'react';
import {signIn, signOut} from '../actions';
import {useSelector, shallowEqual, useDispatch} from 'react-redux';

//converting from class component to function component with hook


const GoogleAuth = () => {

    // Adding redux 
    const signedIn = useSelector((state => state.auth.isSignedIn), shallowEqual);

    const dispatch = useDispatch();

    useEffect(() => {
        const authenticate = () => 
        {
            window.gapi.load('client:auth2', ()=>{
            window.gapi.client.init({
                clientId:"284094409817-h05au58e1014lto5pvo18bkbm51jtn0g.apps.googleusercontent.com",
                scope:'email'
            })
        }) 
    }
     authenticate()
    }, [signedIn])

    const handleSignIn = (event) => {
        event.preventDefault()
        try{
            dispatch(signIn())
        }catch(error){
            console.log(error)
        }
    }

    const handleSignOut = (event) => {
        event.preventDefault()
        try{
            dispatch(signOut())
        }catch(error){
            console.log(error)
        }
    }

    return (
    <div>
        <button className="ui red google button"
            onClick={(event) => ((signedIn)? handleSignOut(event):handleSignIn(event)) }
        >
            <i className="google icon "/>
            {(signedIn) ? 'Signed in': 'Signed out' }
        </button>
    </div>
    )
}

export default GoogleAuth;
