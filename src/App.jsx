import { useId, useState } from "react";
import List from "./list";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
const arry = [
  { id: 0, task: "eating", ischecked: false, isedited: false, isdelete: false },
  {
    id: 1,
    task: "swimming",
    ischecked: false,
    isedited: false,
    isdelete: false,
  },
  {
    id: 2,
    task: "jogging",
    ischecked: false,
    isedited: false,
    isdelete: false,
  },
  { id: 3, task: "riding", ischecked: false, isedited: false, isdelete: false },
];

function App() {
  //
  const [add, setadd] = useState("");
  const [state, setstate] = useState(arry);
  const [taskmajorArray, settaskchangeArray] = useState(arry);
  const [newid, setnewid] = useState(4);

  const handleInputChange = (e) => {
    setadd(e.target.value);
    setnewid(newid + 1);
  };

  const addClick = () => {
    setstate([
      ...state,
      {
        id: newid,
        task: add,
        ischecked: false,
        isedited: false,
        isdelete: false,
      },
    ]);
    settaskchangeArray([
      ...taskmajorArray,
      {
        id: newid,
        task: add,
        ischecked: false,
        isedited: false,
        isdelete: false,
      },
    ]);
    setadd("");
  };

  const handlecomplete = () => {
    const Completelist = taskmajorArray.filter(
      (x) => x.ischecked && !x.isdelete
    );
    setstate(Completelist);
  };

  const handleNotComplete = () => {
    const NotCompletelist = taskmajorArray.filter(
      (x) => x.ischecked == false && x.isdelete == false
    );
    setstate(NotCompletelist);
  };

  const handleAlltask = () => {
    const list = taskmajorArray.filter((x) => !x.isdelete);
    setstate(list);
  };

  return (
    <>
      <input type="text" value={add} onChange={handleInputChange} />
      <button onClick={addClick}>ADD</button>
      <div>
        <button onClick={handleAlltask}>ALL</button>
        <button onClick={handlecomplete}>Completed</button>
        <button onClick={handleNotComplete}>Not Completed</button>
        <button>undo</button>
      </div>
      <List
        arry={state}
        setarry={setstate}
        majorarry={taskmajorArray}
        setmajorarry={settaskchangeArray}
      />
    </>
  );
}

export default App;
