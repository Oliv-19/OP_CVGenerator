
function TextArea({id, value, children}){
    return <div id={id} key={id}>
            <textarea key={id} name={id} className={id} defaultValue={value} placeholder={value}/> 
            {children}
        </div>
}
export default function Responsabilitieslist({object, isInput=true}){
    return(
        <div className="responabilities">
            {isInput?(
                <ul>
                    {Object.entries(object).map(([key,value])=><TextArea id={key} key={key} value={value}/>)}
                </ul>
                ):(
                    <ul>
                        {Object.entries(object).map(([key, value])=> value && <li key={key}>{value}</li> )}   
                    </ul>
                )
                
            }
        </div>
    
    )
}