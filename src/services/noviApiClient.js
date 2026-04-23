import axios from 'axios';

const noviApiClient = axios.create({
    "baseURL": import.meta.env.VITE_NOVI_DYNAMIC_API_BASE_URL,
    "headers": {
        "Content-Type": "application/json",
        "novi-education-project-id": import.meta.env.VITE_NOVI_DYNAMIC_API_KEY
    }
})

export default noviApiClient;