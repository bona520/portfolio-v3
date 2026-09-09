import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource-variable/inter'
import '@fontsource-variable/noto-sans-khmer'
import '@styles/index.css'
import { initDisableDevtool } from '@libs/utils.ts'

initDisableDevtool()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
