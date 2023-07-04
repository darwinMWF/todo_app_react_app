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
  const [newid,setnewid] = useState(4);
  const [isCompleted,setcompleted] = useState(false);
  
  const handleInputChange = (e)=>{
    setadd(e.target.value) 
    setnewid(newid+1)
    // set input 's value to the add variable
  }

  const addClick= ()=>{
    setstate([...state,{id:newid,task:add,ischecked:false}]);
    setadd('');// for empty input after adding
  }

  const handlecomplete = ()=>{
    setcompleted(!isCompleted);
    console.log(isCompleted)
  }





  return (
    <>
    <input type='text' value={add} onChange={handleInputChange}/>
    <button onClick={addClick}>ADD</button>
    <div>
      <button>ALL</button>
      <button onClick={handlecomplete}>Completed</button>
      <button>Not Completed</button>
    </div>
    <List arry={state} setarry={setstate} checkcompleted = {isCompleted} />
    
    </>
  )
}

export default App
