import React,{useState} from 'react';
import './App.css';
import NavBar from "./Components/NavBar.js";
import AboutMe from './Components/AboutMe.js';
import Resume from "./Components/Resume.js"
import Projects from "./Components/Projects.js";
import Contact from './Components/Contacts';

function App() {
  var date=new Date();
  var year=date.getFullYear();
  var timeC=date.toLocaleTimeString();
  var [timeChange,setTimeChange]=useState(timeC);
     
  function refresh(){
      var timeRefresh=new Date().toLocaleTimeString();
      setTimeChange(timeRefresh);
  }
  setInterval(refresh, 1000);
  return (
    
      <div>
        <NavBar/>
        <div className="aboutMeClass">
          <AboutMe/>
        </div>
        <div className="resumeClass">
          <Resume/>
        </div>
        <div className="projectClass">
          <Projects/>
        </div>
        <div className="contactClass">
          <Contact/>
          <p style={{textAlign:"center",marginBottom:"5px",marginTop:"20px",color:"aliceblue"}}>{timeChange}</p>
          <p style={{textAlign:"center", marginTop:"5px",color:"aliceblue"}}>© Copyright Toms John {year}</p>
          </div>
      </div>
    
  );
}

export default App;
