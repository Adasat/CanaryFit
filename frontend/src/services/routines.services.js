import { api } from './api'

export const getAllPublicRoutines = async () => {
  try {
    const { data } = await api.get('/routine', {
      headers: {
        token: window.localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.log('An error ocurred!')
  }
}

export const getOneRoutineById = async (routineId) => {
  try {
    const { data } = await api.get(`/routine/${routineId}`, {
      headers: {
        token: window.localStorage.getItem('token'),
      }
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

export const addAFavRoutine = async (routineId) => {
  try {
    const { data } = await api.post(
      '/routine/remove',
      { routineId },
      {
        headers: {
          token: window.localStorage.getItem('token'),
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
export const deleteAFavRoutine = async (routineId) => {
  try {
    const { data } = await api.delete(
      '/routine/remove',
      { routineId },
      {
        headers: {
          token: window.localStorage.getItem('token'),
        },
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}
