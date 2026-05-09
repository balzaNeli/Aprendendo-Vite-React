import axios from "axios";

const api = axios.create({
    baseURL: 'aprendendo-a-criar-api-production.up.railway.app'
})


export default api