import { useState } from 'react'
import Input from './Input'
import { format } from "date-fns";

export default function Information({object, id}){
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
                <div className="firstLine" id={id}>
                    {Object.entries(obj).map(([key, value])=> key != 'degree' && <Input key={key} type='text' id={key} value={value} />)}
                    <button className='submitBtn' type="submit">Save</button>
                </div>
                {Object.hasOwn(obj, 'degree') && <Input  type='text' id='degree' value={obj.degree} />}
            </form>
        ):(
            <>
            <div className="firstLine" id={id}>
                {Object.entries(obj).map(([key, value])=>{
                    if(key.includes('Date')){
                        let dateValue = format(new Date(value+ "- 01"), 'MMM, y');
                        return <h3 className={key} key={key} >{dateValue}</h3>   
                    }
                    if(key != 'degree'){
                        return <h3 className={key} key={key} >{value}</h3>   
                    }

                }
                )}
                <button className='editBtn' onClick={()=> setIsFormVisible(true)}>Edit</button>
            </div>
            {Object.hasOwn(obj, 'degree') && <h3 className='degree' >{obj.degree}</h3>}
            </>
        )
        }
        </>
        )
}