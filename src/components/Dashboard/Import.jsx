import React, { useState, useEffect } from 'react'
import authentication from '../../services/authentication';
import importService from '../../services/import';
import usersService from '../../services/usersService';

const Import = (props) => {
    const [data, setData] = useState('');
    const [accounts, setAccounts] = useState([]);
    const [accountId, setAccountId] = useState('');
    const [alert, setAlert] = useState('');
    // check authentication
    const checkAuthentication = async () => {
        const response = await authentication.checkAuthentication();

        if (response.message) {
            return [];
        } else {
            return response
        }
    }

    const handleChange = (event) => {
        setData(event.target.files[0])
    }

    const handleChangeAccount = (event) => {
        setAccountId(event.target.value);
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        let newData = new FormData();
        newData.append('file', data);
        newData.append('accountId', accountId);
        const response = await importService.importStatement(newData);
        setAlert(response.message);
    }

    const fetchData = async (currentUser) => {
        const allAccounts = await usersService.getAllAccounts(currentUser.id);
        setAccounts(allAccounts);
    }

    useEffect(() => {
        async function fetchCurrentUser() {
            const currentUser = await checkAuthentication();
            fetchData(currentUser);
        }
        fetchCurrentUser();
        // eslint-disable-next-line
    }, [])

    return (
        <div className="categories card black-text">

            <form className="text-center border border-light p-5" onSubmit={handleSubmit} encType="multipart/form-data">

                <p className="h4 mb-4">Import your statement</p>

                <p>Just accept .csv file</p>

                <input type="file" name="file" className="form-control mb-4" onChange={handleChange} />

                <select className="browser-default custom-select" value={accountId} onChange={handleChangeAccount} >
                    <option>Account</option>
                    {accounts.map(account => {
                        return <option value={account.id} key={account.id}>{account.name}</option>
                    })}
                </select>

                <button className="btn btn-info btn-block" type="submit">Submit</button>

            </form>
            {alert ?
                < div className="alert alert-success" role="alert">
                    {alert}
                </div> : ''
            }
        </div>
    )
}

export default Import
