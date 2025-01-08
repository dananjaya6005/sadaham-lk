import React from 'react'
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router";


const Loginbtn = () => {

    
  const navigate = useNavigate();
  const { isSignedIn } = useUser();

  const handleAuthLogic = () => {
    if (isSignedIn) {
      navigate("/settings");
    } else {
      navigate("/login");
    }
  };

  return (
    
    <p
    className="mx-5 cursor-pointer max-[600px]:hidden "
    onClick={() => {
      handleAuthLogic();
    }}
  >
    පිවිසෙන්න
  </p>
  )
}

export default Loginbtn