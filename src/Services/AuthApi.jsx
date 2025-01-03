import axios from "axios";


const API_URL = import.meta.env.API_BASE_URL;

const API_client = axios.create({
    baseURL: "http://127.0.0.1:8000/",
    header: {
        'Content-Type': 'application/json'
    },
})


export const loginUser = async (username, password) => {
    const response = await API_client.post("api/admin/login",{username, password})
    return response.data
}

export const getUserDetails = async () => {
    const token =localStorage.getItem("token");
    if (!token) throw new Error("No token found")
    const response = await API_client.get("/api/admin", {
        headers: {
            Authorization: `Bearer ${token}`
        }})
        return response.data
}