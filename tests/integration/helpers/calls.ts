import axios from 'axios'

export const get = async (url: string) => {
    return axios.get(url), { headers: { 'Content-Type': 'application/json' } }
}

export const post = async (url: string, data = {}) => {
    return axios.post(url, data), { headers: { 'Content-Type': 'application/json' } }
}

