import {  Route, Routes } from 'react-router-dom';
import Bio from './src/pages/bio/Bio';
import Home from './src/pages/home/Home';
import Book from './src/pages/books/Books_bawana';
import Settings from '@/pages/settings/Settings';
import Login from './src/auth/Login';
import Test from './src/pages/test/Test';
import Search from './src/pages/search/Search';

import Books_bawana from './src/pages/books/Books_bawana';

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
import Books_wandana from './src/pages/books/Books_wandana';
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = "pk_test_bmVhcmJ5LW1hcm1vdC0xMS5jbGVyay5hY2NvdW50cy5kZXYk";



export default function MainRouter() {
  return (
    <>
      
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/bio" element={<Bio/>}/>
          <Route path="/books" element={<Book/>}/>
          <Route path="/test" element={<Test/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/books_bawana" element={<Books_bawana/>}/>
          <Route path="/books_wandana" element={<Books_wandana/>}/>
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
