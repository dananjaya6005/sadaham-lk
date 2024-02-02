import { useState } from "react";
import { useSignIn } from "@clerk/clerk-react";
import { useNavigate } from "react-router";

 
export default function Login() {
  const { isLoaded, signIn, setActive } = useSignIn();
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
    const navigate = useNavigate();
  


  // start the sign In process.
  const handleSubmit = async (e : any) => {
    e.preventDefault();
    if (!isLoaded) {
      return;
    }
 
    try {
      const result = await signIn.create({
        identifier: emailAddress,
        password,
      });
 
      if (result.status === "complete") {
        console.log(result);
        await setActive({ session: result.createdSessionId });
        navigate('/settings');
        
      }
      else {
        /*Investigate why the login hasn't completed */
        console.log(result);
      }
 
    } catch (err: any) {
      console.error("error", err.errors[0].longMessage)
    }
  };
 
  return (
    <div className="w-screen  flex justify-center h-screen items-center " >
      <form className="w-1/5" >
        <h1 className="text-xl text-center my-3 font-semibold  text-slate-800 ">පරිපාලක පිවිසුම</h1>
        <div className="flex flex-col my-2 ">
          <label className="font-semibold text-slate-700 my-2 text-sm " htmlFor="email">පරිශීලක නාමය</label>
          <input placeholder="පරිශීලක නාමය ඇතුලත් කරන්න" className="border-2 rounded border-slate-500  px-3 py-2 text-xs "  onChange={(e) => setEmailAddress(e.target.value)} id="email" name="email" type="email" />
        </div>
        <div className="flex flex-col" >
          <label className="font-semibold text-slate-700 my-2 text-sm" htmlFor="password">මුරපදය</label>
          <input placeholder="මුරපදය ඇතුලත් කරන්න" type='password' className="border-2 rounded border-slate-500 px-3 py-2 text-xs " onChange={(e) => setPassword(e.target.value)} id="password" name="password"  />
        </div>
        <button className="bg-slate-800 text-white px-6 py-2 rounded-lg my-5 hover:bg-slate-600 duration-500" onClick={handleSubmit}>Log In </button>
      </form>
    </div>
  );
}