import React from 'react'
import authentication from '../../services/authentication';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';

const Facebooklogin = (props) => {
    const responseFacebook = async (response) => {
        const currentUser = await authentication.getDataFacebook({ accessToken: response.accessToken })
        console.log(currentUser);
        if (!currentUser.err) {
            props.setCurrentUser(currentUser);
            props.login(currentUser)
        } else {
            props.showErr(currentUser.err);
        }
    }

    return (
        <FacebookLogin
            appId={process.env.REACT_APP_FACEBOOK_APPID}
            callback={responseFacebook}
            fields="email"
            scope="public_profile,email"
            render={renderProps => (
                <h5 onClick={renderProps.onClick} className="continue-box"><i className="fab fa-facebook p-2 fa-lg"> Continue with Facebook</i></h5>
            )}
        />
    )
}


export default Facebooklogin