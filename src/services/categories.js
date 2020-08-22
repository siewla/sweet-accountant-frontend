import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async getAllIncomeCategories () {
        try {
            const response = await apiUtil.get(buildUrl('/categories/income'));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },

    async getAllExpenseCategories () {
        try {
            const response = await apiUtil.get(buildUrl('/categories/expense'));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },

    async getOne(id) {
        try {
            const response = await apiUtil.get(buildUrl(`/categories/${id}`));
            return response.data;
        } catch(err) {
            console.log(err);
        }
    },

    async create (name, type) {
        // console.log(name, type)
        const response = await apiUtil.post(buildUrl('/categories/new'), {
            name,
            type
        });
        return response.data;
    },

    async update (id, updateContent) {
        const response = await apiUtil.update(buildUrl(`/categories/${id}`),
            updateContent,
        );
        return response.data;
    }
}