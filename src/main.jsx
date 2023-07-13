import React from 'react'
import ReactDOM from 'react-dom/client'
// import NewApp from './useReducer/app'
// import Reducer from './useReducer/example'
// import './index.css'

// import Demo from './useReducer/demo'
// import Context from './useContext/layout'

import DemoContext from './useContext/demo'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <DemoContext />
  </React.StrictMode>,
)
