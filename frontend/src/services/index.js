import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:3001/api/images/multi-upload'
})


export default API;