import React, { useState, useEffect } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import CategoriesService from '../../services/categories';
import authentication from '../../services/authentication';
import { Link } from 'react-router-dom';
import { PieChart } from 'react-chartkick';
import 'chart.js';
import { MDBBtn } from 'mdbreact';
import { trackPromise } from 'react-promise-tracker';
import NumberFormat from 'react-number-format';
import Loader from '../Loader';

const Categories = (props) => {
    const [dataChartIncome, setDataChartIncome] = useState([]);
    const [dataChartExpense, setDataChartExpense] = useState([]);
    const [datatableIncome, setDatatableIncome] = useState({
        columns: [
            {
                label: 'Type',
                field: 'type',
            },
            {
                label: 'Name',
                field: 'name',
            },
            {
                label: 'Total',
                field: 'total',
            },
            {
                label: 'Action',
                field: 'action',
            }
        ],
        rows: [
        ],
    });

    const [datatableExpense, setDatatableExpense] = useState({
        columns: [
            {
                label: 'Type',
                field: 'type',
            },
            {
                label: 'Name',
                field: 'name',
            },
            {
                label: 'Total',
                field: 'total',
            },
            {
                label: 'Action',
                field: 'action',
            }
        ],
        rows: [
        ],
    });


    // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();

        if (response.message) {
            return [];
        } else {
            return response
        }
    }

    const createRow = async (detail) => {
        const content = [];
        const dataChart = [];
        for (let i = 0; i < detail.length; i++) {
            const category = await CategoriesService.getOne(detail[i].categoryId)
            const path = `/listalltransactions/category/${category.id}`
            content.push({
                type: category.type,
                name: category.name,
                // total: detail[i].total,
                total: <NumberFormat value={detail[i].total} displayType={'text'} thousandSeparator={true} prefix={'$'} />,
                action: <Link to={path}><MDBBtn color="success" size="sm"><i class="fas fa-eye fa-lg"></i></MDBBtn></Link>
            });
            dataChart.push([category.name, detail[i].total])
        }
        const result = { content, dataChart }
        return result;
    }
    const fetchData = async () => {
        const currentUser = await trackPromise(checkAuthentication());

        const inComeDetail = await trackPromise(CategoriesService.getIncomeDetail(currentUser.id));
        const expenseDetail = await trackPromise(CategoriesService.getExpenseDetail(currentUser.id));

        const incomeContent = await trackPromise(createRow(inComeDetail));
        const expenseContent = await trackPromise(createRow(expenseDetail));

        // console.log(incomeContent.content);
        // set data table
        setDatatableIncome({
            ...datatableIncome,
            rows: incomeContent.content
        });
        setDatatableExpense({
            ...datatableExpense,
            rows: expenseContent.content
        })

        // set data chart
        setDataChartIncome(incomeContent.dataChart);
        setDataChartExpense(expenseContent.dataChart);

    };

    useEffect(() => {
        fetchData();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="categories card">
            <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item">
                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home"
                        aria-selected="true">Expense</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile"
                        aria-selected="false">Income</a>
                </li>
            </ul>
            <div className="tab-content black-text" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <Loader>
                        {/* Chart */}
                        <PieChart donut={true} data={dataChartExpense} thousands="," prefix="$" decimal="." />

                        {/* Table */}
                        <MDBDataTableV5
                            hover
                            entriesOptions={[5, 10, 20]}
                            entries={5}
                            data={datatableExpense}
                        />
                    </Loader>

                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <Loader>
                        {/* Chart */}
                        <PieChart donut={true} data={dataChartIncome} thousands="," prefix="$" decimal="." />
                        {/* Table */}
                        <MDBDataTableV5
                            hover
                            entriesOptions={[5, 10, 20]}
                            entries={5}
                            data={datatableIncome}
                        />
                    </Loader>

                </div>
            </div>

        </div>
    )
}

export default Categories
