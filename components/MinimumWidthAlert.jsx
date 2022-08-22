import React from 'react'
import { Alert } from 'react-bootstrap';

const MinimumWidthAlert = () => {
    return (
        <div className="alert-wrapper w-100 bg-secondary d-flex justify-content-center align-items-center" style={{minHeight: '90vh'}}>
            <div className="d-flex justify-content-center align-items-center p-4">
                <Alert variant='danger' className='text-dark'>Please use a desktop or PC for the best experience.</Alert>
            </div>
        </div>
    );
}

export default MinimumWidthAlert