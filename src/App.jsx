import { useState } from 'react'
import './App.css'
import GeneralInfo from './components/generalInfo'
import Education from './components/Education'
import Experience from './components/Experience'
function randomId(){
  return Math.floor(Math.random()*100)+String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32)
}

function App() {
  let idEdu= randomId()
  let idExp= randomId()
  const [educationList, setEducationList]= useState({[idEdu]:<Education />})
  const [experienceList, setExperienceList]= useState({[idExp]:<Experience />})
  const handleChange = (comp, setFunction)=>{
      setFunction(prevFormData => ({
          ...prevFormData,
          [randomId()]: comp
      }))
  }
  return(
    <>
      <GeneralInfo />
      <section id='school'>
        {Object.entries(educationList).map(([key, item])=> <div key={key}>{item}</div>)}
        <button onClick={()=>handleChange(<Education visibleForm={true}/>, setEducationList)}></button>
      </section>
      <section id='jobs'>
        {Object.entries(experienceList).map(([key, item])=> <div key={key}>{item}</div>)}
        <button onClick={()=>handleChange(<Experience visibleForm={true}/>, setExperienceList)}></button>
      </section>
      
    </>
  )
}

export default App
