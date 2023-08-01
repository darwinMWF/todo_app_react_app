import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './core-redux/App.js'
import App from './redux-toolkit/app.js'
import { Provider } from 'react-redux'
// import store from './core-redux/store.jsx'
// import store from './redux-toolkit/store.jsx'
// import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
