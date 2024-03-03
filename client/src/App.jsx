import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'

function App() {

  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>

    </>
  )
}

export default App
