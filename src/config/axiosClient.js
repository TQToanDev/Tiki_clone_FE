import axios from 'axios';

// process.env.REACT_APP_BASE_URL ||

const baseURL = 'http://localhost:3000';

const axiosCline = axios.create({
    baseURL: `${baseURL}/api`,
    headers: {
        Accept: 'application/json',
        'Content-type': 'application/json',
    },
});

axiosCline.interceptors.response.use(
    function (res) {
        return res.data;
    },
    function (err) {
        return Promise.reject(err);
    },
);

export default axiosCline;
