import { useState } from "react";
import { useEffect } from "react";
import "./list.css";

const List = ({ arry, setarry, checkcompleted }) => {
//     const[newdata,setdata] = useState([])
//    useEffect(()=>{
//         setdata(list)
//    })

  const handleCheckbox = (id) => {
    const newArry = arry.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked: !data.ischecked ? true : false };
      } else {
        return data;
      }
    });

    setarry(newArry);
    console.log(newArry);
  };

  const list = arry.map((x) => (
    <li key={x.id}>
      <input
        type="checkbox"
        onChange={() => {
          handleCheckbox(x.id);
        }}
      />
      {x.task}
      &nbsp;
      <button>delete</button>
      <button>edit</button>
    </li>
  ));

  const completedList = arry.filter(x=>{
    if(x.ischecked){
        return <li key={x.id}>
        <input
          type="checkbox"
          onChange={() => {
            handleCheckbox(x.id);
          }}
        />
        {x.task}
        &nbsp;
        <button>delete</button>
        <button>edit</button>
      </li>
    }
  }) 
  return (
    <>
      <ul>{newdata}</ul>
     
    </>
  );
};

export default List;
