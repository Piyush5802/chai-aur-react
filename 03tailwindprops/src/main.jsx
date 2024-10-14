import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
    <App username="piyush" otherText="This puppy is so happy"/>
    <App username="piyush"/>
  </StrictMode>,
)
