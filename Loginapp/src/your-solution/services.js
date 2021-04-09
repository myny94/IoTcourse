import axios from 'axios'

const loginUrl = '/api/login'

const login = (newUser) => {
  return axios.post(loginUrl, newUser)
}

export default { login }
