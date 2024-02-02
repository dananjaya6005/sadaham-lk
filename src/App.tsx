
import MainRouter from "../MainRouter";
import "./App.css";

import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";
import { ClerkProvider } from "@clerk/clerk-react";

const PUBLISHABLE_KEY = "pk_test_bmVhcmJ5LW1hcm1vdC0xMS5jbGVyay5hY2NvdW50cy5kZXYk";

function App() {
 

  return (
    <>
      <BrowserRouter>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
          <NavBar />
          <MainRouter />
        </ClerkProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
