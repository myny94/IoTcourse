import React from 'react'
import blogService from './services'
import userImg from '../images/user.svg'

export const LoginForm = ({
  username,
  setUsername,
  password,
  setPassword,
  setUser,
  setMessage,
}) => {
  const handleLogin = async (event) => {
    event.preventDefault()
    try {
      const user = await blogService.login({
        username: username,
        password: password,
      })
      setUser(user.data)
      setUsername('')
      setPassword('')
    } catch (exception) {
      setUser(null)
      setMessage('Wrong credentials')
      setTimeout(() => {
        setMessage(null)
      }, 5000)
    }
  }

  return (
    <form data-testid='Login_form' onSubmit={handleLogin}>
      <h1>Welcome back!</h1>
      <img className='loginIcon' src={userImg} alt='user' />
      <h2>Member login</h2>
      <div className="usernameInput">
        username
        <input
          data-testid='Login_username'
          type='text'
          value={username}
          style={{ marginLeft: 10 }}
          name='Username'
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div className="passwordInput">
        password
        <input
          data-testid='Login_password'
          type='password'
          value={password}
          style={{ marginTop: 10, marginLeft: 13, marginBottom: 10 }}
          name='Password'
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button
        data-testid='Login_submitButton'
        className='loginButton'
        type='submit'
      >
        sign in
      </button>
      <div className='loginText'>or</div>
      <button className='registerButton'>create account</button>
    </form>
  )
}
