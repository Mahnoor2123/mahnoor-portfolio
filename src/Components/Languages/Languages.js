import React from 'react'
import "./languages.css"
import Progressbar from "./Progressbar"
import { Link } from "react-router-dom";




  

const Languages = () => {
   
  
  return (
    
    <div>
        <section className='lang'>
        <section className='Navbar'>

<div className='logo'>
  <h1>MAHNOOR <span>SAFI</span> </h1>
</div>

      <div className='Nav-links'>
<ul>
<li><Link to="/">HOME</Link></li>
  
  <li><Link to="/Languages">LANGUAGES</Link></li>
  <li><Link to="/Education">EDUCATION</Link></li>
  <li><Link to="/About">ABOUT</Link></li>
  <li><Link to="/Contact">CONTACT</Link></li>

</ul>
      </div>
      

     </section>
            <h3>LANGUAGES</h3>
       
            <div className='lang-no'>
            <div className="card">
               {/* <img src={imageUrl} alt={title} className="card-image" /> */}
           <img src='/Images/HTML.png'></img>
            <h5>HTML
            <div className="card-content">
           <p className="card-description"></p>
           </div>
           <Progressbar />
            </h5>
            </div>

            <div className="card">
               {/* <img src={imageUrl} alt={title} className="card-image" /> */}
           <img src='/Images/CSS.png'></img>
            <h5>CSS
            <div className="card-content">
           <p className="card-description"></p>
           </div>
           <Progressbar />
            </h5>
            </div>

            <div className="card">
               {/* <img src={imageUrl} alt={title} className="card-image" /> */}
           <img src='/Images/myJS.png'></img>
            <h5> Javascript
            <div className="card-content">
           <p className="card-description"></p>
           </div>
           <Progressbar />
            </h5>
            </div>

            <div className="card">
               {/* <img src={imageUrl} alt={title} className="card-image" /> */}
           <img src='/Images/bootstrap.png'></img>
            <h5>BOOTSTRAP
            <div className="card-content">
           <p className="card-description"></p>
           </div>
           <Progressbar />
            </h5>
            </div>


            <div className="card">
               {/* <img src={imageUrl} alt={title} className="card-image" /> */}
           <img src='/Images/REACT.png'></img>
            <h5>React
            <div className="card-content">
           <p className="card-description"></p>
           </div>
           <Progressbar />
            </h5>
            </div>
      
           
            
            </div>
           

        </section>
    </div>
  )
}

export default Languages