import { Link } from 'react-router-dom'
import './registrarme.css'

const register = () => {
  return (

    <div className="login">
      <h1 className='registrar-title'>registrar </h1>
      <form className="login-form">
        <input type="text" placeholder='Name' required/>
        <input type="text" placeholder='Last Name' required/>
        
        <input type="email" placeholder="Email"required />
        <input type="password" placeholder="Password" required />        
        <button type="submit"> registrar</button>
      </form>
      <p> tengo cuenta ? <Link to="/login">Login</Link></p>  
    </div>      

   
  )
}

export default register;