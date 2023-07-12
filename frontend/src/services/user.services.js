import { api } from './api.js'

export const getAllUsers = async () => {
  try {
    const { data } = await api.get("/profile")
    return data
  } catch (err) {
    return false
  }
};

export const getOneUserbyEmail = async () => {
  try {
    const {data} = await api.get(`/profile/email/` ,{
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.log(error)
    return ('An error ocurred!')
  }
} 

export const getOneUserbyId = async (userId) => {
  try {
    const { data } = await api.get(`/profile/${userId}`, {
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return 'An error ocurred!'
  }
} 