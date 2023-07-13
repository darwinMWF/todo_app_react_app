import { useState } from "react";
import { useEffect } from "react";
import "./list.css";

const List = ({ arry, setarry, majorarry, setmajorarry }) => {
  //     const[newdata,setdata] = useState([])
  //    useEffect(()=>{
  //         setdata(list)
  //    })

  const [editinputvalue,seteditinputvalue] = useState("");

  const deletehandler = (id) => {
    const afterdeletelist = arry.filter((x) => x.id !== id);

    const changedeletd = majorarry.map((x)=>{
      if(x.id == id){
        const data =  {...x,isdelete:!x.isdelete}
       
        return data
      }
      return x;
    })

    
    setmajorarry(changedeletd);
    setarry(afterdeletelist);
  };

  const handleCheckbox = (id) => {
    const checkarry = arry.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked: !data.ischecked ? true : false };
      } else {
        return data;
      }
    });

    const checkeMajorArry = majorarry.map((data) => {
      if (data.id == id) {
        return { ...data, ischecked: !data.ischecked };
      } else {
        return data;
      }
    });

    setarry(checkarry);
    setmajorarry(checkeMajorArry);
    
  };


  const handleEditbtn = (id)=>{
    const list = arry.map((x)=>{
      if(x.id == id){
        if(x.isedited){
          return {...x,task:editinputvalue,isedited:!x.isedited}
        }
        return {...x,isedited:!x.isedited};
      }else{
        return x;
      }
    })


    const majorlist = majorarry.map((x)=>{
      if(x.id == id){
        return {...x,task:editinputvalue};
      }else{
        return x;
      }
    })

    setarry(list);
    setmajorarry(majorlist)


  }

  const edittask  = (e)=>{
    seteditinputvalue(e.target.value);
  } 

  const list = arry.map((x) => (
    <li key={x.id}>
      {x.isedited && <input type="text" onChange={edittask} defaultValue={x.task}/>}
      {!x.isedited && <input type="checkbox" onChange={()=>{
        handleCheckbox(x.id)
      }} defaultChecked={x.ischecked?true:false}/>}
      {!x.isedited && x.task}
      &nbsp;
      <button
        onClick={() => {
          deletehandler(x.id);
        }}
      >
        delete
      </button>
      <button onClick={()=>{
        handleEditbtn(x.id)
      }}>edit</button>
      
    </li>
  ));

  return (
    <>
      <ul>{list}</ul>
    </>
  );
};

export default List;
