import axios from 'axios'

function api() {
    return axios.create({
        baseURL: `http://localhost:3001/`
    })
}

export default api
