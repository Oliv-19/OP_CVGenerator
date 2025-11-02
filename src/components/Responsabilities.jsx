


export default function Responsabilitieslist({object, isInput= false}){
    const [obj, setObj]= useState(object)
    return(
        <div className="responabilities">
            {Object.entries(responsabilities).map(([key, value])=> 
                value.length!=0 && isInput? <input key={key} className={key} placeholder={value}/>:<li key={key}>{value}</li>)}
        </div>
    
    )
}