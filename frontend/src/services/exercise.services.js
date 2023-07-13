import { api, api2 } from './api'

export const getAllExercises = async () => {
  try {
    const { data } = await api.get('/exercise', {
      headers: {
        token: window.localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    console.log(error)
  }
}

/* export const gifExercises = async (name) => {
  try {
    const { data } = await api2.get(`/exercises/name/${encodeURI(name)}`, {
      headers: {
        'X-RapidAPI-Key': '62900b15damsh0dee4231343f7a5p173c96jsn7480923c43af',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      },
    })
    console.log(data[0])
    return data
  } catch (error) {
    console.log(error)
  }
} */
