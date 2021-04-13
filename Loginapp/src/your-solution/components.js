import React from 'react'
import { useForm } from 'react-hook-form'
import blogService from './services'
import userImg from '../images/user.svg'
import dangerImg from '../images/triangle.svg'
import { Link, useHistory } from 'react-router-dom'
import firebase from "./firebase";

export const LoginForm = ({ setUser }) => {

  const history = useHistory()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onHandleLogin = async (event) => {
    try {
      const userInput = await blogService.login({
        username: event.username,
        password: event.password,
      })
      console.log(userInput.data)
      setUser(userInput.data)
      history.push('/user')
    } catch (exception) {
      console.log('error', exception)
      alert('Wrong credentials')
    }
  }

  return (
    <form onSubmit={handleSubmit(onHandleLogin)}>
      <h1>Welcome back!</h1>
      <img className='loginIcon' src={userImg} alt='user' />
      <h2>Member login</h2>
      <div className='usernameInput'>
        username
        <input
          className='inputField'
          type='text'
          {...register('username', { required: 'Username is required', })}
        />
        {errors.username && (
          <div className="errorMessage">
            <img src={dangerImg} alt='danger' className='dangerLogo'/>
            <p className='dangerText'>{errors.username.message}</p>
          </div>
        )}
      </div>
      <div className='passwordInput'>
        password
        <input
          className='inputField'
          type='password'
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <div className="errorMessage">
            <img src={dangerImg} alt='danger' className='dangerLogo'/>
            <p className='dangerText'>{errors.password.message}</p>
          </div>
        )}
      </div>
      <button
        data-testid='Login_submitButton'
        className='loginButton'
        type='submit'
      >
        sign in
      </button>
      <div className='loginText'>or</div>
      <Link className='registerButton' to={'/register'}> Create account </Link>
    </form>
  )
}

export const RegisterForm = () => {

  const history = useHistory()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onHandleRegister = async (event) => {
    try {
      const userInput = await blogService.register({
        username: event.username,
        name: event.name,
        password: event.password,
      })
      history.push('/')
      return userInput
    } catch (exception) {
      alert('Error occured in registering user. Try again.')
    }
  }

  return (
    <form onSubmit={handleSubmit(onHandleRegister)}>
      <h1>Create account</h1>
      <div className='usernameInput'>
        username
        <input
          className='inputField'
          type='text'
          {...register('username', { required: 'Username is required', })}
        />
        {errors.username && (
          <div className="errorMessage">
            <img src={dangerImg} alt='danger' className='dangerLogo'/>
            <p className='dangerText'>{errors.username.message}</p>
          </div>
        )}
      </div>
      <div className='nameInput'>
        name
        <input
          className='inputField'
          type='text'
          {...register('name', { required: 'Name is required', })}
        />
        {errors.name && (
          <div className="errorMessage">
            <img src={dangerImg} alt='danger' className='dangerLogo'/>
            <p className='dangerText'>{errors.name.message}</p>
          </div>
        )}
      </div>
      <div className='passwordInput'>
        password
        <input
          className='inputField'
          type='password'
          {...register('password', { required: 'Password is required' })}
        />
        {errors.password && (
          <div className="errorMessage">
            <img src={dangerImg} alt='danger' className='dangerLogo'/>
            <p className='dangerText'>{errors.password.message}</p>
          </div>
        )}
      </div>
      <button
        data-testid='Login_submitButton'
        className='loginButton'
        type='submit'
      >
        create account
      </button>
      <div className='loginText'>or</div>
      Already have one? <Link to={'/'}> Click here </Link>
    </form>
  )

}

export const LoginSucceed = ({ user, setUser }) => {

  const [moisture, setMoist] = useState(0);
  
  useEffect(() => {
    const getValue = firebase.database().ref("Ho Chi Minh City/Moisture");
    getValue.on("value", snapshot => {
      let value = snapshot.val();
      // Whenever the value changes on the server, it is also reset on the running app through the variable
      setMoist(value.toFixed(2));
    });
  }, []);

  const [temperature, setTemp] = useState(0);
  
  useEffect(() => {
    const getValue = firebase.database().ref("Ho Chi Minh City/Temperature");
    getValue.on("value", snapshot => {
      let value = snapshot.val();
      // Whenever the value changes on the server, it is also reset on the running app through the variable
      setTemp(value.toFixed(2));
    });
  }, []);

  return (
    <div>
      <div>Welcome to aquarium monitoring, {user?.name}! </div>

      <div className="displayValue">
        <span>Moisture: {moisture} %</span>
      </div>

      <div className="displayValue2">
        <span>Temperature: {temperature} *C</span>
      </div>

      <Link to={'/'} onClick={() => setUser(null)}>Logout</Link>
    </div>
  )
}