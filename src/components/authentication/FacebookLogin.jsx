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
            appId="2397031347257750"
            callback={responseFacebook}
            fields="email"
            scope="public_profile,email"
            render={renderProps => (
                <h5 onClick={renderProps.onClick}><i className="fab fa-facebook p-2 fa-lg"> Sign in with Facebook</i></h5>
            )}
        />
    )
}


export default Facebooklogin