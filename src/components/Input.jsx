
export default function Input({type, id, value}){
    let placeholder = value
    if(id.includes('Date')) {
        type = 'month' 
        placeholder="Date: MMYYYY"
    }else if(id.includes('email')) type = 'email'
    else if(id.includes('phone')) type = 'tel'
    return (     
        <input type={type} name={id} className={id} defaultValue={value}  placeholder={placeholder}/> 
            
    )
}