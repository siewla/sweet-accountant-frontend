import React, { Component } from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'

class Googlelogin extends Component{
    // send google token
    sendGoogleToken = async tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/googlelogin`,{
            idToken: tokenId
        },{
            withCredentials: true
        })
        .then(res =>{
            // console.log('google',res)
            this.props.setCurrentUser(res.data.data);
            // this.props.login(res.data.data);
        })
        .catch(err =>{
            console.log(err)
        }).finally( () =>{
            this.props.checkAuthentication()
        }
        )
        // const currentUser = await authentication.logInWithGoogle(tokenId)
        // if (currentUser){
        //     this.props.login(currentUser)
        // } else{
        //     this.props.setErr('Failed to Fetch')
        // }
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
                    <h5 onClick={renderProps.onClick}><i className="fab fa-google p-2 fa-lg"> Sign in with Google</i></h5>
                )}
            />
        )
    }
}

export default Googlelogin