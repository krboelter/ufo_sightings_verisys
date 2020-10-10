import axios from 'axios'

function api() {
    return axios.create({
        baseURL: `http://localhost:5000/`
    })
}

export default api
