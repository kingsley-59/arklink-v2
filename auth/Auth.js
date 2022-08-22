import axios from "axios";

const API_URL = process.env.REACT_APP_API_URL;
// const API_URL = 'http://localhost:8000/'

class Auth {
    async login(email, password) {
        try {
            const response = await axios.post(API_URL + '/login.php', { email, password });
            if (response.data.token) {
                let userDetail = {
                    email: response.data.email,
                    token: response.data.token,
                }
                localStorage.setItem('user', JSON.stringify(userDetail));
            }
            return response.data;
        } catch (error) {
            //throw new Error('Http request failed')
            throw new Error(error.message)
        }
    }

    async verifyPassword(email, password) {
        try {
            const response = await axios.post(API_URL + '/login.php', { email, password });
            if (response.data.success === 1) {
                return true
            }
            return false;
        } catch (error) {
            //throw new Error('Http request failed')
            throw new Error(error.message)
            return false;
        }
    }

    async register(name, email, password) {
        const response = await axios.post(API_URL + 'register.php', {name, email, password});
        return response.data;
    }

    getCurrentUser() {
        return JSON.parse(localStorage.getItem('user'));
    }

    logout() {
        localStorage.removeItem('user');
    }
}

export const {login, register, verifyPassword, getCurrentUser, logout} = new Auth();

// export default new Auth();
// export default {
//     login, register, getCurrentUser, logout
// };