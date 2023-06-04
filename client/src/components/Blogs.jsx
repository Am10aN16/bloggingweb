import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import "../index.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import Footer from "./Footer";
import Swal from 'sweetalert2'

const Blogs= () =>
{
  const {state} = useContext(UserContext)
  const[blogs, setBlogs] = useState([])
const navigate = useNavigate();

  const colours = [
  "rgb(63 63 63)"
  ];

if(state){
 var editBlog =(id)=>{
     navigate(`/updateblog/${id}`)
 }}else{
    navigate("/login")
 }

  const blogsPage = async() => {
   
    try {
      
      const response = await axios.get('/api/blogs')
      setBlogs(response.data);
    } catch (error) {
      console.log(error);
    }
  } 

  useEffect(()=>{
   blogsPage();
  },[]);

const delBlog = async(id)=>{
  Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  }).then(async (result) => {
    if (result.isConfirmed) {
      Swal.fire(
        'Deleted!',
        'Your file has been deleted.',
        'success'
      )
      await axios.delete(`/api/delblog/${id}`);
    }
  })

navigate("/api/blogs")
}


  return (
    <>
    {blogs.map((blog) => (
      <div className="card" style={{backgroundColor: colours[Math.floor(Math.random() * colours.length)] , marginBottom: 10}} key={blog._id}>
      <div className="card-header white customedit" >
        <div>{blog.tag}</div>
        <div className="editdel">
        <div><i className="fa-solid fa-pen-to-square" onClick={()=> {editBlog(blog._id , blog.title , blog.blog, blog.tag)}}></i></div>
        <div><i className="fa-solid fa-trash left" onClick={()=> {delBlog(blog._id)}}></i></div>
        </div>
      </div>
      <div className="card-body">
        <blockquote className="blockquote mb-0">
          <p className="white">{blog.blog}</p>
          <footer className="blockquote-footer white">Someone famous in <cite title="Source Title">{blog.title}</cite></footer>
        </blockquote>
      </div>
      
    </div>
    ))}
      <Footer/>
    </>
  );
};

export default Blogs;