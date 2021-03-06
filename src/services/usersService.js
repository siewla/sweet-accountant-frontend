import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async getAll () {
        try {
            const response = await apiUtil.get(buildUrl('/users/all'));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    async getOne(id) {
        try {
            const response = await apiUtil.get(buildUrl(`/users/${id}`));
            return response.data;
        } catch(err) {
            console.log(err);
        }
    },
    async create (newUser) {
        const response = await apiUtil.post(buildUrl('/users/new'), newUser);
        return response.data;
    },
    async update (id, updateContent) {
        const response = await apiUtil.update(buildUrl(`/users/${id}`),
            updateContent,
        );
        return response.data;
    },
    async getAllAccounts (id) {
        try {
            const response = await apiUtil.get(buildUrl(`/users/${id}/accounts`));
            return response.data;
        } catch(err) {
            console.log(err);
        }
    },
    async importStatement (file) {
        try {
            console.log(file);
            const response = await apiUtil.post(buildUrl('/users/import'), file);
            return response.data;
        } catch (err) {
            console.log(err);
        }
    }
}