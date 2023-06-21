import axios from 'axios'
export const baseURL = 'http://192.168.0.117:8000'

const instance = axios.create({
    // baseURL: 'http://127.0.0.1:8000/api/v1',
    baseURL: baseURL+'/api/v1',
    headers: {
        Accept: 'application/json'
    }
})

export default instance