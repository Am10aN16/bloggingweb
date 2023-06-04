import React, { createContext,useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home";
import Blogs from "./components/Blogs";
import Editblogs from "./components/Editblogs"
import Login from "./components/Login";
// import Abouts from "./components/Abouts";
import Signup from "./components/Signup";
import Logout from "./components/Logout";
import Errorpage from "./components/Errorpage";
import { initialState,reducer } from "../src/reducer/UseReducer";
import Createblog from "./components/Createblog";
//1.contextAPI
export const UserContext= createContext();



const Routing = ()=>{
  return(
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/api/blogs' element={<Blogs/>} />
        <Route path='/updateblog/:id' element={<Editblogs />} />
        <Route path='login' element={<Login />} />
        <Route path='register' element={<Signup />} />
        <Route path='logout' element={<Logout />} />
        <Route path='/api/addblogs' element={<Createblog />} />
        <Route path='/api/delblog/:id' element={<Createblog />} />
        <Route path='*' element={<Errorpage />} />
      </Routes>
  );
};


const App = () => {
 
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
      <>
    <UserContext.Provider value={{state, dispatch}}>
      <Navbar />
      <Routing/>   
    </UserContext.Provider>
    </>
  );
};

export default App;
