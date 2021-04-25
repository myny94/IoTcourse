import React from "react"
import { useForm } from "react-hook-form"
import blogService from "./services"
import treeImg from "../images/tree.svg"
import userImg from "../images/user.svg"
import dangerImg from "../images/triangle.svg"
import { Link, useHistory } from "react-router-dom"
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from "react-bootstrap"

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
      history.push("/user")
    } catch (exception) {
      console.log("error", exception)
      alert("Wrong credentials")
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
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <div className='errorMessage'>
            <img src={dangerImg} alt='danger' className='dangerLogo' />
            <p className='dangerText'>{errors.username.message}</p>
          </div>
        )}
      </div>
      <div className='passwordInput'>
        password
        <input
          className='inputField'
          type='password'
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <div className='errorMessage'>
            <img src={dangerImg} alt='danger' className='dangerLogo' />
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
      <Link className='registerButton' to={"/register"}>
        {" "}
        Create account{" "}
      </Link>
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
      history.push("/")
      return userInput
    } catch (exception) {
      alert("Error occured in registering user. Try again.")
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
          {...register("username", { required: "Username is required" })}
        />
        {errors.username && (
          <div className='errorMessage'>
            <img src={dangerImg} alt='danger' className='dangerLogo' />
            <p className='dangerText'>{errors.username.message}</p>
          </div>
        )}
      </div>
      <div className='nameInput'>
        name
        <input
          className='inputField'
          type='text'
          {...register("name", { required: "Name is required" })}
        />
        {errors.name && (
          <div className='errorMessage'>
            <img src={dangerImg} alt='danger' className='dangerLogo' />
            <p className='dangerText'>{errors.name.message}</p>
          </div>
        )}
      </div>
      <div className='passwordInput'>
        password
        <input
          className='inputField'
          type='password'
          {...register("password", { required: "Password is required" })}
        />
        {errors.password && (
          <div className='errorMessage'>
            <img src={dangerImg} alt='danger' className='dangerLogo' />
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
      Already have one? <Link to={"/"}> Click here </Link>
    </form>
  )
}

export const LoginSucceed = ({ user, setUser }) => {
  return (
    <div>
      <NavigationBar />
      <div className="mainText">Welcome to smart tree monitoring, {user?.name}! </div>
      <div className="treeImages">
        <div>
          <img src={treeImg} className='treeLogo'/>
          <div className="treeText">Ho Chi Minh City</div>
          <div className="treeContent">
            <div>Humidity: 32</div>
            <div>Moisture: 60</div>
            <div>Rain status: 1</div>
            <div>Temperature: 90</div>
            <div>light intensity: 23</div>
          </div>
        </div>
        <div>
          <img src={treeImg} className='treeLogo'/>
          <div className="treeText">Ha Noi</div>
          <div className="treeContent">
            <div>Humidity: 123</div>
            <div>Moisture: 213</div>
            <div>Rain status: 1</div>
            <div>Temperature: 32</div>
            <div>light intensity: 21</div>
          </div>
        </div>
        <div>
          <img src={treeImg} className='treeLogo'/>
          <div className="treeText">Helsinki</div>
          <div className="treeContent">
            <div>Humidity: 12</div>
            <div>Moisture: 32</div>
            <div>Rain status: 1</div>
            <div>Temperature: 32</div>
            <div>light intensity: 32</div>
          </div>
        </div>
      </div>
      <Link to={"/"} onClick={() => setUser(null)}>
        Logout
      </Link>
    </div>
  )
}

export const NavigationBar = () => {
  return (
    <div>
      <Navbar bg='dark' variant='dark' expand='lg' sticky='top'>
        <Navbar.Brand href='#home'>tree IoT</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link href='/user'>Home</Nav.Link>
            <Nav.Link href='/about-us'>About Us</Nav.Link>
            <Nav.Link href='/gallery'>Gallery</Nav.Link>
            <Nav.Link href='/gallery'>Settings</Nav.Link>
            <Nav.Link href='/gallery'>Calendar</Nav.Link>
            <NavDropdown title='Dropdown' id='basic-nav-dropdown'>
              <NavDropdown.Item href='#action/3.1'>Action</NavDropdown.Item>
              <NavDropdown.Item href='#action/3.2'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action/3.3'>Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.4'>
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export const AboutUs = () => {
  return (
    <div>
      <NavigationBar />
      <div className="contributors">Contributors</div>
      <div>Amanda Puskyte</div>
      <div>Thong Nguyen</div>
      <div>Le Do</div>
      <div>Nayeong Song</div>
    </div>
  )
}