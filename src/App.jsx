import { useState } from 'react'
import './App.css'
import Information from './components/Information'

const initialValues={
  fullName:'FirstName lastName',
  email:'something@gmail.com',
  phoneNumber:'+00 000-000-0000',
  location:'city, country',
}
const expValues= {
  companyName:'Company',
  expLocation:'city, country',
  startDate:'sep 2018',
  endDate:'jul 2024',
  positionTitle:'Position',
}
const mainResponsabilities={
  res1: 'Responsability 1',
  res2: 'Responsability 2',
  res3: 'Responsability 3',
  res4: 'Responsability 4',
  res5: 'Responsability 5',
}
const eduValues={
  school:'School',
  eduLocation:'city, country',
  startDate:'sep 2018',
  endDate:'jul 2024',
  degree:'Degree',
}

function randomId(){
  return Math.floor(Math.random()*100)+String.fromCharCode(Math.floor(Math.random() * (126 - 32 + 1)) + 32)
}
function App() {
  
  let idEdu= randomId()
  let idExp= randomId()
  const [educationList, setEducationList]= useState({[idEdu]:<Information object= {eduValues}/>})
  const [experienceList, setExperienceList]= useState({[idExp]:<Information object= {expValues}/>})
  const handleChange = (comp, setFunction)=>{
      setFunction(prevFormData => ({
          ...prevFormData,
          [randomId()]: comp
      }))
  }
  return(
    <>
      <section id='personalInformation'>
        <Information object={initialValues}></Information>
      </section>
      <section id='jobs'>
        <div className="header">
          <h2>Professional Experience: </h2>
          <button onClick={()=>handleChange(<Information object= {expValues}/>, setExperienceList)}>Add</button>

        </div>
        {Object.entries(experienceList).map(([key, item])=> <div key={key}>{item}</div>)}
      </section>
      <section id='school'>
        <div className="header">
          <h2>Education: </h2>
          <button onClick={()=>handleChange(<Information object= {eduValues}/>, setEducationList)}>Add</button>
        </div>
        {Object.entries(educationList).map(([key, item])=> <div key={key}>{item}</div>)}
      </section>
    </>
  )
}

export default App
