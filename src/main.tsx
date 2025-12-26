import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { NewsLetter } from './App'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <NewsLetter />
  </StrictMode>,
)
