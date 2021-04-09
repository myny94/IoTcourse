import React, { useState, useEffect } from 'react'
import { LoginForm } from './components'
import './style.css'

export const App = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {

  }, [])

  return (
    <div>
      {user === null ? (
        <LoginForm
          className="form"
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
          setUser={setUser}
          setMessage={setMessage}
        />
      ) : (
        <div>
          logged-in
          {message}
        </div>
      )}
    </div>
  )
}