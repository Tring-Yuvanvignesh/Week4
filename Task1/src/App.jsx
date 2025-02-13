import { useState } from 'react'
import Item from './Components/Item/Item'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DisplayData from './Components/Item/DisplayData'

function App() {

  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Item />}></Route>
          <Route path='/Data' element={<DisplayData/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
