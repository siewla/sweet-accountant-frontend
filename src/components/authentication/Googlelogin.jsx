import React, { Component } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import authentication from '../../services/authentication';

class Googlelogin extends Component{
    constructor(props) {
        super(props)
    }

    // send google token
    sendGoogleToken = tokenId => {
        axios.post(`http://localhost:4000/users/googlelogin`,{
            idToken: tokenId
        })
        .then(async res =>{
            const currentUser = await authentication.logInWithFbOrGoogle({email: res.data.data});
            if(!currentUser.err) {
                this.props.login(currentUser);
            } else {
                this.props.showErr(currentUser.err);
            }   
        })
        .catch(err =>{
            console.log(err)
        })
    }

    //get response from google 
    responseGoogle = async response =>{
        this.sendGoogleToken(response.tokenId); 
    }

    render(){
        return (
            <GoogleLogin 
                clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
                onSuccess={ this.responseGoogle }
                onFailure={ this.responseGoogle }
                cookiePolicy = { 'single_host_origin' }
            />
        )
    }
}

export default Googlelogin