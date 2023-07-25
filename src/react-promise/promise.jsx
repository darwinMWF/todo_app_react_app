import { useEffect, useState } from "react";
import './promise.css'
let  imglist  = [];
export const PromiseData = () => {
 
  const [arry, setarry] = useState([]);
  
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((res) => setarry(res))
      .catch(alert);


    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((response) => response.json())
      .then((res) => {
        imglist = res.map(x=>x.url)
    })
      .catch(alert);
  }, []);


  const list = arry.map((x,index)=><div>
    <img src={imglist[index]} alt="imges" />
    <h5>{x.body}</h5>
  </div>)



  
  // const list = arry.map(data=>(<tr>
  //         <td>{data.id}</td>
  //         <td>{data.name}</td>
  //         <td>{data.email}</td>
  //         <td>{data.phone}</td>
  //     </tr>))

  return (
    <>
    {list}
      {/* <table>
        <th>
            <td>id</td>
            <td>name</td>
            <td>Email</td>
            <td>phone</td>
        </th>
        <tbody>
        
        </tbody>
        
        
    </table> */}
    </>
  );
};
