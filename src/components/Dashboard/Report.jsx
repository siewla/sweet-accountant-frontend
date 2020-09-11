import React, { useState, useEffect } from 'react'
import authentication from '../../services/authentication';
import reportService from '../../services/report';
import { LineChart, ColumnChart } from 'react-chartkick';
import 'chart.js';
import categoriesService from '../../services/categories';
import { trackPromise } from 'react-promise-tracker';
import Loader from '../Loader';

const Report = (props) => {
    const [dataIncome, setDataIncome] = useState({});
    const [dataExpense, setDataExpense] = useState({});
    const [dataCategories, setDataCategorie] = useState([]);
    const [currentData, setCurrentData] = useState("expense");

    // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();

        if (response.message) {
            return [];
        } else {
            return response
        }
    }

    const toggleCurrentData = (event) => {
        setCurrentData(event.currentTarget.id);
    }

    const changeData = async (data, type) => {
        const result = [];
        for (let i = 0; i < data.length; i++) {
            const category = await categoriesService.getOne(data[i].categoryId);
            result.push({
                name: category.name,
                data: {
                    income: type === "expense" ? 0 : data[i].total,
                    expense: type === "expense" ? data[i].total : 0
                }
            })
        }
        return result;
    }

    const fetchData = async () => {
        const currentUser = await trackPromise(checkAuthentication());
        const incomeData = await trackPromise(reportService.calculateTransactionsIncome(currentUser.id));
        const expenseData = await trackPromise(reportService.calculateTransactionsExpense(currentUser.id));
        setDataIncome(incomeData);
        setDataExpense(expenseData);


        const incomeCat = await trackPromise(categoriesService.getIncomeDetail(currentUser.id));
        const inComeResult = await trackPromise(changeData(incomeCat, "income"));

        const expenseCat = await trackPromise(categoriesService.getExpenseDetail(currentUser.id));
        const expenseResult = await trackPromise(changeData(expenseCat, "expense"));

        setDataCategorie([...inComeResult, ...expenseResult]);
        // console.log([...inComeResult, ...expenseResult]);
    }

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])
    return (
        <div className="categories card">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                        aria-selected="true"> <i className="fas fa-money-bill-alt fa-lg"></i> Group by Transactions</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                        aria-selected="false"><i className="fas fa-table fa-lg"></i> Group by category</a>
                </li>

            </ul>
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <Loader>
                        <LineChart data={currentData === "expense" ? dataExpense : dataIncome}
                            thousands="," prefix="$"
                            colors={currentData === "expense" ? ["#b00", "#666"] : ''}
                            decimal="." />
                    </Loader>


                    <div className="text-center">
                        <button className="btn peach-gradient" onClick={toggleCurrentData} id="expense">Expense</button>
                        <button className="btn blue-gradient" onClick={toggleCurrentData} id="income">Income</button>
                    </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Loader>
                        <ColumnChart data={dataCategories} stacked={true} thousands="," prefix="$" decimal="." />
                    </Loader>

                </div>

            </div>

        </div>
    )
}

export default Report
