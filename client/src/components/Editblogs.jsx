import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from '../App';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

const Editblogs = () => {
    const {state} = useContext(UserContext)
    const navigate = useNavigate();
    const {id , title, tag , blog} = useParams();
    const[data , setData] = useState({
      title: `${title}`, blog:`${blog}`, tag:`${tag}`
    })
 

 
    const blogsPage = async() => {
      try {     
        const response = await axios.get('/api/blogs')
        console.log("print");
     
        console.log(response.data);
      if(id){
        response.data.forEach(blog => {
          console.log(blog._id);
          console.log(id);
          if(blog._id === id){
             setData({
                    title: blog.title,
                    blog: blog.blog,
                    tag: blog.tag
                  }
                  )
          }

        })
      }
      } catch (error) {
        console.log(error);
      }
    } 

  
    useEffect(()=>{
     blogsPage();
    },[]);
     
  
      const onChangeInput = e =>{
        const {name,value} = e.target;
      
        setData({...data,[name]:value})
        
      }

      const updateSubmit = async e =>{
        e.preventDefault()
    
        try {
           await axios.put(`/api/updateblog/${id}`)
          
           alert("Update success")      
            
          navigate('/api/blogs');
          } catch (err) {
          console.log(err);
          }
        }
   
     if(state){
  return (
    
    <div className='login-page'>
    <h2>Edit Blog</h2>
    <form onSubmit={updateSubmit}>
      <input type="text" name="title" required
      placeholder="Title" value={data.title} onChange={onChangeInput}/>

      <input type="text" name="tag" required
      placeholder="Tag" value={data.tag} onChange={onChangeInput}/>
      
      <input type="text" name="blog" required autoComplete='on'
      placeholder="Blog" value={data.blog} onChange={onChangeInput} editable="true"/>

    <div className="row">
      <button type='submit' >Update</button>
    </div>

    </form>
   
    </div>
  )}else{
  navigate("/api/login")
  }
}

export default Editblogs