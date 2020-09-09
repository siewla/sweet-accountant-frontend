import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async getAllTransactions (id) {
        try {
            // console.log(id)
            const response = await apiUtil.get(buildUrl(`/users/${id}/transactions`));
            // console.log(response.data)
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    },

    async getOne(id) {
        try {
            const response = await apiUtil.get(buildUrl(`/transactions/${id}`));
            return response.data;
        } catch(err) {
            console.log(err);
        }
    },

    async create (newData) {
        console.log(newData)
        const response = await apiUtil.post(buildUrl('/transactions/new'), newData);
        return response.data;
    },

    async update (id, updateContent) {
        const response = await apiUtil.update(buildUrl(`/transactions/${id}`),
            updateContent,
        );
        return response.data;
    },

    async getAllTransactionsByAccountId (id) {
        try {
            const response = await apiUtil.get(buildUrl(`/accounts/${id}/transactions`));
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    },

    async deleteTransactionById (id){
        const response = await apiUtil.delete(buildUrl(`/transactions/${id}`));
        return response.data;
    },

    async getAllTransactionsByCategoryId (id) {
        try {
            const response = await apiUtil.get(buildUrl(`/transactions/categories/${id}`));
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    },

    async getAllTransactionsByRange (startDate, endDate){
        try {
            const data = {
                startDate: startDate,
                endDate: endDate
            }
            // console.log(data)
            const response = await apiUtil.post(buildUrl(`/transactions/filter`), data);
            // console.log('transaction', response)
            return response.data;
        } catch (err) {
            console.log(err);   
            return [];
        }
    }

}