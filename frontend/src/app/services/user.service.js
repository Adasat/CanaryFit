import { api } from './api.js'

export const getAllUsers = async () => {
  try {
    const { data } = await api.get("/profile")
    console.log(data)
    return data
  } catch (err) {
    return false
  }
};