import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'

const root = document.getElementById('root')

if (root) {
  ReactDOM.createRoot(root).render(
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/docs"/>
          <Route path="/blog"/>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  )
} else {
  throw new Error('No root element found')
}