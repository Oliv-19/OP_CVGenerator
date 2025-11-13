import Responsabilitieslist from './Responsabilities'
import { useState } from 'react'
import Input from './Input'
import { format } from "date-fns";

export default function Block({expValues, mainResponsabilities}) {
    const [obj, setObj]= useState(expValues)
    const [responsabilities, setResponsabilities]= useState(mainResponsabilities)
    const [isFormVisible, setIsFormVisible]= useState(true)
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsFormVisible(false)
        const form = new FormData(e.target)
        const formObject = Object.fromEntries(form.entries())
        const  {companyName, expLocation, startDate, endDate, positionTitle}= formObject
        const companyObj = {companyName, expLocation,startDate, endDate, positionTitle}
        const {res1, res2, res3, res4, res5}= formObject
        const resObj = {res1, res2, res3, res4, res5}
        setObj(companyObj)
        setResponsabilities(resObj)
    }
    
    return (
        <>{isFormVisible?(
            <form action="" onSubmit={handleSubmit} className="informationBlock">
                <div className="firstLine">
                    {Object.entries(obj).map(([key, value])=>{
                        if(key != 'positionTitle' && key != 'mainResponsabilities')
                            return <Input key={key} type='text' id={key} value={value} />
                    })}
                    <button className='submitBtn' type="submit">Save</button>
                </div>
                {Object.hasOwn(obj, 'positionTitle') && <Input  type='text' id='positionTitle' value={obj.positionTitle} />}
                <Responsabilitieslist object={responsabilities}  />
            </form>
        ):(
            <>
            <div className="firstLine">
                {Object.entries(obj).map(([key, value])=>{
                    if(key.includes('Date')){
                        let dateValue = format(new Date(value+ "- 01"), 'MMM, y');
                        return <h3 className={key} key={key} >{dateValue}</h3>   
                    }
                    if(key != 'positionTitle' && key != 'mainResponsabilities'){
                        return <h3 className={key} key={key} >{value}</h3>   
                    }
                })}
                <button className='editBtn' onClick={()=> setIsFormVisible(true)}>Edit</button>
            </div>
            {Object.hasOwn(obj, 'positionTitle') && <h3 className='positionTitle' >{obj.positionTitle}</h3>}
            <Responsabilitieslist object={responsabilities} isInput={false}/>
            </>
        )
        }
        </>
        )
    }