
import MainRouter from "../MainRouter";
import "./App.css";
import Footer from './components/Footer';

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ClerkProvider } from "@clerk/clerk-react";
import {  Route, Routes } from 'react-router-dom';
import Login from "./auth/Login";
import Settings from "./pages/settings/Settings";


const PUBLISHABLE_KEY = "pk_test_bmVhcmJ5LW1hcm1vdC0xMS5jbGVyay5hY2NvdW50cy5kZXYk";

function App() {
 

  return (
    <>
      <BrowserRouter >
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
        <NavBar />
          <Routes>
            
            <Route path="/login" element={<Login/>}/>
            <Route path="/settings" element={<Settings/>}/>

          </Routes>
            
        </ClerkProvider>
       
          <MainRouter />
          <Footer />
       
      </BrowserRouter>
    </>
  );
}

export default App;
