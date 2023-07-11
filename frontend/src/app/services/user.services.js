import { api } from './api.js'

export const getAllUsers = async () => {
  try {
    const { data } = await api.get("/profile")
    return data
  } catch (err) {
    return false
  }
};

export const getOneUserbyEmail = async (email) => {
  try {
    const {data} = await api.get(`/profile/email/:${email}` ,{
      headers: {
        token: localStorage.getItem('token'),
      },
        })
    return data
  } catch (error) {
    return ('An error ocurred!')
  }
} 