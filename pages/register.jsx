import React, { useState, useEffect } from 'react'
import { Container, Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthProvider';
import Link from 'next/link'

const RegisterComponent = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const { getCurrentUser, register } = useAuth()
    const currentUser = getCurrentUser()
    const navigate = useNavigate()

    useEffect(() => {
        // check if user exists
        if (currentUser) {
            console.log(currentUser)
        }
    }, [currentUser])

    const handleRegister = async (e) => {
        e.preventDefault()
        // confirm passwords match
        if (password !== confirmPassword){
            setErrMsg('Passwords do not match!')
            return null;
        }

        // call register api
        try {
            const data = await register(name, email, password)
            console.log(data)
            navigate('/login')
            return ;
        } catch (error) {
            console.log(error.message)
        }

        return null
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center p-5'>
            <div className="form-wrapper rounded shadow p-4" style={{width: '400px', maxWidth: '100%',}}>
                <div className="container login-heading h3 px-4 text-center">Login as Admin</div>
                <Container className=''>
                    <form onSubmit={handleRegister}>
                        {successMsg && <Alert variant='success' onClose={() => setSuccessMsg('')} dismissible>{successMsg}</Alert> }
                        {errMsg && <Alert variant='warning' onClose={() => setErrMsg('')} dismissible>{errMsg}</Alert> }
                        <div className="form-group mb-3">
                            <label htmlFor="login-email">Name</label>
                            <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control" id="login-email" placeholder='email' required/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="login-email">Email</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="login-email" placeholder='email' required/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="login-pswd">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="login-pswd" placeholder='password' required/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="login-confirm-pswd">Confirm password</label>
                            <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="form-control" id="login-confirm-pswd" placeholder='confirm password' required/>
                        </div>
                        <div className="form-group mb-3 text-center">
                            <input type="submit" value="Login" className="btn btn-lg" />
                        </div>
                        <div className="text-center">
                            <span>Already signed up? <a href="mailto:divine10646@gmail.com" className='text-dark'>Login</a> </span><br/>
                            <span>Not a site admin? <Link href="/" className='text-dark'>Go to home</Link> </span><br/>
                        </div>
                    </form>
                </Container>
            </div>
        </Container>
    )
}

const Register = () => {
  return (
    <>
    <PreHeader />
    <Header />
    <RegisterComponent />
    <Footer />
    </>
  )
}

export default Register