import { api } from "./api"; 

export const addNewWeightRegister = async (newWeight) => {
  try {
    const {data} = await api.post('/progress', {
      weight: newWeight
    }, 
      {
        headers: {
          token: window.localStorage.getItem('token')
        }
      }
    )
    return data
  } catch (error) {
    console.log(error)
  }
}