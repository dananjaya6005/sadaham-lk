import React from 'react';
import { NavigationMenuDemo } from '../components/NavigationMenuDemo';
import sadahamlk from '../assets/sadaham_logo.png';
import { useNavigate } from 'react-router';
import {useUser,} from "@clerk/clerk-react";

const NavBar = ()=>{

    const navigate = useNavigate();
    const {  isSignedIn } = useUser();


    const handleAuthLogic = ()=>{
        if(isSignedIn){
            navigate('/settings');
        }
        else{
            navigate('/login');
        }
    }

    
    return(
        <>
        <div className='flex flex-row justify-between items-center shadow py-2 border-b-2  '>
            <img src={sadahamlk} alt="logo" className='w-14 h-14 mx-5 '/>
        <NavigationMenuDemo/>
        
       
        <p  className='mx-5 cursor-pointer ' onClick={()=>{handleAuthLogic()}} >පිවිසෙන්න</p>
        
        </div>
        
        </>
    );
}
export default NavBar;
