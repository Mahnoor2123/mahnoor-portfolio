import React from 'react'
import "./Education.css"
import { Link } from "react-router-dom";
const Education = () => {
  return (
    <section>
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
     <section className='Educationme'>
   <div className='MyEducation'>
    <h3>MY EDUCATION LIST :</h3>
    {/* <h5>MY EDUCATION LIST :</h5> */}
   <h1>Seconadry Education</h1>
     <p>Completed my secondary education from MULTAN <br></br><br></br>
     <span> School:</span> Army Public School,Fort Road,Rawalpindi Cantt Multan</p>

  
  <h1>Higher Education </h1>
  <p>Completed my Higher studies from rawalpindi.<br></br><br></br>
  <span> School:</span> Army Public School,Fort Road,Rawalpindi</p>
  


        <h1>Bachelor of Science in Computer Science.</h1>
        <p>Did my Bachelors Degree in kohat.Obtaine overall 3.4GPA <br></br><br></br>
           <span> University:</span>  Kohat university of science and technology</p>
           
           <h1>Masters Degree in Information Technology</h1>
           <p>Done with my 2nd semester. Still ongoing<br></br><br></br>
           <span> University:</span> Quaid-i-Azam University</p>
   
   </div>
   <img src='/Images/Degree-Completion-Program.jpg'></img>


  
     </section>
  
    </section>
 
  )
}

export default Education