import './App.css'
import { Routes, Route } from 'react-router'
import Home from './Pages/Home'
import Dashboard from './Pages/Dashboard'
import Todo from './Pages/Todo'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/todo" element={<Todo />} />
      </Routes>

    </>
  )
}

export default App
