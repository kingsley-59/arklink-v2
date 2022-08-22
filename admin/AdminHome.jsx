import React, { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useAuth } from '../context/AuthProvider';
import { Alert } from 'react-bootstrap';

const API_URL = process.env.REACT_APP_API_URL;

const AdminHome = () => {
  const [_phone, setPhone] = useState('')
  const [_email, setEmail] = useState('')
  const [whatsappNo, setWhatsappNo] = useState('')
  const [_address, setAddress] = useState('')
  const [address2, setAddress2] = useState('')
  const [facebookUrl, setFacebookUrl] = useState('')
  const [twitterUrl, setTwitterUrl] = useState('')
  const [instagramUrl, setInstagramUrl] = useState('')
  const [bannerHeading, setBannerHeading] = useState('')
  const [bannerText, setBannerText] = useState('')
  const [aboutEssay, setAboutEssay] = useState('')

  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)

  const {currentUser, verifyPassword} = useAuth();

  useEffect(() => {
    async function getSiteContents() {
      try {
        // get site content from api
        const {data} = await axios.get(API_URL + '/api/content');
        if (typeof data !== 'object') {
          setErrorMsg('Something went wrong! Please refresh this page.')
          return;
        }

        // set default values
        let {banner_heading, banner_text, about_essay, email, phone, facebook_url, instagram_url, twitter_url, whatsapp_no, address} = data
        setPhone(phone)
        setEmail(email)
        setWhatsappNo(whatsapp_no)
        setAddress(address)
        setFacebookUrl(facebook_url)
        setTwitterUrl(twitter_url)
        setInstagramUrl(instagram_url)
        setBannerHeading(banner_heading)
        setBannerText(banner_text)
        setAboutEssay(about_essay)
      } catch (error) {
          //throw new Error('Http request failed')
          throw new Error(error.message)
      }
    }

    getSiteContents();
  }, [])

  useEffect(() => {
    console.log(currentUser)
  }, [currentUser])

  const handleSiteSettings = async (e) => {
    e.preventDefault()

    let url = `${API_URL}/api/content`
    let data = {
      phone: _phone, 
      email: _email, 
      address: _address, 
      whatsappNo, facebookUrl, twitterUrl, instagramUrl, bannerHeading, bannerText, aboutEssay
    }

    console.log(data);

    // verify consent to save changed to website content
    const confirm = window.confirm('Please crosscheck your settings before saving.\nDo you still want to proceed?')
    if (confirm !== true) {
      return null;
    }

    // verify password to complete change request
    const confirmPassword = prompt(`Please confirm password for ${currentUser.email} to proceed!`)
    try {
      const isVerified = await verifyPassword(currentUser.email, confirmPassword)
      if (isVerified === true) {
        axios.post(url, data)
        .then(response => {console.log(response.data); setSuccessMsg('Site content updated successfully.')})
        .catch(error => console.error(error))
      } else {
        alert('Something went wrong! Please check the password and try again.')
      }
    } catch (error) {
      console.log(error.message)
      alert('Something went wrong! Please check the network and try again.')
    }
    
    return;
  }

  return (
    <div className="container w-100">
      <section className="site-settings p-4">
        <div className="site-settings-heading h3 p-4">Manage Site</div>
        {successMsg && <Alert variant='success'>{successMsg}</Alert>}
        {errorMsg && <Alert variant='error'>{errorMsg}</Alert>}
        <form onSubmit={handleSiteSettings}>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder">Contact Settings</div>
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="phone-no" className='mb-2'>Tel no.</label>
                <input type="tel" value={_phone} onChange={e => setPhone(e.target.value)} id="phone-no" className="form-control" required/>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="email-add" className='mb-2'>Email</label>
                <input type="email" value={_email} onChange={e => setEmail(e.target.value)} id="email-add" className="form-control" required/>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="address" className='mb-2'>Address <small>(head office)</small> </label>
                <input type="text" value={_address} onChange={e => setAddress(e.target.value)} id="address" className="form-control" required/>
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="address-2" className='mb-2'>Address 2 <small>(Branch office)</small></label>
                <input type="tel" value={address2} onChange={e => setAddress2(e.target.value)} id="address-2" className="form-control" required/>
              </div>
            </div>
          </div>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder">Site Settings</div>
            <div className="form-group mb-3">
              <label htmlFor="b-heading" className='mb-2'>Banner heading</label>
              <input type="text" value={bannerHeading} onChange={e => setBannerHeading(e.target.value)} id="b-heading" className="form-control" required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="b-text" className='mb-2'>Banner text</label>
              <input type="text" value={bannerText} onChange={e => setBannerText(e.target.value)} id="b-text" className="form-control" required/>
            </div>
            <div className="form-group mb-3">
              <label htmlFor="about-essay" className='mb-2'>About essay</label>
              <textarea type="text" value={aboutEssay} onChange={e => setAboutEssay(e.target.value)} id="about-essay" className="form-control" rows={4} required></textarea>
            </div>
          </div>

          <div className="group-wrapper rounded shadow-sm p-4 mb-4">
            <div className="fw-bolder">Company Socials</div>
            <div className="row">
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="facebook-url" className='mb-2'>Facebook url</label>
                <input type="text" value={facebookUrl} onChange={e => setFacebookUrl(e.target.value)} id="facebook-url" className="form-control" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="twitter-url" className='mb-2'>Twitter url</label>
                <input type="text" value={twitterUrl} onChange={e => setTwitterUrl(e.target.value)} id="twitter-url" className="form-control" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="instagram-url" className='mb-2'>Instagram url</label>
                <input type="text" value={instagramUrl} onChange={e => setInstagramUrl(e.target.value)} id="instagram-url" className="form-control" />
              </div>
              <div className="col-md-6 col-sm-12 mb-3">
                <label htmlFor="whatsapp-no" className='mb-2'>Whatsapp no.</label>
                <input type="text" value={whatsappNo} onChange={e => setWhatsappNo(e.target.value)} id="whatsapp-no" className="form-control" />
              </div>
            </div>
          </div>

          <div className="container text-center">
            <input type="submit" value="Save changes" className="btn btn-large" />
          </div>
        </form>
      </section>
    </div>
  )
}

export default AdminHome

const sectionWrapper = {
  minHeight: '60vh',
  width: '100%',
  backgroundColor: '#efefff'
}