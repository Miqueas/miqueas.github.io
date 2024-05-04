import { Routes, Route, Outlet } from 'react-router-dom'
import Home from './Home'
import './App.css'

function Layout() {
  return (
    <>
      <Outlet />
    </>
  )
}

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}