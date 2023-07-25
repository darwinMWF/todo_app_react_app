import { useEffect } from "react"
import axios from 'axios';



const Postdata = ()=>{

    const handlesubmmit = async()=>{
        try{
            // let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
            // console.log(response.data)
            let response = await axios.post("http://localhost:3000/data",{data:"mukesh",id:1,arry:[45,78,56]})
            console.log(response)
        }catch(err){
            console.log(err)
        }
       
    }

    useEffect(()=>{
        // fetch("http://localhost:3000/update",{
        //     method: 'put',
        //     body: JSON.stringify({
        //       title: 'data',
        //       body: 'bar',
        //       userId: 1,
        //       email:"mpprajapat"
        //     }),
        //     headers: {
        //       'Content-type': 'application/json; charset=UTF-8'
        //     }}).then(res=>res.json()).then(console.log).catch(console.log)
        // axios.get("http://localhost:3000/update)
        
        }
    ,[])
    return <>
    <button onClick={handlesubmmit}>submit</button>
    </>


}

export default Postdata