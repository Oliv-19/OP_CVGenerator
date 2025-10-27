import { useState } from 'react'
export default function Education({visibleForm = false}){
    const [isFormVisible, setIsFormVisible]= useState(visibleForm)
    const [education, setEducation]= useState({
        school:'School',
        degree:'Degree',
        location:'city, country',
        startDate:'sep 2018',
        endDate:'jul 2024',
    })
    const handleSubmit = (e)=>{
        e.preventDefault()
        setIsFormVisible(false)
    }
    const handleChange = (e)=>{
        const { name, value } = e.target
        setEducation(prevFormData => ({
            ...prevFormData,
            [name]: value
        }))
    }
    return(
        <>
            {isFormVisible?
                (
                    <form action="" onSubmit={handleSubmit}>
                        <input onChange={handleChange} value={education.school} name='school' type="text" />
                        <input onChange={handleChange} value={education.degree} name='degree' type="text" />
                        <input onChange={handleChange} value={education.location} name='location' type="text" />
                        <input onChange={handleChange} value={education.startDate} name='startDate' type="month" />
                        <input onChange={handleChange} value={education.endDate} name='endDate' type='month' />
                        <button type="submit">Save</button>
                    </form>
                ):(
                    <div className="display">
                        {Object.entries(education).map(([key, value])=> <h3 key={key}>{value}</h3> )}
                        <button onClick={()=> setIsFormVisible(true)}>Edit</button>
                    </div>
                )
            }
        </>
    )
}