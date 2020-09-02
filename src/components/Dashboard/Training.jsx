import React, { useState, useEffect } from 'react'
import importService from '../../services/import';

const Traning = (props) => {
    const [data, setData] = useState('');
    const [alert, setAlert] = useState('');

    const handleChange = (event) => {
        setData(event.target.files[0])
    }


    const handleSubmit = async (event) => {
        event.preventDefault();
        let newData = new FormData();
        newData.append('file', data);
        const response = await importService.importTrainingData(newData);
        setAlert(response.message);
    }

    return (
        <div className="categories card">

            <form className="text-center border border-light p-5" onSubmit={handleSubmit} encType="multipart/form-data">

                <p className="h4 mb-4">Import your data</p>

                <p>Just accept .csv file. This app can learn more in order to support you in importing statements</p>

                <input type="file" name="file" className="form-control mb-4" onChange={handleChange} />

                <button className="btn btn-info btn-block" type="submit">Submit</button>

            </form>
            {alert ?
                < div className="alert alert-success" role="alert">
                    {alert}
                </div> : ''
            }


        </div >
    )
}

export default Traning
