
import axios from 'axios'

export const api = axios.create({
  baseURL: 'mongodb+srv://pbonbol:Trabajo.90@canaryfit.jhlsoqo.mongodb.net/api',
  timeout: 3000
})

export const api2 = axios.create({
  baseURL: 'https://exercisedb.p.rapidapi.com',
  timeout: 5000
})
