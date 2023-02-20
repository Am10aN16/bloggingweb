import axios from 'axios';
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Signup = () => {
    const [user,setUser]= useState({
        name:'', email:'', username:'',phone:'', password:'' ,cpassword:''
       })
     
       const onChangeInput = e =>{
         const {name,value} = e.target;
         setUser({...user,[name]:value})
       }
     
       const regToast = () => {
    alert("Registration success");
     }
     
       const registerSubmit = async e =>{
         e.preventDefault()
     
         try {
           await axios.post('/api/register',{...user})
     
           // localStorage.setItem('firstLogin', true)
           window.location.href = "/login";
     
     
         } catch (err) {
           alert(err.response.data.msg)
         }
       }
     
       return (
         <div className='login-page'>
         <form onSubmit={registerSubmit}>
         <h2>Register</h2>
         <input type="text" name="name" required
           placeholder="Your Name" value={user.name} onChange={onChangeInput}/>

         <input type="text" name="username" required
           placeholder="Username" value={user.username} onChange={onChangeInput}/>
     
           <input type="email" name="email" required
           placeholder="Your Email" value={user.email} onChange={onChangeInput}/>

<input type="text" name="phone" required
           placeholder="Enter your Mob No." value={user.phone} onChange={onChangeInput}/>
           
           <input type="password" name="password" required autoComplete='on'
           placeholder="Your Password" value={user.password} onChange={onChangeInput} />

           <input type="password" name="cpassword" required autoComplete='on'
           placeholder="Your Confirm Password" value={user.cpassword} onChange={onChangeInput} />
     
         <div className="row">
           <button type='submit' onClick={regToast}>Register</button>
           <NavLink to='/api/login'>Login</NavLink>
         </div>
     
         </form>
    
         </div>
       )
     }

export default Signup