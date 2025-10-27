import { useState } from 'react'
import '../styles/general.css'
//Currently doing: take info from input, hide the form and display information on submit
function GeneralInfo(){
    const initialValues={
        firstName:'FirstName',
        lastName:'LastName',
        email:'something@gmail.com',
        phoneNumber:'000-000-0000',
    }
    const [general, setGeneral]= useState(initialValues)
    const [isFormVisible, setIsFormVisible]= useState(false)

    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsFormVisible(false)
    }
    const handleChange = (e)=>{
        const { name, value } = e.target
        setGeneral(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    return(
        <div className="general" >
            {isFormVisible?
                (
                    <form action="" onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={general.firstName} name='firstName' type="text" />
                        <input onChange={handleChange} value={general.lastName} name='lastName' type="text" />
                        <input onChange={handleChange} value={general.email} name='email' type="email" />
                        <input onChange={handleChange} value={general.phoneNumber} name='phoneNumber' type="tel"/>
                        <button type="submit">Save</button>
                    </form>
                ):(
                    <div className="display">
                        {Object.entries(general).map(([key, value])=> <h3 key={key}>{value}</h3> )}
                        <button onClick={()=> setIsFormVisible(true)}>Edit</button>
                    </div>
                )
            }
        </div>
    )
}
export default GeneralInfo