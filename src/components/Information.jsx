import { useState } from 'react'
import '../styles/general.css'
import '../styles/experience.css'
import '../styles/education.css'

function Input({type, id, value}){
    return (<input type={type} name={id} className={id} defaultValue={value}  placeholder={value}/>  )
}
export default function Information({object}){
    const [obj, setObj]= useState(object)
    const [isFormVisible, setIsFormVisible]= useState(true)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsFormVisible(false)
        const form = new FormData(e.target)
        const formObject = Object.fromEntries(form.entries())
        setObj(formObject)
    }
    console.log(obj)
    return (
        <>{isFormVisible?(
            <form action="" onSubmit={handleSubmit} className="displayExperience">
                <div className="firstLine">
                    {Object.entries(obj).map(([key, value])=> <Input key={key} type='text' id={key} value={value} />)}
                    <button className='submitBtn' type="submit">Save</button>
                </div>
            </form>
        ):(
            <div className="firstLine">
                {Object.entries(obj).map(([key, value])=>
                    <h3 className={key} >{value}</h3>
                )}
                <button className='editBtn' onClick={()=> setIsFormVisible(true)}>Edit</button>
            </div>
        )
        }
        </>
        )
}