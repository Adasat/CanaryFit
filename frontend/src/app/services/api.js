
import axios from "axios";

export const api = axios.create({
    baseURL: process.env.DB_CONN,
    timeout: 3000
})
