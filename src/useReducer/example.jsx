import { useReducer, useState } from "react"

function alertbtn(task,action){
    console.log(task)
    if(action.type === "alert"){
        
        task = action.name;
        console.log(task)
         alert(`hello friends my name ${task}`)

    }
    console.log(task)
}

const Reducer = ()=>{

    const [task,dispatch] = useReducer(alertbtn,"naresh")
    console.log(task)
    return <>
    <button onClick={()=>{
        dispatch({
            type:"alert",name:"mukesh"
        })
    }}>Reducer</button>
    </>
}


export default Reducer