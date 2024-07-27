import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Languages from './Components/Languages/Languages';
import About from "./Components/About/About";
import Education from "./Components/Education/Education";
import Contact from './Components/Contact/Contact';
// import Progressbar from "./Components/Languages/Progressbar";
import './App.css';
import {BrowserRouter as Router, Routes , Route} from 'react-router-dom';
function App() {
  return (
    <div className="App">
<Router>
  <Routes>
    <Route path='/' element={<Navbar/>}/>
    <Route path='/Hero' element={<Hero/>}/>
    <Route path='/Languages' element={<Languages/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path='/Education'element={<Education/>}/>
    <Route path="/Contact" element={<Contact/>}/>
  </Routes>
</Router>
    
    </div>
  );
}

export default App;
