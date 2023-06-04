import axios from 'axios'
import React, { useState } from 'react'
import {  useNavigate } from 'react-router-dom'
import "./Login.css"
import Footer from './Footer'
import Swal from 'sweetalert2'

const Createblog = () => {
  
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
      
          await axios.post('/api/addblogs',{...post})
          Swal.fire(
            'Cool!',
            'You just created a Blog!',
            'success'
          )
          navigate('/api/blogs');
    
    
        } catch (err) {
        
          console.log(err);
          }
        }
     
  return (
<>
    <div className='login-page'>
    <h2>Create Post</h2>
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
    <Footer/>
    </>
  )
}

export default Createblog