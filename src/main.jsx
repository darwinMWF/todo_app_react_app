import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
// import NewApp from './useReducer/app'
// import Reducer from './useReducer/example'
// import './index.css'

// import Demo from './useReducer/demo'
// import Context from './useContext/layout'

// import DemoContext from './useContext/demo'
// import Demoref from './useref/demoref'
// import Stopwatch from './useref/demoref'
// import App from './useEffect/app'
// import CleanUp from './useEffect/cleanUp'

import App from './react-router-dom/app';
import Postdata from './react-promise/promise-post';
// import { PromiseData } from './react-promise/promise';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Postdata/>
  </React.StrictMode>,
)
