import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import AppRoutes from './routes'
import SettingsProvider from './contexts/Settings'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <SettingsProvider>
      <AppRoutes />
    </SettingsProvider>
  </React.StrictMode>
)
