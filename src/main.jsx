import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { ThemeProvider } from './contexts/ThemeContext.jsx'
import './assets/css/tailwind.css'
import App from './App.jsx'


createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    {/* <ThemeProvider> */}
      <App/>
    {/* </ThemeProvider> */}
  </StrictMode>,
)
