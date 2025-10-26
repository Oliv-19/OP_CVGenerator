import { useState } from 'react'
import '../styles/generalInfo.css'

//Currently doing: take info from input, hide the form and display information on submit
function GeneralInfo(){
    const initialValues={
        firstName:'FirstName',
        lastName:'LastName',
        email:'something@gmail.com',
        phoneNumber:'000-000-0000',
    }
    const [general, setGeneral]= useState(initialValues)
    const show=(e) =>{
            e.target.parentNode.childNodes.forEach((input, index)=>{
                if(index < e.target.parentNode.childNodes.length-2){
                    const value= input.textContent
                    const inputField = document.createElement('input')
                    inputField.value = value
                    inputField.name = input.dataset.name
                    inputField.type = input.dataset.type
                    input.parentNode.replaceChild(inputField, input)
                }else if(index == e.target.parentNode.childNodes.length-2){
                    e.target.style.display= 'none'
                }
            })
    }
    const handleSubmit=(e) =>{
        e.preventDefault()
        let formData= new FormData(e.target)
        setGeneral({
            firstName:formData.get('firstName'),
            lastName:formData.get('lastName'),
            email:formData.get('email'),
            phoneNumber:formData.get('phoneNumber'),
        })
        e.target.parentNode.childNodes.forEach((input, index)=>{
                if(index < e.target.parentNode.childNodes.length-2){
                    input.parentNode.replaceChild(inputField, input)
                }else if(index == e.target.parentNode.childNodes.length-2){
                    e.target.style.display= 'block'
                }
            })
    }
    return(
        <div className="general" >
            <div  className="display">
                <form action="" onSubmit={handleSubmit}>
                    <h3 data-name='firstName' data-type='text'>{general.firstName}</h3>
                    <h3 data-name='lastName' data-type='text'>{general.lastName}</h3>
                    <h3 data-name='email' data-type='email'>{general.email}</h3>
                    <h3 data-name='phoneNumber' data-type='tel'>{general.phoneNumber}</h3>
                    <button type='button' onClick={show}>Edit</button>
                    <button type="submit">Save</button>
                </form>
            </div>
        </div>
    )
}
export default GeneralInfo