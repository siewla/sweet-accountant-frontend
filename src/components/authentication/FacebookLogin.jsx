import React from 'react'
import authentication from '../../services/authentication';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Facebooklogin = (props) => {
    const responseFacebook = async (response) => {
        const data = await authentication.getDataFacebook({ accessToken: response.accessToken})
        console.log(data);
        const currentUser = await authentication.logInWithFbOrGoogle({email: data.email});
        if(!currentUser.err) {
            props.login(currentUser);
        } else {
            props.showErr(currentUser.err);
        }  
    }

    return (
        <FacebookLogin
            appId="577117482961429"
            callback={responseFacebook}
            fields="email"
            scope="public_profile,email"
            render={renderProps => (
                <h3 onClick={renderProps.onClick}><i className="fab fa-facebook p-2"></i></h3>
            )}
        />
    )
}


export default Facebooklogin