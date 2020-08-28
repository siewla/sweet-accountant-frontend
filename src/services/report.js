import apiUtil from '../api';
const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || 'http://localhost:4000'
const buildUrl = apiPath => {
    return BACKEND_URL + apiPath;
};

export default {
    async calculateTransactionsIncome (id) {
        try {
            const response = await apiUtil.get(buildUrl(`/users/${id}/transactions/income`));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    },
    async calculateTransactionsExpense (id) {
        try {
            const response = await apiUtil.get(buildUrl(`/users/${id}/transactions/expense`));
            return response.data;
        } catch (err) {
            console.log(err);
            return [];
        }
    }
    
}