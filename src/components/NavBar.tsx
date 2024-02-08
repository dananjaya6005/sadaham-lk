
import { NavigationMenuDemo } from "../components/NavigationMenuDemo";
import sadahamlk from "../assets/Asset 2@4x.png";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { GiHamburgerMenu } from "react-icons/gi";
import slideMenuBg  from '../assets/sildeMenuBg.png';
import { ScrollArea } from "@/components/ui/scroll-area"


const slideNavBarItem = [
 
  {
    title : 'සූත්‍ර',
    link : '/suthra'
  },
  {
    title : 'විනය',
    link : '/winaya'
  },
  {
    title : 'අභිධර්මය',
    link : '/abidarmaya'
  },
  {
    title : 'භාවනා',
    link : '/bawana'
  },
  {
    title : 'කමටහන්',
    link : '/kamatahan'
  },
  {
    title : 'සාකච්ඡා',
    link : '/darma_sakachcha'
  },
  {
    title : 'ධම්මපදය',
    link : '/dammapadaya'
  },
  {
    title : 'අනුමෝදනා',
    link : '/anumodhana'
  },
  {
    title : 'අනුශාසනා',
    link : '/anushasana'
  },

]


import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const NavBar = () => {
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
    <>

      <div
        className="flex flex-row justify-between items-center shadow 
        py-2 border-b-2  "
      >
        <div className="hidden max-[600px]:flex ml-4 ">
          <Sheet>
            <SheetTrigger>
              <GiHamburgerMenu color="#804000" size={35} />
            </SheetTrigger>
            <SheetContent style={{
              backgroundImage: `url(${slideMenuBg})`,
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            
            }} side="left" className="w-[75%]">
              <SheetHeader>
                <SheetTitle>සදහම් දේශනා</SheetTitle>
                <SheetDescription>

                <div className="my-3" >
                    <button onClick={()=>{window.open('/','_self') }} className="bg-gradient-to-r from-amber-300 to-amber-500 shadow px-6 text-black w-full py-2 rounded-xl ">මුල්පිටුව</button>
                 </div>

                 <div className="my-3" >
                    <button onClick={()=>{window.open('/bio','_self') }} className="bg-gradient-to-r from-amber-300 to-amber-500 shadow px-6 text-black w-full py-2 rounded-xl ">චරිතාපදානය</button>
                 </div>


              
                <br />
           
                  <hr />

                  <p className="my-4">සදහම් දේශනා වෙත  පිවිසෙන්න.</p>
                  <ScrollArea  className="h-96 max-[380px]:h-80  ">
                 {
                    slideNavBarItem.map((item,index)=>(
                      <div className="my-3" key={index}>
                      <button onClick={()=>{window.open(item.link,'_self') }} className="bg-gradient-to-r from-amber-300 to-amber-500 shadow px-6 text-black w-full py-2 rounded-xl ">{item.title}</button>
                    </div>
                    ))
                 }
                  </ScrollArea>

                  
                  
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <img src={sadahamlk} alt="logo" className="w-20 mx-5  " />
        <div className="max-[600px]:hidden">
          <NavigationMenuDemo />
        </div>

        <p
          className="mx-5 cursor-pointer max-[600px]:hidden "
          onClick={() => {
            handleAuthLogic();
          }}
        >
          පිවිසෙන්න
        </p>
      </div>
    </>
  );
};
export default NavBar;
