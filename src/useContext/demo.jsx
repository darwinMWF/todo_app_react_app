


import Form from "./form"
import headerdata from "./newcontext"

const DemoContext = ()=>{


    return <>
   <headerdata.Provider value={{inputType:"text",btnType : "submit"}}>
   <Form />
   </headerdata.Provider>
    </>
}

export default DemoContext