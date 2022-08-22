import { createContext, useState, useEffect, useContext } from 'react';
import {login, register, verifyPassword, logout, getCurrentUser} from '../auth/Auth';

export const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(false)
    const [siteData, setSiteData] = useState({})

    useEffect(() => {
        setLoading(true);
        const user = getCurrentUser()
        setCurrentUser(user);
        setLoading(false);
    }, [])

    const value = {
        currentUser,
        getCurrentUser,
        login,
        register,
        verifyPassword,
        logout
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}
