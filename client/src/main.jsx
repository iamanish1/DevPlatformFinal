import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import AppRoutes from './routes/Routes.jsx'
import {AuthProvider} from './Context/AuthContext.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
     {/* Your app components go here */}
    < AppRoutes/>
    </AuthProvider>
  </StrictMode>,
  
)
