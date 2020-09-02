import apiUtil from '../importApi';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async importStatement (formData) {
        try {
            console.log(formData);
            const response = await apiUtil.post(buildUrl('/users/import'), formData);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    },

    async importTrainingData (formData) {
        try {
            console.log(formData);
            const response = await apiUtil.post(buildUrl('/users/training'), formData);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}