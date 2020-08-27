import React from 'react'
import { usePromiseTracker } from 'react-promise-tracker'
import ReactLoading from 'react-loading'

export default function Loader(props) {
    const { promiseInProgress } = usePromiseTracker()
    return (
        promiseInProgress ? <ReactLoading 
            type={'Spinning Bubbles'} 
            color={'grey'} 
            width={'100%'} 
            height={'100%'}/> :
        <div>{props.children}</div>
    )
}