import { useState } from "react";
import { useEffect } from "react";
import "./list.css";

const List = ({ arry, majorarry, setmajorarry }) => {
  //     const[newdata,setdata] = useState([])
  //    useEffect(()=>{
  //         setdata(list)
  //    })

  const deletehandler = (id) => {
    const afterdeletelist = arry.filter((x) => x.id !== id);
    setarry(afterdeletelist);
  };

  const handleCheckbox = (id) => {
    const newArry = majorarry.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked: !data.ischecked ? true : false };
      } else {
        return data;
      }
    });
    
    setmajorarry(newArry);
    
  };

  const list = arry.map((x) => (
    <li key={x.id}>
      <input
        type="checkbox"
        onChange={() => {
          handleCheckbox(x.id);
        }}
        defaultChecked={x.ischecked ? true : false}
      />
      {x.task}
      &nbsp;
      <button
        onClick={() => {
          deletehandler(x.id);
        }}
      >
        delete
      </button>
      <button>edit</button>
    </li>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default List;
