import Axios from 'axios'

const Http = Axios.create({
    baseURL: "https://localhost:44393/api/",
    setTimeout: 60000
})

export default Http
