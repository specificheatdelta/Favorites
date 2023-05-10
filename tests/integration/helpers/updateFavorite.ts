// create function to update existing favorite
//

import axios from "axios"

export const update = async (url: string, data = {}) => {
    return axios.put(url, data), { headers: { 'Content-Type': 'application/json' } }
}