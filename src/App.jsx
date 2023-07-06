import { useId, useState } from 'react'
import List from './list'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
const arry = [
  { id: 0, task: "eating", ischecked: false },
  { id: 1, task: "swimming", ischecked: false },
  { id: 2, task: "jogging", ischecked: false },
  { id: 3, task: "riding", ischecked: false },
];

  


function App() {
  //
  const [add,setadd] = useState('');
  const [state, setstate] = useState(arry);
  const [taskmajorArray,settaskchangeArray] = useState(arry)
  const [newid,setnewid] = useState(4);
  // const [isCompleted,setcompleted] = useState(false);
  
  const handleInputChange = (e)=>{
    setadd(e.target.value) 
    setnewid(newid+1)
  }

  const addClick= ()=>{
    setstate([...state,{id:newid,task:add,ischecked:false}])
    settaskchangeArray([...taskmajorArray,{id:newid,task:add,ischecked:false}])
    setadd('');
  }

  const handlecomplete = ()=>{
   
    const Completelist = taskmajorArray.filter(x => x.ischecked);
    setstate(Completelist)
  
  }

  const handleNotComplete = ()=>{
 
      const NotCompletelist = taskmajorArray.filter(x => x.ischecked === false);
      setstate(NotCompletelist)
  }

  const handleAlltask = ()=>{
      
      setstate(taskmajorArray)
  }





  return (
    <>
    <input type='text' value={add} onChange={handleInputChange}/>
    <button onClick={addClick}>ADD</button>
    <div>
      <button onClick={handleAlltask}>ALL</button>
      <button onClick={handlecomplete}>Completed</button>
      <button onClick={handleNotComplete}>Not Completed</button>
    </div>
    <List arry={state} setarry = {setstate} majorarry = {taskmajorArray} setmajorarry = {settaskchangeArray}/>
    
    </>
  )
}

export default App
