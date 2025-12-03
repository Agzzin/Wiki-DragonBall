import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wiki from './pages/WikiInitialPage'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wiki/>
  </StrictMode>,
)
