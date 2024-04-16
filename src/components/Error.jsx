import React from 'react'

const Error = ({ error, resetErrorBoundary }) => {
    return <>
        <p className='text-red-500'>{error.message}</p>
        <button onClick={resetErrorBoundary} className='btn btn-primary'>Retry</button>
    </>
}

export default Error