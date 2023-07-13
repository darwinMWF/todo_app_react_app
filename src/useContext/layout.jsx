import { createContext, useContext } from "react";
import headerdata from "./newcontext";

const btnData = createContext();

// console.log(typeof btnData)
const Button = () => {
  const data = useContext(btnData);
  return (
    <>
        {/* {data.arry} */}
      {/* <button id={data.id} onClick={data.setarry}>
        add
      </button> */}
      <button>add</button>
    </>
  );
};

const Header = () => {
    const data = useContext(headerdata);
  return (

    <>
        {data.arry}
        {}
      <Button />
    </>
  );
};

const Layout = () => {
  return (
    <>
      <Header />
    </>
  );
};

const Context = () => {
  const data = {
    arry: ["mukesh", "sueresh"],
    setarry: () => {
      alert("this is context");
    },
    id: 5,
  };

  return (
    <>
      {/* <btnData.Provider value={data}>
        <Layout />
      </btnData.Provider> */}

      <headerdata.Provider value={data}>
      <Layout />
      </headerdata.Provider>

    </>
  );
};

export default Context;
