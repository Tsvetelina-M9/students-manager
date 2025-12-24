import axios from "axios"

const baseUrl = 'https://students-manager-dev.azurewebsites.net/api';

export const Login = async (loginRequest) => {
    const response = await axios.post(`${baseUrl}/login`, loginRequest);
    return response.data;
};