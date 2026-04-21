import noviApiClient from "../../../services/noviApiClient";

export async function loginUser({ email, password }) {
    try {
        const response = await noviApiClient.post('/api/login', {
            email: email,
            password: password
        });
        return response.data;
    } catch (error) {
        if (error.response) {
            console.error('API error:', error.response.data)
            throw error.response.data;
        } else {
            console.error('Network error:', error.message)
            throw { message: 'Network error' };
        }
    }
}