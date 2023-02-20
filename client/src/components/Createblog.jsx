import axios from 'axios'
import React, { useContext, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { UserContext } from '../App'
import "./Login.css"

const Createblog = () => {
    const {state} = useContext(UserContext)
    const navigate = useNavigate();
    const [post,setPost]= useState({
    category:"",
    title: "",
    tag:"",
    blog:""
      })
    
      const onChangeInput = e =>{
        const {name,value} = e.target;
        setPost({...post,[name]:value})
      }

      const postSubmit = async e =>{
        e.preventDefault()
    
        try {
      
          await axios.post('https://bloggers-tweet.onrender.com/api/addblogs',{...post})
           alert("Post success")
          navigate('https://bloggers-tweet.onrender.com/api/blogs');
    
    
        } catch (err) {
        
          console.log(err);
          }
        }
     
  return (
    <div className='login-page'>
    <h2>Login</h2>
    <form onSubmit={postSubmit}>
      <input type="text" name="category" required
      placeholder="Post Category" value={post.category} onChange={onChangeInput}/>
      <input type="text" name="title" required
      placeholder="Title" value={post.title} onChange={onChangeInput}/>
      <input type="text" name="tag" required
      placeholder="Tag" value={post.tag} onChange={onChangeInput}/>
      
      <input type="text" name="blog" required autoComplete='on'
      placeholder="Content" value={post.blog} onChange={onChangeInput} />

    <div className="row">
      <button type='submit' >Post</button>
    </div>

    </form>
   
    </div>
  )
}

export default Createblog