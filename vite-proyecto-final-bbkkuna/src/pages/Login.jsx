import { Link } from 'react-router-dom'
import './Login.css'

const Login = () => {
  return (

    <div className="login">
      <h1 className='login-title'>Iniciar Sesion</h1>
      <form className="login-form">
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />        
        <button type="submit">Iniciar Sesion</button>
      </form>
      <p>No tengo cuenta ? <Link to="/register">Registrarme</Link></p>  
    </div>      

   
  )
}

export default Login