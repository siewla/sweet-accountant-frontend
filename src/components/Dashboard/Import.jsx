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
        <div className="import">
            <div className="container my-5 z-depth-1">

                <section className="dark-grey-text p-5">

                    <div className="row">


                        <div className="col-md-5 mb-4 mb-md-0">

                            <div className="view">
                                <img src="https://mdbootstrap.com/img/illustrations/undraw_Group_chat_unwm.svg" className="img-fluid" alt="background" />
                            </div>

                        </div>
                        <div className="col-md-7 mb-lg-0 mb-4 form-import">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <p className="instruction" data-toggle="modal" data-target="#centralModalInfo"><svg id="Capa_1" enableBackground="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g><g><path clipRule="evenodd" d="m386.872 9.999h-328.597c-20.513 0-37.275 16.75-37.275 37.186v26.614c0 6.972 5.711 12.669 12.7 12.669h19.745 283.453c6.989 0 12.7-5.697 12.7-12.669v-26.614c-.001-20.464 16.761-37.186 37.274-37.186z" fill="#e6dfe1" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m336.898 86.468h-283.453v385.576c0 6.972 5.711 12.669 12.7 12.669h267.628c-10.256-7.029-20.143-16.325-29.291-28.059l-69.407-89.082c-22.217-28.513 12.813-66.209 37.332-39.963l24.348 26.104c19.66 21.059 16.024 8.219 16.024-21.569v-144.492c0-31.347 44.548-31.347 44.548 0v87.494c0-31.347 44.548-31.347 44.548 0v18.933c0-15.674 11.137-23.525 22.274-23.525v-184.086-39.283c0-20.464-16.762-37.186-37.275-37.186s-37.275 16.722-37.275 37.186v26.614c-.002 6.972-5.712 12.669-12.701 12.669zm-176.544 55.75c5.114 0 9.29 4.166 9.29 9.24v38.858c0 5.073-4.176 9.24-9.29 9.24h-38.951c-5.085 0-9.262-4.166-9.262-9.24v-38.858c0-5.073 4.176-9.24 9.262-9.24z" fill="#fff" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m160.354 142.218h-38.951c-5.085 0-9.262 4.166-9.262 9.24v38.858c0 5.073 4.176 9.24 9.262 9.24h38.951c5.114 0 9.29-4.166 9.29-9.24v-38.858c0-5.073-4.176-9.24-9.29-9.24z" fill="#a0c8ff" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m312.777 187.652v144.492c0 29.788 3.637 42.628-16.024 21.569l-24.348-26.104c-24.518-26.246-59.549 11.451-37.332 39.963l69.407 89.082c9.148 11.734 19.035 21.03 29.291 28.059 69.862 47.871 157.821-8.843 157.224-110.707v-61.022c0-31.347-44.576-31.347-44.576 0v-18.905c0-15.674-11.137-23.525-22.274-23.525s-22.274 7.851-22.274 23.525v-18.933c0-31.347-44.548-31.347-44.548 0v-87.494c.002-31.347-44.546-31.347-44.546 0z" fill="#ffdcd5" fillRule="evenodd" /></g><g><path d="m121.403 209.555h38.951c10.637 0 19.291-8.631 19.291-19.239v-38.858c0-10.608-8.654-19.239-19.291-19.239h-38.951c-10.621 0-19.262 8.631-19.262 19.239v38.858c0 10.608 8.641 19.239 19.262 19.239zm.738-57.338h37.503v37.34h-37.503z" /><path d="m468.709 279.475c-4.789 0-9.596 1.025-13.982 3.048-3.372-10.689-11.397-17.562-20.58-20.428v-214.91c-.001-26.018-21.208-47.185-47.275-47.185h-328.597c-26.067 0-47.275 21.167-47.275 47.185v26.614c0 12.499 10.183 22.668 22.7 22.668h9.745v375.577c0 12.499 10.183 22.668 22.7 22.668h264.652c17.544 11.368 36.679 17.289 56.118 17.288 10.808 0 21.713-1.829 32.484-5.566 23.233-8.059 43.99-24.909 58.448-47.447 15.33-23.898 23.335-53.304 23.15-84.981v-61.022c0-21.999-16.243-33.509-32.288-33.509zm-405.264 192.569v-375.577h91.625c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-121.37c-1.463 0-2.7-1.223-2.7-2.671v-26.613c0-14.991 12.235-27.187 27.275-27.187h289.979c-5.451 7.69-8.656 17.071-8.656 27.187v26.614c0 1.448-1.236 2.671-2.7 2.671h-91.823c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h91.823c12.517 0 22.7-10.169 22.7-22.668v-26.615c0-14.991 12.235-27.187 27.274-27.187s27.274 12.196 27.274 27.187v214.905c-1.349.421-2.677.918-3.965 1.512-4.56-14.464-17.636-21.965-30.582-21.965-4.176 0-8.362.779-12.274 2.321v-56.306c0-21.999-16.235-33.51-32.273-33.51-16.039 0-32.274 11.51-32.274 33.51v144.491c0 4.551.083 8.701.155 12.363.009.395.017.795.024 1.196l-23.244-24.919c-13.541-14.495-33.12-15.982-47.611-3.614-14.26 12.171-20.829 36.126-4.917 56.547l69.408 89.083c3.301 4.236 6.733 8.204 10.273 11.915h-240.721c-1.464 0-2.7-1.223-2.7-2.67zm417.552-97.98c.318 54.464-26.434 99.007-68.153 113.478-35.294 12.24-72.857-1.601-100.474-37.033l-69.407-89.082c-8.278-10.624-5.084-22.896 2.124-29.047 1.682-1.435 4.901-3.608 8.969-3.608 3.253 0 7.05 1.389 11.037 5.657l24.351 26.106c6.873 7.362 15.42 16.525 24.899 12.683 7.551-3.063 8.254-11.597 8.485-14.401.317-3.857.222-8.646.101-14.709-.07-3.568-.151-7.612-.151-11.964v-144.492c0-12.861 10.225-13.512 12.274-13.512s12.273.651 12.273 13.512v143.16c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-55.665c0-12.861 10.225-13.512 12.274-13.512 3.235 0 6.323 1.155 8.47 3.171 2.524 2.368 3.804 5.847 3.804 10.342v55.665c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-36.733c0-12.87 10.218-13.522 12.267-13.522 3.236 0 6.325 1.157 8.475 3.173 2.526 2.371 3.807 5.852 3.807 10.348v36.733c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-17.828c0-12.86 10.236-13.511 12.288-13.511 3.24 0 6.333 1.156 8.482 3.172 2.525 2.367 3.806 5.846 3.806 10.339v61.08z" /><path d="m201.721 142.218c0 5.522 4.477 9.999 10 9.999h80.032c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-80.032c-5.523 0-10 4.477-10 9.999z" /><path d="m274.764 189.557h-63.043c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h63.043c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999z" /><path d="m112.141 266.92h152.736c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-152.736c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z" /><path d="m112.141 324.258h82.391c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-82.391c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z" /><path d="m112.141 381.624h72.561c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-72.561c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z" /><path d="m218.596 418.964h-106.455c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h106.455c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999z" /><path d="m200.072 96.467h.057c5.523 0 9.972-4.477 9.972-9.999s-4.505-9.999-10.028-9.999-10 4.477-10 9.999 4.476 9.999 9.999 9.999z" /></g></g></svg>
                                    Click here to see the format of csv file
                                </p>
                                {/* Modal */}
                                {/* <!-- Central Modal Medium Info --> */}
                                <div className="modal fade right" id="centralModalInfo" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                    aria-hidden="true">
                                     <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
                                        {/* <!--Content--> */}
                                        <div className="modal-content">
                                            {/* <!--Header--> */}
                                            <div className="modal-header">
                                                <p className="heading lead">Format CSV File</p>

                                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                    <span aria-hidden="true" className="white-text">&times;</span>
                                                </button>
                                            </div>

                                            {/* <!--Body--> */}
                                            <div className="modal-body">

                                                <section>
                                                    <div className="modal fade" id="modal1" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                                                        aria-hidden="true">
                                                        <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                                            <div className="modal-content">
                                                                <div className="embed-responsive embed-responsive-16by9 z-depth-1-half">
                                                                    <iframe id="player" className="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="how to import"></iframe>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h3 className="font-weight-bold text-center dark-grey-text pb-2">Four Easy Steps</h3>
                                                    <hr className="w-header my-4" />
                                                    <p className="lead text-center text-muted pt-2 mb-5">Sample data</p>

                                                    <div className="row align-items-center">

                                                        <div className="">
                                                            <div className="view z-depth-1-half rounded">
                                                                <img className="rounded img-fluid" src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599625363/Screen_Shot_2020-09-09_at_12.22.19_PM_l53yvc.png" alt="Video title" />
                                                                
                                                            </div>
                                                        </div>

                                                        <div className="">

                                                            <ol className="step pl-0">
                                                                <li className="step-element pb-0">
                                                                    <div className="step-number">
                                                                        <span className="number">1</span>
                                                                    </div>
                                                                    <div className="step-excerpt">
                                                                        <h6 className="font-weight-bold dark-grey-text mb-3">Download your Bank statement in csv file</h6>
                                                                        <p className="text-muted">If you have your own excel file recording all your transactions, edit it (step 3) and export to csv file</p>
                                                                    </div>
                                                                </li>
                                                                <li className="step-element pb-0">
                                                                    <div className="step-number">
                                                                        <span className="number">2</span>
                                                                    </div>
                                                                    <div className="step-excerpt">
                                                                        <h6 className="font-weight-bold dark-grey-text mb-3">Open </h6>
                                                                        <p className="text-muted">Open with Numbers/ Excel/ Google Sheet</p>
                                                                    </div>
                                                                </li>
                                                                <li className="step-element pb-0">
                                                                    <div className="step-number">
                                                                        <span className="number">3</span>
                                                                    </div>
                                                                    <div className="step-excerpt">
                                                                        <h6 className="font-weight-bold dark-grey-text mb-3">Edit</h6>
                                                                        <p className="text-muted"> Make sure your data has 3 columns (date, description, amount) in a correct order</p>
                                                                    </div>
                                                                </li>
                                                                <li className="step-element pb-0">
                                                                    <div className="step-number">
                                                                        <span className="number">4</span>
                                                                    </div>
                                                                    <div className="step-excerpt">
                                                                        <h6 className="font-weight-bold dark-grey-text mb-3">Save / Export</h6>
                                                                        <p className="text-muted">Save and export it as csv file</p>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                            <hr className="w-header my-4" />
                                                            <p className="lead text-center text-muted pt-2 mb-5">Now your file is ready to be imported</p>
                                                        </div>

                                                    </div>
                                                </section>

                                            </div>

                                            {/* <!--Footer--> */}
                                            <div className="modal-footer justify-content-center">
                                                <a href="/" type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal">Get it</a>
                                            </div>
                                        </div>
                                        {/* <!--/.Content--> */}
                                    </div>
                                </div>
                                {/* <!-- Central Modal Medium Info--> */}
                                {/* end modal */}
                                <h3 className="font-weight-bold my-3">Import your Bank Statement</h3>

                                <p className="text-muted mb-4 pb-2">A simple and convenient way for you to import all your transactions in a minute. </p>
                                <small className="form-text"><strong>* Just accept .csv file</strong></small>
                                <div className="input-group">
                                    <input type="file" className="form-control" name="file" onChange={handleChange} required />

                                    <select className="browser-default custom-select" value={accountId} onChange={handleChangeAccount} required >
                                        <option>Account</option>
                                        {accounts.map(account => {
                                            return <option value={account.id} key={account.id}>{account.name}</option>
                                        })}
                                    </select>
                                    <div className="input-group-append">
                                        <button className="btn btn-md btn-primary rounded-right m-0 px-3 py-2 z-depth-0 waves-effect" type="submit" id="button-addon2">Import</button>
                                    </div>
                                </div>




                            </form>
                            {alert ?
                                < div className="alert alert-success" role="alert">
                                    {alert}
                                </div> : ''
                            }


                        </div>


                    </div>


                </section>



            </div>
        </div>
    )
}

export default Import
