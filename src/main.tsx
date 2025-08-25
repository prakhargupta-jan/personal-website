import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter } from 'react-router-dom'
import '@/assets/bg.jpg'

createRoot(document.getElementById('root')!).render(
  <div className='h-screen bg-[url(@/assets/bg.jpg)] text-foreground w-screen bg-cover bg-fixed scroll-auto max-h-screen overflow-auto' id="screen">
    <BrowserRouter>
      <StrictMode>
        <App />
      </StrictMode>
    </BrowserRouter>
  </div>
  ,
)
