import React from "react"

const FailedToRetrieveData = () => {
    return (
        <div className="container text-center p-4 w-100">
            <div className="shadow rounded p-4">
                <div className="h1 fw-bold mb-3 m-auto" style={{color: '#c2c2c2'}}>Data Loading...</div>
                <div className="h4 fw-light mb-3 m-auto" style={{color: '#a0a0a0'}}>If this persists, please check your network and refresh the page.</div>
            </div>
        </div>
    )
}

export default FailedToRetrieveData