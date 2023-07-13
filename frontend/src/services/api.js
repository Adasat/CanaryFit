
import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:27020/api',
  timeout: 3000
})

export const api2 = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  timeout: 5000
})
