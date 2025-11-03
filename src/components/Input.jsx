
export default function Input({type, id, value}){
    return (<input type={type} name={id} className={id} defaultValue={value}  placeholder={value}/>  )
}