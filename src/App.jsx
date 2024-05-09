// import  from 'react'
import { Route, Routes } from 'react-router-dom'

import Home from './screens/Home.jsx'

import './App.scss'

function App() {

  return (
    <>
     <div className="app-container">
       <Routes>
        <Route path="/" element={<Home />} />
       </Routes>
     </div>
    </>
  )
}

export default App
