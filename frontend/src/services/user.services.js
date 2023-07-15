import { api } from './api.js'

export const getAllUsers = async () => {
  try {
    const { data } = await api.get("/profile/all")
    return data
  } catch (err) {
    return false
  }
};

export const getOneUserbyEmail = async () => {
  try {
    const {data} = await api.get(`/profile/email/` ,{
      headers: {
        token: window.localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.log(error)
    return ('An error ocurred!')
  }
} 

export const getOneUserbyId = async () => {
  try {
    const { data } = await api.get('/profile/', {
      headers: {
        token: window.localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return 'An error ocurred!'
  }
} 