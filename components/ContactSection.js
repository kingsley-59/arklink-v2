import axios from 'axios'
import React, { useState } from 'react'
import { Alert } from 'react-bootstrap'
import Image from 'next/image'
import photo from '/public/assets/images/black-man-white-shirt.png'

const API_URL = process.env.REACT_APP_API_URL;

const ContactForm = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')

    const [errorMsg, setErrorMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const [loading, setLoading] = useState(false)
    const handleContactForm = (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorMsg('')
        setSuccessMsg('')

        if (!name || !email || !message) {
            setErrorMsg("Please fill all required fields!")
            return;
        }
        let url = API_URL + '/api/messages'
        let payload = {
            name, email, message
        }
        axios.post(url, payload)
        .then(response => {
            let _data = response.data
            console.log(_data)
            if (_data === 1) {
                setSuccessMsg('Message sent successfully!')
            } else {
                setSuccessMsg(_data)
            }
        })
        .catch(error => {
            console.error(error)
            setErrorMsg('Something went wrong! Check your network and try again.')
        })
        setLoading(false)
    }
    return (
        <div className="site-section text-center">
            <div className="form-wrapper m-auto" style={{maxWidth: '400px'}}>
                {successMsg && <Alert variant='success'>{successMsg}</Alert>}
                {errorMsg && <Alert variant='warning'>{errorMsg}</Alert>}
                <div className="form-heading h5 fw-bolder text-green mb-4">Get In Touch</div>
                <form onSubmit={handleContactForm}>
                    <div className="form-group mb-3">
                        <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" placeholder='tell us your name' required/>
                    </div>
                    <div className="form-group mb-3">
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} name="" id="" className="form-control" placeholder='your email' required/>
                    </div>
                    <div className="form-group mb-3">
                        <textarea value={message} onChange={e => setMessage(e.target.value)} rows="3" className="form-control" placeholder='write your message' required></textarea>
                    </div>
                    <div className="form-group mt-4">
                        <input type="submit" value={loading ? 'Sending...' : 'Send message'} className="btn" />
                    </div>
                </form>
            </div>
        </div>
    )
}


const ContactSection = () => {
  return (
    <div className="container-fluid" style={{backgroundColor: '#eee'}}>
        <div className="row">
            <div className="col-md-6">
                <ContactForm />
            </div>
            <div className="col-md-6 contact-image">
                <div className="image-wrapper w-100 h-100">
                    <Image src={photo} alt="" className='w-100 h-100' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ContactSection