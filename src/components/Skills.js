import React from "react"
import "./Skills.css"
import Skill from "./Skill"
import Languages from "./Languages"
import Interests from "./Interests"

function Skills() {
  return (
    <>
      <div className="skills">
        <h2 className="h2">Skills <span className="span-stack">(Stack)</span></h2>
        <div className="ct-skills">
          <div className="ct">
            <h3>FROND END</h3>
            <Skill title="React JS" rating="5" />
            <Skill title="React Native" rating="4" />
            <Skill title="HTML ,CSS" rating="5" />
            <Skill title="Javascript" rating="4" />  
          </div>
          <div className="ct"> 
            <h3>BACK END</h3>
              <Skill title="C#" rating="4" />
              <Skill title="Python" rating="4" />
              <Skill title="Java" rating="4" />
          </div>
          <div className="ct">
            <h3>DATA BASE</h3>
              <Skill title="SQL" rating="4" />
              <Skill title="Mongo DB" rating="3" />
            </div>
            <div className="ct">
            <h3>TECHNICAL ENVIRONMENT</h3>
             <p className="tch-env">Git , Github , Redux , EmailJS , Jspdf</p>
            </div>
        </div>
       
        {/*<Skill title="Communication" rating="3" />*/}
      </div>
      <div className="skills">
        <h3 className="h2">LANGUAGES</h3>
        <Languages title="Hebrew"/>
        <Languages title="English"/>
        <Languages title="French"/>
      </div>
      {/*<Interests />*/}
    </>
  )
}

export default Skills
