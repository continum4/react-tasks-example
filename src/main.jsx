import React from 'react'
import ReactDOM from 'react-dom/client'
import { TaskContextProvider } from "./context/TaskContext";
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TaskContextProvider>
      <App />
    </TaskContextProvider>
  </React.StrictMode>,
)
