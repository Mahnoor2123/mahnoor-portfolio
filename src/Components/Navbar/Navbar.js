import React from 'react'
import "./Navbar.css"

import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className='Nav'>
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

     <div>
        <section className='Info'>
            <div className='hero-info'>
              <h3>I AM A FRONTEND DEVELOPER</h3>
             <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>

            <div className='hero-img'>
          
             <img src="/images/Mahnoor.jpg"></img>
             </div>

        </section>
    </div>
  
    </div>
  )
}

export default Navbar