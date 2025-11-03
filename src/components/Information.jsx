import { useState } from 'react'
import '../styles/general.css'
import '../styles/experience.css'
import '../styles/education.css'
import Input from './Input'

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
    return (
        <>{isFormVisible?(
            <form action="" onSubmit={handleSubmit} className="informationBlock">
                <div className="firstLine">
                    {Object.entries(obj).map(([key, value])=> key != 'positionTitle' && <Input key={key} type='text' id={key} value={value} />)}
                    <button className='submitBtn' type="submit">Save</button>
                </div>
                {Object.hasOwn(obj, 'positionTitle') && <Input  type='text' id='positionTitle' value={obj.positionTitle} />}
            </form>
        ):(
            <>
            <div className="firstLine">
                {Object.entries(obj).map(([key, value])=>
                    key != 'positionTitle' && <h3 className={key} >{value}</h3>
                )}
                <button className='editBtn' onClick={()=> setIsFormVisible(true)}>Edit</button>
            </div>
            {Object.hasOwn(obj, 'positionTitle') && <h3 className='positionTitle' >{obj.positionTitle}</h3>}
            </>
        )
        }
        </>
        )
}