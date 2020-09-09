import React from 'react'
import axios from 'axios'
import { GoogleLogin } from 'react-google-login'
import { useHistory} from 'react-router-dom';


const Googlelogin =(props)=> {
    const history = useHistory();

    // send google token
    const sendGoogleToken = async tokenId => {
        axios.post(`${process.env.REACT_APP_BACKEND_URL}/users/googlelogin`,{
            idToken: tokenId
        },{
            withCredentials: true
        })
        .then(res =>{
            props.setCurrentUser(res.data.data);
            history.push('/login')
        })
        .catch(err =>{
            console.log(err)
        }).finally( () =>{
            props.checkAuthentication()
        }
        )
    }

    //get response from google 
    const responseGoogle = async response =>{
        sendGoogleToken(response.tokenId); 
    }

    return (
        <GoogleLogin 
            clientId={`${process.env.REACT_APP_GOOGLE_CLIENT}`}
            onSuccess={responseGoogle }
            onFailure={ responseGoogle }
            cookiePolicy = { 'single_host_origin' }
            render={renderProps => (
                <h5 onClick={renderProps.onClick} className="continue-box"><i className="fab fa-google p-2 fa-lg"> Continue with Google</i></h5>
            )}
        />
    )
    
}

export default Googlelogin