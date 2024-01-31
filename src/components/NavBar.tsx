import React from 'react';
import { NavigationMenuDemo } from '../components/NavigationMenuDemo';
import sadahamlk from '../assets/sadaham_logo.png';
import { useNavigate } from 'react-router';

const NavBar = ()=>{

    const navigate = useNavigate();
    
    return(
        <>
        <div className='flex flex-row justify-between items-center shadow py-2 border-b-2  '>
            <img src={sadahamlk} alt="logo" className='w-14 h-14 mx-5 '/>
        <NavigationMenuDemo/>
        
       
        <p  className='mx-5 cursor-pointer ' onClick={()=>{navigate('/settings')}} >පිවිසෙන්න</p>
        
        </div>
        
        </>
    );
}
export default NavBar;
