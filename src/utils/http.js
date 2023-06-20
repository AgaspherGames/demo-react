import axios from 'axios'

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api/v1',
    baseURL: 'http://192.168.0.111:8000/api/v1',
    headers: {
        Accept: 'application/json'
    }
})

export default instance