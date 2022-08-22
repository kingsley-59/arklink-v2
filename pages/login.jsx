import React, { useState, useEffect } from 'react';
import { Container, Alert } from 'react-bootstrap';
import Router, { useRouter } from 'next/router'
import Header from '../components/Header';
import PreHeader from '../components/PreHeader';
import Footer from '../components/Footer';
import { useAuth } from '../context/AuthProvider';
import Link from 'next/link';

// test login creds
// {
//     "email": "johndoe@gmail.com",
//     "password": "password123"
// }

const LoginComponent = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [errMsg, setErrMsg] = useState('')
    const [successMsg, setSuccessMsg] = useState('')

    const { getCurrentUser, login } = useAuth()
    const currentUser = getCurrentUser
    const router = useRouter()

    useEffect(() => {
        // check if user exists
        if (currentUser) {
            console.log(currentUser)
        }
    }, [currentUser])

    const handleLogin = async (e) => {
        e.preventDefault()
        // validate user inputs

        // call login api
        try {
            const data = await login(email, password)
            console.log(data)
            router.push('/admin')
            return ;
        } catch (error) {
            console.log(error.message)
            setErrMsg(error.message + '!')
        }
        
        return null
    }

    return (
        <Container className='d-flex flex-column justify-content-center align-items-center p-5'>
            <div className="form-wrapper rounded shadow p-4" style={{width: '400px', maxWidth: '100%',}}>
                <div className="container login-heading h3 px-4 text-center">Login as Admin</div>
                <Container className=''>
                    <form onSubmit={handleLogin}>
                        {successMsg && <Alert variant='success' onClose={() => setSuccessMsg('')} dismissible>{successMsg}</Alert> }
                        {errMsg && <Alert variant='warning' onClose={() => setErrMsg('')} dismissible>{errMsg}</Alert> }
                        <div className="form-group mb-3">
                            <label htmlFor="login-email">Email</label>
                            <input type="text" value={email} onChange={e => setEmail(e.target.value)} className="form-control" id="login-email" placeholder='email' required/>
                        </div>
                        <div className="form-group mb-3">
                            <label htmlFor="login-pswd">Password</label>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)} className="form-control" id="login-pswd" placeholder='password' required/>
                        </div>
                        <div className="form-group mb-3 text-center">
                            <input type="submit" value="Login" className="btn btn-lg" />
                        </div>
                        <div className="text-center">
                            <span>Forgot password? <a href="mailto:divine10646@gmail.com" className='text-dark'>Click here</a> </span><br/>
                            <span>Not a site admin? <Link href="/" className='text-dark'>Go to home</Link> </span><br/>
                        </div>
                    </form>
                </Container>
            </div>
        </Container>
    )
}

const Login = () => {
  return (
    <>
    <PreHeader />
    <Header />
    <LoginComponent />
    <Footer />
    </>
  )
}

export default Login