import { useEffect, useRef, useState } from "react";

const createConnection = () => {
  return {
    connect: () => {
      console.log("connecting");
    },
    disconnect: () => {
      console.log("disconnecting");
    },
  };
};

const CleanUp = () => {
//   const [connect, setdisconnect] = useState(true);
//   const connection = createConnection();
//   useEffect(() => {
//     if (connect) {
//       connection.connect();
//     }
//     return () => {
//         // clearup function 
//       return connection.disconnect();
//     };
//   });

//   console.log("hello")

// const btnRef = useRef(null);
let name;
useEffect(()=>{
    name = setInterval(()=>{
        console.log("hello")
    },1000);
    return ()=>{clearInterval(name)}
},[])
  return (
    <>
      <button >
        connect
      </button>
      <h1>clean up function</h1>
    </>
  );
};

export default CleanUp;
