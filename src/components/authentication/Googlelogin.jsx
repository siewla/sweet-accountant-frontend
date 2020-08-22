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
        .then(async res =>{
            this.setState({
                currentUserEmail: res.data.data,
            })
            const currentUser = await authentication.logInWithFbOrGoogle({email: this.state.currentUserEmail});
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
                render={renderProps => (
                    <h3 onClick={renderProps.onClick}><i className="fab fa-google p-2"></i></h3>
                )}
            />
        )
    }
}

export default Googlelogin