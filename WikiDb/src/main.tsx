import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wiki from './WikiInitialPage.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Wiki/>
  </StrictMode>,
)
