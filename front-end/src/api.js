import axios from 'axios';

const api = axios.create({
    baseURL: "https://6086fb95a3b9c200173b75bb.mockapi.io/music"
})

export default api;