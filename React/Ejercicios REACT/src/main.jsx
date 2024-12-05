import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App5'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
