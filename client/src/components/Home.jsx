import React , {useEffect , useState} from "react";
import "./home.css"
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const Home = () => {

  const[userName, setuserName] = useState('');
  const [show, setShow] = useState(false);
  const navigate = useNavigate()
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

  const learn =()=>{navigate('/blogs')}

useEffect(()=>{
  userHomePage();
},[]);

  return (
    <>
       
       <section className="parallax-container">
      <h1>Blogger's Tweet</h1>
      <p>
      "Blogger's Tweet" Where concise meets insightful, unleashing the power of words in a single tweet.
      </p>
    </section>

    <section className="buffer"></section>

    <section className="parallax-container parallax-container2">
      <div className="card width-card" style={{maxWidth:330}}>
        <div className="card-img"></div>
        <h3>Food Blogging</h3>
        <p>
        "Savor the flavors, indulge in culinary adventures - join our food blogging community and let your taste buds be your guide."
        </p>
        <button type="submit" onClick={learn}>Read more</button>
      </div>
      <div className="card width-card" style={{maxWidth:330}}>
        <div className="card-img"></div>
        <h3>Travel Blogging</h3>
        <p>
          "Escape the ordinary and embrace the extraordinary as we ignite your wanderlust and guide you through unforgettable journeys across the globe."
        </p>
        <button type="submit" onClick={learn}>Read more</button>
      </div>
      <div className="card width-card" style={{maxWidth:330}}>
        <div className="card-img"></div>
        <h3>Business Blogging</h3>
        <p>
        "Unlock the secrets of success, gain valuable insights, and navigate the ever-changing world of business through our informative and inspiring business blogging platform."
        </p>
        <button type="submit" onClick={learn}>Read more</button>
      </div>
     
    </section>

   <Footer/>

    </>
  );
};

export default Home;
