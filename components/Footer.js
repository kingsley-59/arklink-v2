import React, {useEffect, useState} from 'react'
import axios from 'axios'

const API_URL = process.env.REACT_APP_API_URL;

const CompanyDetails = ({data}) => {
    const defaultAddress = "20 Ada George Road Port Harcourt"
    const defaultPhone = '08033101164'
    const defaultWhatsapp = '+2349084760012'
    const defaultEmail = 'louisakahibe28@gmail.com'

    return (
        <div className='text-white mb-4'>
            <span><strong>Head Office:</strong> {data?.address ?? defaultAddress} </span><br/>
            <span>Nigeria.</span>
            <br/><br/>
            <span>Phone: {data?.phone ?? defaultPhone}</span><br/>
            <span>Whatsapp: {data?.whatsapp_no ?? defaultWhatsapp}</span><br/>
            <span>Email: {data?.email ?? defaultEmail}</span><br/>
        </div>
    )
}

const QuickLinks = () => {
    return (
        <div className='text-white mb-4'>
            <span className='text-bold'>Quicklinks:</span><br/>
            <a href="/home" className='text-white'><span>Home</span></a><br/>
            <a href="/about" className='text-white'><span>About</span></a><br/>
            <a href="/products" className='text-white'><span>Products</span></a><br/>
            <a href="/categories" className='text-white'><span>Categories</span></a><br/>
            <a href="/gallery" className='text-white'><span>Gallery</span></a><br/>
            <a href="/contact" className='text-white'><span>Contact</span></a><br/>
        </div>
    )
}

const Subscribe = () => {
    const [subscriberEmail, setSubscriberEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [btnText, setBtnText] = useState('Subscribe')
    
    const handleEmailSubscription = (e) => {
        e.preventDefault();
        setLoading(true);

        let url = `${API_URL}/api/subscribers`
        let payload = {
            email: subscriberEmail
        }
        axios.post(url, payload)
        .then(({data}) => {
            console.log(data)
            if (data === 1) {
                setBtnText('Success!')
                setTimeout(() => setBtnText('Subscribe'), 5000)
            } else {
                console.log(data)
            }
            return;
        })
        .catch(error => {
            alert('Something went wrong check your network and try again.')
            console.log('Error: ', error.message)
        })
        setLoading(false);
    }
    return (
        <div className='mb-4'>
            <p className='mb-2 text-white'>Subscribe to get updates:</p>
            <form onSubmit={handleEmailSubscription}>
                <div className="form-group mb-2">
                    <input type="email" value={subscriberEmail} onChange={e => setSubscriberEmail(e.target.value)} className="form-control" placeholder='write your email' required/>
                </div>
                <div className="form-group">
                    <input type="submit" value={btnText} className="btn btn-large" disabled={loading} />
                </div>
            </form>
        </div>
    )
}

const Footer = ({content}) => {

  return (
    <div className='site-section p-5 bg-primary'>
        <div className="text-white mb-4">
            <span className="lh-1"><span className='h1 fb-bold font-comfortaa'>Arklink</span><br/><small>Dealers on all kinds of building materials.</small></span>
        </div>
        <div className="row">
            <div className="col-lg-4 col-sm-12">
                <CompanyDetails data={content} />
            </div>
            <div className="col-lg-4 col-sm-12">
                <QuickLinks />
            </div>
            <div className="col-lg-4 col-sm-5 col-xs-12">
                <Subscribe />
            </div>
        </div>
        <hr />
        <div className="text-center" style={{height: 'fit-content'}}>
            <small className="text-secondary">Copyright &copy; 2022 | All rights reserved | <a href='/login' className='text-white'>Admin Login</a> </small>
        </div>
    </div>
  )
}

export default Footer