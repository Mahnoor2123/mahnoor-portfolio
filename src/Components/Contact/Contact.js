import React, { useState } from 'react';
import "./Contact.css"
import { Link } from "react-router-dom";
function ControlledInput() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert('Input Value: ' + inputValue);
  };

  return (
    <div>
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
     <form onSubmit={handleSubmit}>
        <h1>Conatct me</h1>
      <label>
       <h5 className='Name'> Enter your Name</h5>
        <input type="Your Name" value={inputValue} onChange={handleChange} />
      </label>
      <label>
      <h5 className='Email'>Enter Your Email</h5>
       
        <input type="Your Email" value={inputValue} onChange={handleChange} />
      </label>
      <label>
       <h5 className='Msg'>Message Me</h5>
        
        <input type="Your Message" value={inputValue} onChange={handleChange} />
      </label><br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
  
  
  );
}

export default ControlledInput;
