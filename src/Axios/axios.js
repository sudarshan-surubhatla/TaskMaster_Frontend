// axios.js
import axios from "axios"
const instance = axios.create({
    baseURL:"https://taskmaster-backend-j9i6.onrender.com/api"
})
export default instance
