import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "swiper/swiper.css";
import {RouterProvider} from "react-router-dom"
import { router } from './utils/router.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/*@ts-ignore */}
    <RouterProvider  router={router} >
    <App />
    </RouterProvider>
  </React.StrictMode>,
)
