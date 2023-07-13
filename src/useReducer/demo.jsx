
import { useReducer } from "react"

const mnageReducer = (inputName,data)=>{
    if(action.type === 'set'){
        inputName=data.text
        return inputName
        // console.log(inputName)
    }else if(action.type === 'focus'){
       return inputName = data.inputType
        // console.log(inputName)
    }

}

const Demo = ()=>{
    const [inputName,dispatch]  = useReducer(mnageReducer,"")
   
    const handleinputText = (e)=>{
        // console.log(e)
        dispatch({
            type:"set",
            text:e.target.value
        })
        
    }

    const handlefocus = (e)=>{
        // console.log(e)
        dispatch({
            type:"focus",
            inputType:e.type
        })
    }

    return <>
    <input type="text" onChange={handleinputText} onFocus={handlefocus} />
    {inputName}
    {/* <button>add</button> */}
    </>
}

export default Demo