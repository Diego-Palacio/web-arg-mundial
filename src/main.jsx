import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import {  createHashRouter,RouterProvider,BrowserRouter, Router } from 'react-router-dom'
import { Partido } from './componentes/Partido'
import { Goles } from './componentes/Goles'


ReactDOM.createRoot(document.getElementById('root')).render(
  
  <React.StrictMode>
  
  <App/>
  
  </React.StrictMode>
  
)
