import React, { useState, useEffect } from 'react'
import { MDBDataTableV5 } from 'mdbreact';
import CategoriesService from '../../services/categories';
import authentication from '../../services/authentication';

const Categories = (props) => {
    const [datatableIncome, setDatatableIncome] = React.useState({
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

    const [datatableExpense, setDatatableExpense] = React.useState({
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
        for (let i = 0; i < detail.length; i++) {
            const category = await CategoriesService.getOne(detail[i].categoryId);
            content.push({
                type: category.type,
                name: category.name,
                total: detail[i].total,
                action: <div><button>Edit</button><button>Show</button></div>
            })
        }
        return content;
    }
    const fetchData = async () => {
        const currentUser = await checkAuthentication();
        if (currentUser) {
            const inComeDetail = await CategoriesService.getIncomeDetail(currentUser.id);
            const expenseDetail = await CategoriesService.getExpenseDetail(currentUser.id);

            const incomeContent = await createRow(inComeDetail);
            const expenseContent = await createRow(expenseDetail);

            setDatatableIncome({
                ...datatableIncome,
                rows: incomeContent
            });
            setDatatableExpense({
                ...datatableExpense,
                rows: expenseContent
            })
        } else {

        }
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
            <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                    <MDBDataTableV5 hover
                        entriesOptions={[5, 10, 20]}
                        entries={5}
                        data={datatableExpense} />
    </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <MDBDataTableV5 hover
                        entriesOptions={[5, 10, 20]}
                        entries={5}
                        data={datatableIncome} />
                  </div>
            </div>

        </div>
    )
}

export default Categories
