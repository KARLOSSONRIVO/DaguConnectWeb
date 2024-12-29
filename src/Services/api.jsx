import axios from "axios";

const API = axios.create({baseURL:"http://127.0.0.1:8000/api/"});

export const login = async (credentials) => {
    try {
        const response = await API.post("admin/login", credentials);
     
        return response; // Ensure the response object is returned
    } catch (error) {
        console.error("API error:", error.response?.data || error.message);
        throw error; // Rethrow the error so it can be handled in the calling code
    }
};


export const fetchUser = () => API.get("/admins",{
    headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
    }
})

export default API;