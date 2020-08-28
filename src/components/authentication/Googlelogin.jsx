import React, { Component } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'

class Googlelogin extends Component{
    // send google token
    sendGoogleToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/googlelogin`,{
            idToken: tokenId
        })
        .then(res =>{
            this.props.login(res.data.data);
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