import { useState } from 'react'
import MainRouter from '../MainRouter';
import './App.css'
import {NavigationMenuDemo} from './components/NavigationMenuDemo';
import { BrowserRouter } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <BrowserRouter>
      <NavBar/>
      <MainRouter/>

   
      </BrowserRouter>
    </>
  )
}

export default App
