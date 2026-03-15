import { credentials } from "@/types/types";
import axios from "axios";



export async function loginUser(credentials: credentials) {
    // Implementasi login menggunakan Axios
    const response = await axios.post("/api/auth/login", credentials);
    return response.data;
}

export const getUser = async () => {
    const response = await axios.get('/api/auth/user')
    return response.data.data
}
