// /
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { newBooking, cancelBooking } from "./action";

function App() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.newbooking.booking);
  return (
    <>
    
      <button
        onClick={() => {
          dispatch(newBooking("mukesh", 120));
        }}
      >newbooking
      </button>
      <ul>
        {
          data.map((x,i)=><li key={i}>{x.name}</li>)
        }
      </ul>
    </>
  );
}

export default App;
