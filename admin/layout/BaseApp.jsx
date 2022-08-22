import React, { useEffect, useState} from 'react'
import useWindowSize from '../../hooks/useWindowSize';
import MinimumWidthAlert from '../../components/MinimumWidthAlert';
import Sidebar from '../../components/Sidebar';
import { Outlet, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthProvider';
import '../../index.css';
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

const DashboardHeader = ({user}) => {
    // const dashboardHeaderStyle = {
    //     height: '10vh'
    // }
    return (
        <div className='bg-secondary p-4 sticky-top d-flex justify-content-between align-items-center'>
            <span className='h3 fw-bold text-white'>Site Admin Dashboard</span>
            <span className='fw-light text-white'>Admin: {user?.name ?? '_________'}</span>
        </div>
    );
}

const FailedToRetrieveData = () => {
    return (
        <div className="container text-center p-4 w-100">
            <div className="shadow rounded p-4">
                <div className="h1 fw-bold mb-3 m-auto" style={{color: '#c2c2c2'}}>Failed to retrieve data!</div>
                <div className="h4 fw-light mb-3 m-auto" style={{color: '#a0a0a0'}}>Please check your network and refresh the page.</div>
            </div>
        </div>
    )
}

const AppMains = ({user, display}) => {
    return (
        <div className="dashboard-wrapper" style={dashboardWrapperStyle}>
            <div className="sidebar bg-dark" style={sidebarStyle}>
                <Sidebar />
            </div>
            <div className="dashboard-mains" style={dashboardMainStyle}>
                <div className="dashboard-header">
                    <DashboardHeader user={user} />
                </div>
                <div>
                    {display ? <Outlet /> : <FailedToRetrieveData />}
                </div>
            </div>
        </div>
    )
}

const MenuToggle = ({open, setOpen}) => {
    return (
        <button className="btn-secondary d-none px-3 py-2 border-0 rounded-0" onClick={() => setOpen(!open)} style={{position: 'fixed', top: 90, left: 20}}>
            {open ? 'Close': 'Open'}
        </button>
    );
}

const BaseApp = () => {
    // window width state
    const [width, height] = useWindowSize();
    const [open, setOpen] = useState(true);
    const [display, setDisplay] = useState(true);
    console.log(width, height);

    // track user details
    const [user, setUser] = useState({})

    const navigate = useNavigate()
    const { getCurrentUser, logout } = useAuth()
    const currentUser = getCurrentUser()

    useEffect(() => {
        if (!currentUser) {
            navigate('/login')
            return;
        }

        // get user details with authorization token
        async function getUserDetails() {
            const token = currentUser?.token
            let apiConfig = {
                headers: {
                    'Authorization': 'Bearer '+ token,
                },
            }
            try {
                const response = await axios.get(API_URL + '/getUser.php', apiConfig)
                const { success } = response.data

                // if token timed-out i.e success == 0, notify user and redirect to login
                if (!success || success === 0) {
                    console.log(response.data?.message)
                    alert(response.data?.message + '. Redirecting to login...')
                    logout()
                    setTimeout(() => navigate('/login'), 3000)
                } else {
                    setUser(response.data.user)
                    console.log(user)
                }
            } catch (error) {
                setDisplay(false);
                console.log('Error: ',error.message)
            }
        }

        getUserDetails();
    }, [currentUser, logout, navigate, user])

    return (
        <>
            <MenuToggle open={open} setOpen={setOpen} />
            { (width < 800) 
                ? <MinimumWidthAlert />
                : <AppMains user={user} display={display} />
            }
            
        </>
    )
}


export default BaseApp;

const dashboardWrapperStyle = {
    display: 'inline-block',
    position: 'relative',
    width: '100%',
    boxSizing: 'border-box'
}

const sidebarStyle = {
    float: 'left',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '20%',
    height: '100vh'
}

const dashboardMainStyle = {
    float: 'right',
    width: '80%',
}
