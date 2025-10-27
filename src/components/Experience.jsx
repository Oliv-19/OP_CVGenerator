import { useState } from 'react'

function Responsabilitieslist({responsabilities}){
    console.log(responsabilities)
    return(
        <>
            {Object.entries(responsabilities).map(([key, value])=> {
                if(value.length!=0)
                    return <li key={key}>{value}</li>
                })
            }
            
        </>
    )
}
export default function Experience({visibleForm = false}){
    const [isFormVisible, setIsFormVisible]= useState(visibleForm)
    const [experience, setExperience]= useState({
        companyName:'Company',
        positionTitle:'Position',
        location:'city, country',
        startDate:'sep 2018',
        endDate:'jul 2024',
        mainResponsabilities:{
            res1: '',
            res2: '',
            res3: '',
            res4: '',
            res5: '',
        },
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsFormVisible(false)
    }
    const handleChange = (e)=>{
        const { name, value } = e.target
        setExperience(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    const handleListChange = (e)=>{
        const { name, value } = e.target
        setExperience(prevFormData => ({
            ...prevFormData,
            mainResponsabilities: {...prevFormData.mainResponsabilities, [name]: value}
        }))
    }
    return(
        <>
            {isFormVisible?
                (
                    <form action="" onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={experience.companyName} name='companyName' type="text" />
                        <input onChange={handleChange} value={experience.positionTitle} name='positionTitle' type="text" />
                        <input onChange={handleChange} value={experience.location} name='location' type="text" />
                        <input onChange={handleChange} value={experience.startDate} name='startDate' type="month" />
                        <input onChange={handleChange} value={experience.endDate} name='endDate' type='month' />
                        <div className="responabilities">
                            <input onChange={handleListChange} value={experience.mainResponsabilities.res1} type="text" name='res1'/>
                            <input onChange={handleListChange} value={experience.mainResponsabilities.res2} type="text" name='res2'/>
                            <input onChange={handleListChange} value={experience.mainResponsabilities.res3} type="text" name='res3'/>
                            <input onChange={handleListChange} value={experience.mainResponsabilities.res4} type="text" name='res4'/>
                            <input onChange={handleListChange} value={experience.mainResponsabilities.res5} type="text" name='res5'/>

                        </div>
                        <button type="submit">Save</button>
                    </form>
                ):(
                    <div className="display">
                        {Object.entries(experience).map(([key, value])=> {
                            let elem
                            if(key.includes('mainResponsabilities')){
                                console.log(value)
                               elem= <Responsabilitieslist responsabilities={value} key={key}/>
                            }else{
                                elem =<h3 key={key}>{value}</h3>
                            }
                            return elem
                        })
                        }
                        <button onClick={()=> setIsFormVisible(true)}>Edit</button>
                    </div>
                )
            }
        </>
    )
}