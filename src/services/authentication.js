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
        try {
            const response = await apiUtil.get(buildUrl('/check_authentication'));
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async getDataFacebook (accessToken) {
        try {
            const response = await apiUtil.post(buildUrl('/get_data_fb'), accessToken);
            return response.data
        } catch (err) {
            console.log(err)
        }
    },
    async logInWithFb (email) {
        try {
            const response = await apiUtil.post(buildUrl('/log_in_with_fb'), email);
            return response.data
        } catch (err) {
            console.log(err)
        }
    }

};