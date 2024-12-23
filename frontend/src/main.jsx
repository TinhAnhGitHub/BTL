import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext.jsx'
import { GlobalProvider } from './contexts/GlobalContext.jsx';

import router from './routers/router.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <AuthProvider>
      <GlobalProvider>
        <RouterProvider router={router} />
      </GlobalProvider>
    </AuthProvider>
  // </StrictMode>,
)
