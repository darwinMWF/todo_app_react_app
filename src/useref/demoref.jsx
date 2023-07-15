import { useRef, useState } from "react"

// const Demoref = ()=>{

//     const ref = useRef(0);

//     // console.log(ref)

//     return <>
//     <button onClick={()=>{
//         ref.current = ref.current + 1;
//         console.log(ref.current)
//         console.log(ref)
//     }}>click</button>
    
//     </>
// }

// let value ;
const Stopwatch = ()=>{
    const myref = useRef(null);
    const refnew = useRef(null);
    const [startTime,setstartTime] = useState(null);
    const [now,setnow] = useState(null);
    const stopvalue = useRef(null);
    // const lastvalue = useRef(null)

    const handlestart = ()=>{
        setstartTime(Date.now())
        // console.log(stopvalue.current)
        clearInterval(stopvalue.current);
        
      stopvalue.current =  setInterval(()=>{
            setnow(Date.now());
        },10)
    }

    const handlestop =()=>{
        // lastvalue.current = now;
        clearInterval(stopvalue.current)
    }



  


    return <>
    {/* <h1>Time stamp:{startTime !== null && now !== null ? ((now - startTime)/1000).toFixed(3):""}</h1>
    <button onClick={handlestart}>restart</button>
    <button onClick={handlestop}>stop</button> */}

    <input type="text"  />
    {/* <h1 >useref</h1> */}
    <div className="division" ></div>
    
    <button ref={myref} onClick={()=>{
        //  console.log(myref.current.hasAttribute("type"))
        // myref.current.classlist.add("division")
        myref.current.style.border = "none"
        myref.current.style.color = "blue"
        myref.current.style.margin = "10px"
        //  console.log( myref.current.className)
       
    }}>focus</button>

{/* <div ref={myref}>
        {refnew.current !== null ? refnew.current :""}
    </div> */}

    {/* <button onClick={handleafterstop }>pause</button> */}
    </>
}

export default Stopwatch
