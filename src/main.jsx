import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import MYProjects from './pages/MYProjects';



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <MYProjects /> */}
  </StrictMode>,
)
