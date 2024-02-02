
import {  Route, Routes } from 'react-router-dom';
import Bio from './src/pages/bio/Bio';
import Home from './src/pages/home/Home';
import Book from './src/pages/books/Books';
import Settings from '@/pages/settings/Settings';
import Login from './src/auth/Login';
import Test from './src/pages/test/Test';


export default function MainRouter() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bio" element={<Bio/>}/>
          <Route path="/books" element={<Book/>}/>
          <Route path="/settings" element={<Settings/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/test" element={<Test/>}/>
        </Routes>
      

    </>
  )
}
