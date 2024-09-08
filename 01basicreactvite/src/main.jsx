import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

const reactemement = React.createElement('a',{
  href:'https://google.com',
  targer:'_blank'
  },
  "click to visit google"
  )

createRoot(
  document.getElementById('root')).render(
    <>
    <>
    {reactemement}
    </>
    <App/>
    </>
)
