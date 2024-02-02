
import { NavigationMenuDemo } from "../components/NavigationMenuDemo";
import sadahamlk from "../assets/sadaham_logo.png";
import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { GiHamburgerMenu } from "react-icons/gi";

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
              <GiHamburgerMenu size={35} />
            </SheetTrigger>
            <SheetContent side="left" className="w-[75%]">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <img src={sadahamlk} alt="logo" className="w-14 h-14 mx-5 " />
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
