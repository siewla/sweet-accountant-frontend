import React, { Component } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import authentication from '../../services/authentication';

class Googlelogin extends Component{
    constructor(props) {
        super(props)
        this.state = {
            currentUserEmail:''
        }
    }

    // send google token
    sendGoogleToken = tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/googlelogin`,{
            idToken: tokenId
        })
        .then(res =>{
            // console.log(res.data)
            this.setState({
                currentUserEmail: res.data.data
            })
            console.log('email', this.state.currentUserEmail)
        })
        .catch(err =>{
            console.log(err)
        })
    }

    //get response from google 
    responseGoogle = async response =>{
        this.sendGoogleToken(response.tokenId);
        const currentUser = await authentication.logInWithFbOrGoogle({email: this.state.currentUserEmail});
        if(!currentUser.err) {
            this.props.login(currentUser);
        } else {
            this.props.showErr(currentUser.err);
        }   
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