import { useContext } from "react"
import headerdata from "./newcontext"

const Form = ()=>{
    const {inputType,btnType} = useContext(headerdata)
    return <>
    <input type={inputType}/>
    <button>{btnType}</button>
    </>
}

export default Form