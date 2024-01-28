import { useState } from 'react'

import './App.css'
import {NavigationMenuDemo} from './components/NavigationMenuDemo';
import { BrowserRouter , Route, Routes } from 'react-router-dom';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <NavigationMenuDemo/>
   
      </BrowserRouter>



      
    </>
  )
}

export default App
