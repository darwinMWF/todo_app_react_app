import { useSelector, useDispatch } from "react-redux";
import { decrement, increment, selectCount } from "./reducers";
import store from "./store";

export const App = () => {
  const count = useSelector(selectCount); // store value select krne k liye
  const dispatch = useDispatch();
console.log(store.getState())
  return (
    <>
      <button onClick={()=>{dispatch(increment())}}>+</button>
      {count}
      <button onClick={()=>{dispatch(decrement())}}>-</button>
    </>
  );
};
