import {  Route, Routes } from 'react-router-dom';
import Bio from './src/pages/bio/Bio';
import Home from './src/pages/home/Home';
import Book from './src/pages/books/Books';
import Settings from '@/pages/settings/Settings';
import Login from './src/auth/Login';
import Test from './src/pages/test/Test';
import Search from './src/pages/search/Search';

//catergory

import Dammapadaya from './src/pages/category/Dammapdaya';
import Anushasana from './src/pages/category/Anushasana';
import Suthra from './src/pages/category/Suthra';
import Winaya from './src/pages/category/Winaya';
import Abidarmaya from './src/pages/category/Abidarmaya';
import Bawana from './src/pages/category/Bawana';
import Kamatahan from './src/pages/category/Kamatahan';
import Anumodhana from './src/pages/category/Anumodana';
import Darma_sakachcha from './src/pages/category/Darma_sakachcha';


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
          <Route path="/search" element={<Search/>}/>

          <Route path="/dammapadaya" element={<Dammapadaya/>}/>
          <Route path="/anushasana" element={<Anushasana/>}/>
          <Route path="/suthra" element={<Suthra/>}/>
          <Route path="/winaya" element={<Winaya/>}/>
          <Route path="/abidarmaya" element={<Abidarmaya/>}/>
          <Route path="/bawana" element={<Bawana/>}/>
          <Route path="/kamatahan" element={<Kamatahan/>}/>
          <Route path="/anumodhana" element={<Anumodhana/>}/>
          <Route path="/darma_sakachcha" element={<Darma_sakachcha/>}/>
          
        </Routes>
      

    </>
  )
}
