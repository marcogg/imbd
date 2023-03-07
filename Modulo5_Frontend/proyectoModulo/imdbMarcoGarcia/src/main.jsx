import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
// Styles
import './App.css'
import './styles/styles.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
)
