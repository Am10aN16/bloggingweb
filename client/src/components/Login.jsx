import axios from 'axios'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import "./Login.css"

const Login = () => {
    const {dispatch} = useContext(UserContext)
    const navigate = useNavigate();
    const [user,setUser]= useState({
        email:'', password:''
      })
    
      const onChangeInput = e =>{
        const {name,value} = e.target;
        setUser({...user,[name]:value})
      }

      const loginSubmit = async e =>{
        e.preventDefault()
    
        try {
      
          await axios.post('/api/signin',{...user})
    
          localStorage.setItem('firstLogin', true)
           alert("Login success")
          
           dispatch({type:"USER", payload:true})
          navigate('/');
    
    
        } catch (err) {
        
          console.log(err);
          }
        }
     
  return (
    <div className='login-page'>
    <h2>Login</h2>
    <form onSubmit={loginSubmit}>
      <input type="email" name="email" required
      placeholder="Email" value={user.email} onChange={onChangeInput}/>
      
      <input type="password" name="password" required autoComplete='on'
      placeholder="Password" value={user.password} onChange={onChangeInput} />

    <div className="row">
      <button type='submit' >Login</button>
      <NavLink to='/register'>Register</NavLink>
    </div>

    </form>
   
    </div>
  )
}

export default Login