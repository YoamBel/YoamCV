import React from "react"
import "./FormationsExperiences.css"
import DataFormations from "../datas/Formations"
import DataExperiences from "../datas/Experiences"
import Formations from "./Formations"
import Experiences from "./Experiences"

function FormationsExperiences() {
  return (
    <>
      <Experiences datas={DataExperiences} />
      <Formations datas={DataFormations} />
    </>
  )
}

export default FormationsExperiences
