import React, { useContext } from 'react'
import { SiteContext } from '../Context/SiteContext'

function Login() {
  const {handleLogin}=useContext(SiteContext)
  return (
   
  <>
  <h1>Login</h1>
  <button 
  onClick={handleLogin}
  className='btn btn-danger'>Login..</button>
  </>
  )
}

export default Login