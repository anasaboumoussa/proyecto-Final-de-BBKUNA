import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (

    <div className="login">
      <h1 className='login-title'>Log In</h1>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />        
        <button type="submit">Log In</button>
      </form>
      <p>Don't have an account? <Link to="/register">Sign Up</Link></p>  
    </div>      

   
  )
}

export default Login