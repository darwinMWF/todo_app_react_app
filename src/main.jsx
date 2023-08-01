import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux';
import store from './redux/redux_implementation/store';
// import { BrowserRouter } from 'react-router-dom';

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

// import App from './react-router-dom/app';
// import Postdata from './react-promise/promise-post';
// import { PromiseData } from './react-promise/promise';
// import { Signup } from './formik/form';

//redux
import { App } from './redux/redux_implementation/app';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
)
