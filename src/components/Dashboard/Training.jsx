import React, { useState } from 'react'
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
        <div className="import">
            <div className="container my-5 z-depth-1">

                <section className="dark-grey-text p-5">

                    <div className="row">

                        <div className="col-md-5 mb-4 mb-md-0">

                            <div className="view">
                                {/* <img src="https://mdbootstrap.com/img/illustrations/app-user-colour.svg" className="img-fluid" alt="smaple image" /> */}
                                <svg id="Capa_1" className="img-fluid" height="312" viewBox="0 0 504.101 504.101" width="312" xmlns="http://www.w3.org/2000/svg"><path d="m294.788 468.641-3.908-16.795h-72.98l-1.814 16.795c0 19.584 15.876 35.46 35.46 35.46h7.782c19.584 0 35.46-15.876 35.46-35.46z" fill="#c9bfc8" /><g><path d="m354.568 44.927c-4.143 0-7.5-3.358-7.5-7.5v-29.927c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v29.927c0 4.142-3.357 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m390.324 48.927c-4.143 0-7.5-3.358-7.5-7.5v-33.927c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v33.927c0 4.142-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m426.079 43.927c-4.143 0-7.5-3.358-7.5-7.5v-28.927c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v28.927c0 4.142-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m466.67 91.346h-28.928c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h28.928c4.143 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m466.67 127.101h-30.928c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h30.928c4.143 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m466.67 55.59h-31.928c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h31.928c4.143 0 7.5 3.358 7.5 7.5s-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><path d="m255.437 47.908c-87.45 0-158.51 70.12-160.05 157.19 0 .33-.01.65-.01.98-.01.64-.02 1.27-.02 1.91v.22.28c0 45.18 18.72 85.99 48.83 115.09 22.24 21.51 39.75 47.35 50.78 76.1l13.974 46.762h91.128l15.819-46.762c10.77-28.35 27.62-54.1 49.7-75.04 30.75-29.17 49.93-70.42 49.93-116.15 0-.08 0-.15 0-.23 0-.09 0-.18 0-.27-.001-88.41-71.671-160.08-160.081-160.08z" fill="#a8d3d8" /><path d="m273.349 444.527-13.974-46.762c-11.03-28.75-28.54-54.59-50.78-76.1-30.11-29.1-48.83-69.91-48.83-115.09 0-.09 0-.19 0-.28 0-.07 0-.14 0-.22 0-.64.01-1.27.02-1.91 0-.33.01-.65.01-.98 1.316-74.431 53.439-136.467 123.17-152.911-8.944-1.55-18.141-2.366-27.528-2.366-87.45 0-158.51 70.12-160.05 157.19 0 .33-.01.65-.01.98-.01.64-.02 1.27-.02 1.91v.22.28c0 45.18 18.72 85.99 48.83 115.09 22.24 21.51 39.75 47.35 50.78 76.1l13.974 46.762h91.128l.647-1.913z" fill="#8ebac5" /><path d="m253.139 468.641 1.814-16.795h-37.053l-1.814 16.795c0 19.584 15.876 35.46 35.46 35.46h7.782c5.22 0 10.172-1.137 14.635-3.163-12.279-5.574-20.824-17.934-20.824-32.297z" fill="#baafb9" /><path d="m308.909 429.181h-106.944v25.163c0 7.896 6.401 14.297 14.297 14.297h78.35c7.896 0 14.297-6.401 14.297-14.297z" fill="#d7d0d6" /><g><path d="m223.409 429.144c-4.142 0-7.5-3.358-7.5-7.5v-150.236c0-4.142 3.358-7.5 7.5-7.5s7.5 3.358 7.5 7.5v150.236c0 4.142-3.358 7.5-7.5 7.5z" fill="#eef5f6" /></g><path d="m223.409 429.144c4.142 0 7.5-3.358 7.5-7.5v-74.83c-4.67-6.156-9.679-12.07-15-17.721v92.55c0 4.143 3.358 7.501 7.5 7.501z" fill="#cbe5e8" /><g><path d="m263.22 424.398c-4.143 0-7.5-3.358-7.5-7.5v-119.734c0-1.989.79-3.896 2.196-5.303l16.03-16.03v-60.696c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v63.802c0 1.989-.79 3.896-2.196 5.303l-16.03 16.03v116.628c0 4.143-3.357 7.5-7.5 7.5z" fill="#eef5f6" /></g><g><path d="m294.788 420.472c-4.143 0-7.5-3.358-7.5-7.5v-65.924c0-1.989.79-3.897 2.196-5.303l33.58-33.58v-35.145c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v38.251c0 1.989-.79 3.897-2.196 5.303l-33.58 33.58v62.818c0 4.142-3.358 7.5-7.5 7.5z" fill="#eef5f6" /></g><path d="m239.018 454.344v-25.163h-37.053v25.163c0 7.896 6.401 14.297 14.297 14.297h37.053c-7.896 0-14.297-6.401-14.297-14.297z" fill="#c9bfc8" /><path d="m315.156 399.644h-119.438c-10.089 0-18.269 8.179-18.269 18.269 0 10.089 8.179 18.269 18.269 18.269h119.438c10.089 0 18.269-8.179 18.269-18.269 0-10.09-8.179-18.269-18.269-18.269z" fill="#e5e1e5" /><path d="m214.502 417.913c0-10.089 8.179-18.269 18.269-18.269h-37.053c-10.089 0-18.269 8.179-18.269 18.269s8.179 18.269 18.269 18.269h37.053c-10.089-.001-18.269-8.18-18.269-18.269z" fill="#d7d0d6" /><path d="m291.833 227.135h-20.772c-3.681 0-6.665-2.984-6.665-6.665v-20.772c0-3.681 2.984-6.665 6.665-6.665h20.772c3.681 0 6.665 2.984 6.665 6.665v20.772c0 3.681-2.984 6.665-6.665 6.665z" fill="#f07281" /><path d="m233.795 291.408h-20.772c-3.681 0-6.665-2.984-6.665-6.665v-20.772c0-3.681 2.984-6.665 6.665-6.665h20.772c3.681 0 6.665 2.984 6.665 6.665v20.772c0 3.681-2.984 6.665-6.665 6.665z" fill="#62dbfb" /><path d="m190.09 221.059h-25.28c-3.681 0-6.665-2.984-6.665-6.665v-25.28c0-3.681 2.984-6.665 6.665-6.665h25.28c3.681 0 6.665 2.984 6.665 6.665v25.28c0 3.681-2.984 6.665-6.665 6.665z" fill="#6cf5c2" /><path d="m211.776 147.164h-15.344c-3.681 0-6.665-2.984-6.665-6.665v-15.344c0-3.681 2.984-6.665 6.665-6.665h15.344c3.681 0 6.665 2.984 6.665 6.665v15.344c0 3.681-2.984 6.665-6.665 6.665z" fill="#fec165" /><path d="m51.94 294.052h-15.344c-3.681 0-6.665-2.984-6.665-6.665v-15.344c0-3.681 2.984-6.665 6.665-6.665h15.344c3.681 0 6.665 2.984 6.665 6.665v15.344c0 3.681-2.984 6.665-6.665 6.665z" fill="#f07281" /><path d="m103.003 376.23h-25.146c-3.681 0-6.665-2.984-6.665-6.665v-25.147c0-3.681 2.984-6.665 6.665-6.665h25.147c3.681 0 6.665 2.984 6.665 6.665v25.147c0 3.681-2.985 6.665-6.666 6.665z" fill="#8ebac5" /><path d="m180.195 95.245h-29.237c-3.681 0-6.665-2.984-6.665-6.665v-29.238c0-3.681 2.984-6.665 6.665-6.665h29.237c3.681 0 6.665 2.984 6.665 6.665v29.237c.001 3.682-2.984 6.666-6.665 6.666z" fill="#fee45a" /><path d="m418.807 409.389h-32.376c-3.681 0-6.665-2.984-6.665-6.665v-32.376c0-3.681 2.984-6.665 6.665-6.665h32.376c3.681 0 6.665 2.984 6.665 6.665v32.376c0 3.681-2.984 6.665-6.665 6.665z" fill="#f07281" /><path d="m458.326 332.459h-19.046c-3.681 0-6.665-2.984-6.665-6.665v-19.045c0-3.681 2.984-6.665 6.665-6.665h19.045c3.681 0 6.665 2.984 6.665 6.665v19.045c.001 3.681-2.983 6.665-6.664 6.665z" fill="#6cf5c2" /><path d="m107.035 39.004h-17.634c-3.681 0-6.665-2.984-6.665-6.665v-17.634c0-3.681 2.984-6.665 6.665-6.665h17.634c3.681 0 6.665 2.984 6.665 6.665v17.634c0 3.681-2.984 6.665-6.665 6.665z" fill="#f07281" /><path d="m57.108 99.376h-13.73c-3.681 0-6.665-2.984-6.665-6.665v-13.73c0-3.681 2.984-6.665 6.665-6.665h13.73c3.681 0 6.665 2.984 6.665 6.665v13.73c0 3.681-2.984 6.665-6.665 6.665z" fill="#8ebac5" /><path d="m337.923 284.881h-16.392c-2.801 0-5.071-2.271-5.071-5.071v-16.392c0-2.801 2.271-5.071 5.071-5.071h16.392c2.801 0 5.071 2.271 5.071 5.071v16.392c.001 2.801-2.27 5.071-5.071 5.071z" fill="#fec165" /><path d="m305.905 56.035v71.405c0 22.511 18.313 40.824 40.824 40.824h63.817c-13.496-52.857-53.3-95.186-104.641-112.229z" fill="#8ebac5" /><g><path d="m390.324 167.691c-4.143 0-7.5-3.358-7.5-7.5v-30.927c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v30.927c0 4.142-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m354.568 167.691c-4.143 0-7.5-3.358-7.5-7.5v-34.927c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v34.927c0 4.142-3.357 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m426.08 167.691c-4.143 0-7.5-3.358-7.5-7.5v-33.927c0-4.142 3.357-7.5 7.5-7.5s7.5 3.358 7.5 7.5v33.927c0 4.142-3.358 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m344.905 91.346h-30.927c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h30.927c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m345.905 55.59h-31.927c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h31.927c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#e5e1e5" /></g><g><path d="m342.905 127.102h-28.927c-4.143 0-7.5-3.358-7.5-7.5s3.357-7.5 7.5-7.5h28.927c4.143 0 7.5 3.358 7.5 7.5s-3.357 7.5-7.5 7.5z" fill="#e5e1e5" /></g><path d="m433.918 143.264h-87.188c-8.74 0-15.824-7.085-15.824-15.824v-87.188c0-8.74 7.085-15.824 15.824-15.824h87.188c8.74 0 15.824 7.085 15.824 15.824v87.188c0 8.739-7.085 15.824-15.824 15.824z" fill="#6cf5c2" /><path d="m367.823 127.44v-87.188c0-8.74 7.085-15.824 15.824-15.824h-36.918c-8.74 0-15.824 7.085-15.824 15.824v87.188c0 8.74 7.085 15.824 15.824 15.824h36.918c-8.739 0-15.824-7.084-15.824-15.824z" fill="#00f2a6" /><path d="m360.905 108.708v-49.724c0-2.517 2.04-4.557 4.557-4.557h49.723c2.517 0 4.557 2.04 4.557 4.557v49.723c0 2.517-2.04 4.557-4.557 4.557h-49.723c-2.517 0-4.557-2.04-4.557-4.556z" fill="#7ca1b1" /><path d="m365.462 54.427c-2.517 0-4.557 2.04-4.557 4.557v49.723c0 2.517 2.04 4.557 4.557 4.557h2.361v-58.837z" fill="#678d98" /></svg>
                            </div>

                        </div>
                        <div className="col-md-7 mb-lg-0 mb-4 form-import">
                            <form onSubmit={handleSubmit} encType="multipart/form-data">
                                <p className="instruction" data-toggle="modal" data-target="#centralModalInfo"><svg id="Capa_1" enableBackground="new 0 0 512 512" height="30" viewBox="0 0 512 512" width="30" xmlns="http://www.w3.org/2000/svg"><g><g><path clipRule="evenodd" d="m386.872 9.999h-328.597c-20.513 0-37.275 16.75-37.275 37.186v26.614c0 6.972 5.711 12.669 12.7 12.669h19.745 283.453c6.989 0 12.7-5.697 12.7-12.669v-26.614c-.001-20.464 16.761-37.186 37.274-37.186z" fill="#e6dfe1" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m336.898 86.468h-283.453v385.576c0 6.972 5.711 12.669 12.7 12.669h267.628c-10.256-7.029-20.143-16.325-29.291-28.059l-69.407-89.082c-22.217-28.513 12.813-66.209 37.332-39.963l24.348 26.104c19.66 21.059 16.024 8.219 16.024-21.569v-144.492c0-31.347 44.548-31.347 44.548 0v87.494c0-31.347 44.548-31.347 44.548 0v18.933c0-15.674 11.137-23.525 22.274-23.525v-184.086-39.283c0-20.464-16.762-37.186-37.275-37.186s-37.275 16.722-37.275 37.186v26.614c-.002 6.972-5.712 12.669-12.701 12.669zm-176.544 55.75c5.114 0 9.29 4.166 9.29 9.24v38.858c0 5.073-4.176 9.24-9.29 9.24h-38.951c-5.085 0-9.262-4.166-9.262-9.24v-38.858c0-5.073 4.176-9.24 9.262-9.24z" fill="#fff" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m160.354 142.218h-38.951c-5.085 0-9.262 4.166-9.262 9.24v38.858c0 5.073 4.176 9.24 9.262 9.24h38.951c5.114 0 9.29-4.166 9.29-9.24v-38.858c0-5.073-4.176-9.24-9.29-9.24z" fill="#a0c8ff" fillRule="evenodd" /></g><g><path clipRule="evenodd" d="m312.777 187.652v144.492c0 29.788 3.637 42.628-16.024 21.569l-24.348-26.104c-24.518-26.246-59.549 11.451-37.332 39.963l69.407 89.082c9.148 11.734 19.035 21.03 29.291 28.059 69.862 47.871 157.821-8.843 157.224-110.707v-61.022c0-31.347-44.576-31.347-44.576 0v-18.905c0-15.674-11.137-23.525-22.274-23.525s-22.274 7.851-22.274 23.525v-18.933c0-31.347-44.548-31.347-44.548 0v-87.494c.002-31.347-44.546-31.347-44.546 0z" fill="#ffdcd5" fillRule="evenodd" /></g><g><path d="m121.403 209.555h38.951c10.637 0 19.291-8.631 19.291-19.239v-38.858c0-10.608-8.654-19.239-19.291-19.239h-38.951c-10.621 0-19.262 8.631-19.262 19.239v38.858c0 10.608 8.641 19.239 19.262 19.239zm.738-57.338h37.503v37.34h-37.503z" /><path d="m468.709 279.475c-4.789 0-9.596 1.025-13.982 3.048-3.372-10.689-11.397-17.562-20.58-20.428v-214.91c-.001-26.018-21.208-47.185-47.275-47.185h-328.597c-26.067 0-47.275 21.167-47.275 47.185v26.614c0 12.499 10.183 22.668 22.7 22.668h9.745v375.577c0 12.499 10.183 22.668 22.7 22.668h264.652c17.544 11.368 36.679 17.289 56.118 17.288 10.808 0 21.713-1.829 32.484-5.566 23.233-8.059 43.99-24.909 58.448-47.447 15.33-23.898 23.335-53.304 23.15-84.981v-61.022c0-21.999-16.243-33.509-32.288-33.509zm-405.264 192.569v-375.577h91.625c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-121.37c-1.463 0-2.7-1.223-2.7-2.671v-26.613c0-14.991 12.235-27.187 27.275-27.187h289.979c-5.451 7.69-8.656 17.071-8.656 27.187v26.614c0 1.448-1.236 2.671-2.7 2.671h-91.823c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h91.823c12.517 0 22.7-10.169 22.7-22.668v-26.615c0-14.991 12.235-27.187 27.274-27.187s27.274 12.196 27.274 27.187v214.905c-1.349.421-2.677.918-3.965 1.512-4.56-14.464-17.636-21.965-30.582-21.965-4.176 0-8.362.779-12.274 2.321v-56.306c0-21.999-16.235-33.51-32.273-33.51-16.039 0-32.274 11.51-32.274 33.51v144.491c0 4.551.083 8.701.155 12.363.009.395.017.795.024 1.196l-23.244-24.919c-13.541-14.495-33.12-15.982-47.611-3.614-14.26 12.171-20.829 36.126-4.917 56.547l69.408 89.083c3.301 4.236 6.733 8.204 10.273 11.915h-240.721c-1.464 0-2.7-1.223-2.7-2.67zm417.552-97.98c.318 54.464-26.434 99.007-68.153 113.478-35.294 12.24-72.857-1.601-100.474-37.033l-69.407-89.082c-8.278-10.624-5.084-22.896 2.124-29.047 1.682-1.435 4.901-3.608 8.969-3.608 3.253 0 7.05 1.389 11.037 5.657l24.351 26.106c6.873 7.362 15.42 16.525 24.899 12.683 7.551-3.063 8.254-11.597 8.485-14.401.317-3.857.222-8.646.101-14.709-.07-3.568-.151-7.612-.151-11.964v-144.492c0-12.861 10.225-13.512 12.274-13.512s12.273.651 12.273 13.512v143.16c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-55.665c0-12.861 10.225-13.512 12.274-13.512 3.235 0 6.323 1.155 8.47 3.171 2.524 2.368 3.804 5.847 3.804 10.342v55.665c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-36.733c0-12.87 10.218-13.522 12.267-13.522 3.236 0 6.325 1.157 8.475 3.173 2.526 2.371 3.807 5.852 3.807 10.348v36.733c0 5.522 4.478 9.999 10 9.999s10-4.477 10-9.999v-17.828c0-12.86 10.236-13.511 12.288-13.511 3.24 0 6.333 1.156 8.482 3.172 2.525 2.367 3.806 5.846 3.806 10.339v61.08z" /><path d="m201.721 142.218c0 5.522 4.477 9.999 10 9.999h80.032c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-80.032c-5.523 0-10 4.477-10 9.999z" /><path d="m274.764 189.557h-63.043c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h63.043c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999z" /><path d="m112.141 266.92h152.736c5.522 0 10-4.477 10-9.999s-4.478-9.999-10-9.999h-152.736c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z" /><path d="m112.141 324.258h82.391c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-82.391c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z" /><path d="m112.141 381.624h72.561c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999h-72.561c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999z" /><path d="m218.596 418.964h-106.455c-5.523 0-10 4.477-10 9.999s4.477 9.999 10 9.999h106.455c5.523 0 10-4.477 10-9.999s-4.477-9.999-10-9.999z" /><path d="m200.072 96.467h.057c5.523 0 9.972-4.477 9.972-9.999s-4.505-9.999-10.028-9.999-10 4.477-10 9.999 4.476 9.999 9.999 9.999z" /></g></g></svg>
                                    Click here to see the format of csv file
                            </p>
                                {/* Modal */}
                                {/* <!-- Central Modal Medium Info --> */}
                                <div className="modal fade" id="centralModalInfo" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                    aria-hidden="true">
                                    <div className="modal-dialog modal-notify modal-info" role="document">
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
                                                                    <iframe id="player" className="embed-responsive-item" src="https://www.youtube.com/embed/7MUISDJ5ZZ4" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen title="how to train"></iframe>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <h3 className="font-weight-bold text-center dark-grey-text pb-2">Two Easy Steps</h3>
                                                    <hr className="w-header my-4" />
                                                    <p className="lead text-center text-muted pt-2 mb-5">Sample data</p>

                                                    <div className="row align-items-center">

                                                        <div className="">
                                                            <div className="view z-depth-1-half rounded">
                                                                <img className="rounded img-fluid" src="https://res.cloudinary.com/dt5rqi1l9/image/upload/v1599627044/Screen_Shot_2020-09-09_at_12.46.01_PM_f4nfcd.png" alt="Video title" />

                                                            </div>
                                                        </div>

                                                        <div className="">

                                                            <ol className="step pl-0">
                                                                <li className="step-element pb-0">
                                                                    <div className="step-number">
                                                                        <span className="number">1</span>
                                                                    </div>
                                                                    <div className="step-excerpt">
                                                                        <h6 className="font-weight-bold dark-grey-text mb-3">Create</h6>
                                                                        <p className="text-muted">Create your data, make sure it has 2 columns: description and category. Categories have to be followed this
                                                                    <span className="font-weight-bold list-cat" data-toggle="modal" data-target="#centralModalInfo-1"> list categories</span></p>
                                                                    </div>
                                                                </li>

                                                                <li className="step-element pb-0">
                                                                    <div className="step-number">
                                                                        <span className="number">2</span>
                                                                    </div>
                                                                    <div className="step-excerpt">
                                                                        <h6 className="font-weight-bold dark-grey-text mb-3">Save / Export</h6>
                                                                        <p className="text-muted">Save and export it as csv file</p>
                                                                    </div>
                                                                </li>
                                                            </ol>
                                                            {/* <!-- Central Modal Medium Info --> */}
                                                            <div className="modal fade right" id="centralModalInfo-1" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel"
                                                                aria-hidden="true">
                                                                <div className="modal-dialog modal-full-height modal-right modal-notify modal-info" role="document">
                                                                    {/* <!--Content--> */}
                                                                    <div className="modal-content">
                                                                        {/* <!--Header--> */}
                                                                        <div className="modal-header">
                                                                            <p className="heading lead">List Categories</p>

                                                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                                                                <span aria-hidden="true" className="white-text">&times;</span>
                                                                            </button>
                                                                        </div>

                                                                        {/* <!--Body--> */}
                                                                        <div className="modal-body">
                                                                            <div className="card">

                                                                                <div className="card-header white-text primary-color">
                                                                                    Expense Categories</div>

                                                                                <div className="card-body text-center px-4 expense-cat" >
                                                                                    <div className="list-group list-group-flush">
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text">
                                                                                            <span className="material-icons">fastfood</span>Food & Drink
                                                                                        </a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">home</span>House</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">directions_bus</span>Transportation</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">flight_takeoff</span>Travel</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">shopping_cart</span>Groceries</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">live_tv</span>Entertainment</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">sports_handball</span>Sports</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">medical_services</span>Medical</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">school</span>Education</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">shopping_bag</span>Shopping</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">offline_bolt</span>Utilities</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">loyalty</span>Donations</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">subject</span>Other</a>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <hr></hr>
                                                                            <div className="card">

                                                                                <div className="card-header white-text primary-color">
                                                                                    Income Categories</div>

                                                                                <div className="card-body text-center px-4 expense-cat" >
                                                                                    <div className="list-group list-group-flush">
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text">
                                                                                            <span className="material-icons">emoji_events</span>Award</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">card_giftcard</span>Gift</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">business_center</span>Salary</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">local_atm</span>Selling</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">emoji_symbols</span>Money Interest</a>
                                                                                        <a href="/" className="list-group-item d-flex justify-content-between dark-grey-text"><span className="material-icons">subject</span>Other</a>

                                                                                    </div>
                                                                                </div>
                                                                            </div>
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
                                                            <hr className="w-header my-4" />
                                                            <p className="lead text-center text-muted pt-2 mb-5">Now your file is ready to be imported</p>
                                                        </div>

                                                    </div>
                                                </section>

                                            </div>

                                            {/* <!--Footer--> */}
                                            <div className="modal-footer justify-content-center">
                                                <a href= "/" type="button" className="btn btn-outline-primary waves-effect" data-dismiss="modal">Get it</a>
                                            </div>
                                        </div>
                                        {/* <!--/.Content--> */}
                                    </div>
                                </div>
                                {/* <!-- Central Modal Medium Info--> */}
                                {/* end modal */}
                                <h3 className="font-weight-bold my-3">Import your training data file</h3>

                                <p className="text-muted mb-4 pb-2">This app can learn more to support you in categorizing your transactions </p>
                                <small className="form-text"><strong>* Just accept .csv file</strong></small>
                                <div className="input-group">
                                    <input type="file" className="form-control" name="file" onChange={handleChange} required />
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

export default Traning

