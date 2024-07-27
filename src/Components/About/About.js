import React from 'react'
import "./About.css"
import { Link } from "react-router-dom";
const About = () => {
  return (
    
    <div className='AboutMe'>
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
        <section className='Me'>
        <h5>HI THERE</h5>
        <h1>It's me Mahnoor</h1>
        <p>A proficient web developer possesses a blend of technical expertise and creative problem-solving skills. They are adept at coding languages such as HTML, CSS, JavaScript, and often back-end languages like Python or Ruby. Attention to detail and a keen eye for design ensure that web applications are both functional and aesthetically pleasing. Strong communication skills enable effective collaboration with designers, clients, and other stakeholders. Additionally, a good web developer stays updated with the latest industry trends and technologies, demonstrating a commitment to continuous learning and adaptability in a fast-evolving field.</p>
        </section>
    </div>
  )
}

export default About