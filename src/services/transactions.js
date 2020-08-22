import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async getOne(id) {
        try {
            const response = await apiUtil.get(buildUrl(`/transactions/${id}`));
            return response.data;
        } catch(err) {
            console.log(err);
        }
    },

    async create (newData) {
        const response = await apiUtil.post(buildUrl('/transactions/new'), newData);
        return response.data;
    },

    async update (id, updateContent) {
        const response = await apiUtil.update(buildUrl(`/transactions/${id}`),
            updateContent,
        );
        return response.data;
    }
}