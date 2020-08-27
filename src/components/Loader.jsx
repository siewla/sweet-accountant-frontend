import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import ReactLoading from 'react-loading'

export default function Loader(props) {
    const { promiseInProgress } = usePromiseTracker()
    return (
        promiseInProgress ? <ReactLoading 
            type={'spokes'} 
            color={'grey'}
            /> :
        <div>{props.children}</div>
    )
}