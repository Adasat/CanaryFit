import { api } from './api'

export const getAllExercises = async () => {
  try {
    const { data } = await api.get('/exercise', {
      headers: {
        token: window.localStorage.getItem('token')
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

