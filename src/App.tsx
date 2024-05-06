import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Styles from './App.module.css'
import Home from './Home'

document.body.className = Styles['root']

ReactDOM.createRoot(document.body).render(
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