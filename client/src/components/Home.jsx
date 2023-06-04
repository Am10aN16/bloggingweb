import React , {useEffect , useState} from "react";
import "./home.css"

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
       
       <section class="parallax-container">
      <h1>Blogger's Tweet</h1>
      <p>
        Cerro Torre is a mountain of sheer beauty whose spectacular attributes
        make it an unique gem in Argentina.
      </p>
    </section>

    <section class="buffer"></section>

    <section class="parallax-container parallax-container2">
      <div class="card width-card">
        <div class="card-img"></div>
        <h3>Hiking</h3>
        <p>
          Explore the myriad of trails through the mountaineous. Choose the
          difficulty appropriate to your fitness level.
        </p>
        <a href="https">Learn more</a>
      </div>
      <div class="card width-card">
        <div class="card-img"></div>
        <h3>Rock climbing</h3>
        <p>
          The goal is to reach the summit of a formation or the endpoint of a
          usually pre-defined route without falling
        </p>
        <a href="https">Learn more</a>
      </div>
      <div class="card width-card">
        <div class="card-img"></div>
        <h3>Caving</h3>
        <p>
          Exploring underground through networks of tunnels and passageways,
          which can be natural or artificial.
        </p>
        <a href="https">Learn more</a>
      </div>
      {/* <div class="card">
        <div class="card-img"></div>
        <h3>Paragliding</h3>
        <p>
          Get lift off from the mountain and enjoy through the splendor of the
          surrounding landscape by parachute.
        </p>
        <a href="https">Learn more</a>
      </div> */}
    </section>

    <section class="buffer"></section>

    </>
  );
};

export default Home;
