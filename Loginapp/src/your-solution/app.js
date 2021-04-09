import React, { useState, useEffect } from 'react'
import { LoginForm, RegisterForm, LoginSucceed } from './components'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import './style.css'

export const App = () => {

  useEffect(() => {

  }, [])

  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={() => <LoginForm setUser={setUser}/>} />
        <Route exact path='/register' component={RegisterForm} />
        <Route exact path='/user' render={() => <LoginSucceed user={user} setUser={setUser}/>} />
      </Switch>
    </BrowserRouter>
  )
}