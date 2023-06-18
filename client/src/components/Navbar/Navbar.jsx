import React, { useContext } from 'react';
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../App';
const Navbar = () => {
  const {state} = useContext(UserContext)
  
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light purple">
  <div className="container-fluid">
    <a className="navbar-brand white" href="/">Blogger's Tweet</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item ">
        <NavLink
        className='nav-link active white'
        style={{ color: "black" }}
        aria-current='page'
        to='/'
      >Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink
        className='nav-link white'
        style={{ color: "black" }}
        aria-current='page'
        to='/blogs'
      >Blogs</NavLink>
        </li>
        
        { state ? (
       <>
        <li className="nav-item">
       <NavLink
      className='nav-link white'
      style={{ color: "black" }}
      aria-current='page'
      to='/api/addblogs'
    >Post</NavLink></li>
     <li className="nav-item">
    <NavLink
    className='nav-link white'
    style={{ color: "black" }}
    aria-current='page'
    to='logout'
  >Logout</NavLink>
  </li>
  </>
    )
    :
   ( <li className="nav-item">
    <NavLink
        className='nav-link white'
        style={{ color: "black" }}
        aria-current='page'
        to='/login'
      >Login/SignUp</NavLink> </li>)}
        
      </ul>
    </div>
  </div>
</nav>
    </>
  );
};
export default Navbar;
