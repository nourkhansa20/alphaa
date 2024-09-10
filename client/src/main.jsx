import React from 'react'
import ReactDOM from 'react-dom/client'
import router from './routes'
import { RouterProvider } from 'react-router-dom'
import { ToastProvider } from './moon-ui/Toast'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastProvider>
      <ToastProvider>
        <RouterProvider router={router} />
      </ToastProvider>
    </ToastProvider>
  </React.StrictMode >
)
