import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ReactRouter } from './router/index.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ReactRouter />,
)
