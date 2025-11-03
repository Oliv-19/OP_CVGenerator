import { useState } from 'react'
export default function Responsabilitieslist({object, isInput=true}){
    return(
        <div className="responabilities">
            {isInput?(
                <>
                    {Object.entries(object).map(([key, value])=> 
                        value && <input key={key} name={key} className={key} defaultValue={value} placeholder={value}/> 
                    )}
                    
                </>
                ):(
                    <ul>
                        {Object.entries(object).map(([key, value])=> value && <li key={key}>{value}</li> )}   
                    </ul>
                )
                
            }
        </div>
    
    )
}