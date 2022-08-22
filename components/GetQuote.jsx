import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

const GetQuote = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [address, setAddress] = useState(null)
    const [details, setDetails] = useState('')

    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        setErrorMsg('')
        setSuccessMsg('')

        if (!name || !email || !phone || !details) {
            setErrorMsg("Please fill all required fields!")
            setLoading(false)
            return;
        }
        let url = API_URL + '/api/quotes'
        let payload = {
            name, email, phone, address, details
        }
        axios.post(url, payload)
        .then(response => {
            let _data = response.data
            console.log(_data)
            if (_data === 1) {
                setSuccessMsg(`Thank You ${name.toUpperCase()}! We will respond shortly via email.`) 
            } else {
                setSuccessMsg(_data)
            }
        })
        .catch(error => {
            console.error('An error occurred! ', error)
            setErrorMsg('Something went wrong! Check your network and try again.')
        })
        setLoading(false)

        return ;
    }

  return (
    <section className='w-100 px-4 py-5' id='get-quote'>
        <div className="container quote-form-wrapper m-auto rounded shadow p-4" style={{width: '100%', maxWidth: '600px', borderRadius: '20px'}}>
            <div className="quote-heading h3 fw-bolder text-center">Tell Us What You Need...</div>
            <div className="quote-form">
                {successMsg && <Alert variant='success' onClose={() => setSuccessMsg('')} dismissible>{successMsg}</Alert> }
                {errorMsg && <Alert variant='warning' onClose={() => setErrorMsg('')} dismissible>{errorMsg}</Alert> }
                <form onSubmit={handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="quote-name">Name</label><span className="text-danger">*</span>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} id="quote-name" className="form-control mt-2" placeholder='company/personal name' required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="quote-email">Email</label><span className="text-danger">*</span>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} id="quote-email" className="form-control mt-2" placeholder='your email' required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="quote-phone">Mobile No.</label><span className="text-danger">*</span>
                        <input type="text" value={phone} onChange={e => setPhone(e.target.value)} id="quote-phone" className="form-control mt-2" placeholder='your mobile number' required/>
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="quote-address">Address</label>
                        <input type="text" value={address} onChange={e => setAddress(e.target.value)} id="quote-address" className="form-control mt-2" placeholder='business address (optional)' />
                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="quote-details">Quote details</label><span className="text-danger">*</span>
                        <textarea id="quote-details" value={details} onChange={e => setDetails(e.target.value)} rows="5" className="form-control mt-2" placeholder='write the details of your quote...' required></textarea>
                    </div>
                    <div className="form-group mb-3 text-center">
                        <input type="submit" value="Send Quote" className="btn btn-lg m-3" />
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default GetQuote