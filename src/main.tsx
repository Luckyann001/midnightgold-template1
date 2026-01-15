import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App' // 🧞‍♂️ TypeScript will automatically resolve the .tsx extension

// We add a non-null assertion (!) because TypeScript needs to know the element exists
const rootElement = document.getElementById('root')!;

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
)