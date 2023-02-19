import React, { useContext, useEffect, useState } from "react";
import axios from 'axios'
import "../index.css"
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

const Blogs= () =>
{
  const {state} = useContext(UserContext)
  const[blogs, setBlogs] = useState([])
const navigate = useNavigate();

  const colours = [
    "#5B84B1FF",
    "#2A363B ",
    "#A7226E",
    "#FF847C",
    "#45ADA8",
    "#E84A5F",
    "#FFBF00",
    "#6495ED"
  ];

if(state){
 var editBlog =(id, title , tag , blog)=>{

     navigate(`/editblogs/${id}`)
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
await axios.delete(`/api/delblog/${id}`);
alert(" Post Successfully deleted")
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
      
    </>
  );
};

export default Blogs;