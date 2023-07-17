import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './app'
import store from './data/store'
import './root.css'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store = { store }>
    <App />
  </Provider>
)