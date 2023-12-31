import { api} from './api.js'

export const userLogin = async (email, password) => {
  try {
    const { data } = await api.post("/auth/login", { email: email, password: password})
    window.localStorage.setItem("token", data.userDetails.token)
    window.localStorage.setItem("email", email)
    return true
  } catch (err) {
    return false
  }
};

export const signupUser = async (
  firstname,
  lastname,
  email,
  password,
  height,
  weight,
  weightTarget
) => {
  try {
    await api.post('/auth/signup', {
      firstname: firstname,
      lastname: lastname,
      email: email,
      password: password,
      height: height,
      weight: weight,
      weightTarget: weightTarget,
    })
    return true
  } catch (err) {
    return err
  }
}
