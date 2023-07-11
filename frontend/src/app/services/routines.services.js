import { api } from "./api";

export const getAllPublicRoutines = async () => {
    try {
        const {data} = await api.get('/routine', {
             headers: {
        token: localStorage.getItem('token'),
      },
        })
        return data
        
    } catch (error) {
        return 'An error ocurred!'
    }
}