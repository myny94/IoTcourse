import axios from 'axios'

const loginUrl = '/api/login'
const registerUrl = '/api/users'

const login = (newUser) => {
  return axios.post(loginUrl, newUser)
}

const register = (newUser) => {
  const config = {
    headers: {
      'Content-Type': 'application/json',
    },
  }
  return axios.post(registerUrl, newUser, config)
}

export default { login, register }
