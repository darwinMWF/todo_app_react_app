import { useRef } from "react";
import {useDispatch, useSelector } from "react-redux"
import { addtodo,deleteTodo } from "./reducer"

const App = ()=>{
    const refinput = useRef(null);
    const dispatch = useDispatch();
    const taskarry = useSelector(state=>state.todos.task);
   
    return <>
    <input type="text" ref={refinput}/>
    <button onClick={()=>{
        const value = refinput.current.value;
        if(value !== ""){
            dispatch(addtodo(value));
            refinput.current.value = ""
        }
    }}>add</button>
    <ul>{
        taskarry.map(x=>(<li key={x.id}>{x.text}<button onClick={()=>{
            dispatch(deleteTodo(x.id))
        }}>delete</button></li>))
    }</ul>
    </>
}


export default App;