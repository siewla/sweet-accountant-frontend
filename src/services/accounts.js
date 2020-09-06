import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async getAllTransactions (idAccount) {
        try {
            const response = await apiUtil.get(buildUrl(`/accounts/${idAccount}/transactions`));
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    },

    async getOne(id) {
        try {
            const response = await apiUtil.get(buildUrl(`/accounts/${id}`));
            return response.data;
        } catch(err) {
            console.log(err);
        }
    },

    async create (name) {
        const response = await apiUtil.post(buildUrl('/accounts/new'), { name });
        return response.data;
    },

    async updateById (id, updateContent) {
        const response = await apiUtil.update(buildUrl(`/accounts/${id}`),
            updateContent,
        );
        return response.data;
    },

    async deleteById (id) {
        const response = await apiUtil.delete(buildUrl(`/accounts/${id}`));
        return response.data;
    },
    
    async getAllAccountsStatistic (idAccount){
        // console.log(idAccount)
        try {
            const response = await apiUtil.get(buildUrl(`/users/${idAccount}/accounts/statistic`));
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    },

    async getEachAccountStatistic (idAccount){
        try {
            const response = await apiUtil.get(buildUrl(`/users/${idAccount}/accounts/statistic/each`));
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    },

    
}