import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async logIn(user) {
        try {
            const response = await apiUtil.post(buildUrl('/users/login'), user);
            return response.data;
        } catch(err) {
            console.log(err)
        }
        
    },
    async logOut() {
        try {
            const response = await apiUtil.get(buildUrl('/users/logout'));
            return response.data;
        } catch (err) {
            console.log(err);
        }
    },
    async checkAuthentication () {
        console.log(BACKEND_URL)
        try {
            const response = await apiUtil.get(buildUrl('/check_authentication'));
            // console.log(response)
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async getDataFacebook (accessToken) {
        try {
            const response = await apiUtil.post(buildUrl('/users/get_data_fb'), accessToken);
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async logInWithFbOrGoogle (email) {
        try {
            const response = await apiUtil.post(buildUrl('/users/log_in_fb_google'), email);
            return response.data
        } catch (err) {
            console.log(err)
        }
    },

    async logInWithGoogle(idToken){
        try {
            console.log(idToken);
            const response = await apiUtil.post(buildUrl('/users/googlelogin'), idToken);
            return response
        } catch (err) {
            console.log(err)
        }
    }

};