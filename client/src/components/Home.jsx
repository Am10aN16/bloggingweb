import React , {useEffect , useState} from "react";
import Rocket from './images/home.gif'

const Home = () => {

  const[userName, setuserName] = useState('');
  const [show, setShow] = useState(false);

  const  userHomePage = async() => {
    try {
      const res= await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      });


      const data= await res.json();
      setuserName(data.name);
      setShow(true);

    } catch (error) {
      console.log(error);
    }
  }

useEffect(()=>{
  userHomePage();
},[]);

  return (
    <>
       
      <div className='homepage'>
       <img src={Rocket} alt=""  style={{"height":"250px","width":"300px"}}/>
      
        <p className='pt-5'>WELCOME</p>
        
        <h2>Welcome to the Blogger's Tweet</h2>
        
      </div>
    </>
  );
};

export default Home;
