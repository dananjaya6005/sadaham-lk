
import * as React from "react"
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import wandanaBooks from '@/assets/BannerLogo/wandana_books.png';
import bawanaBooks from '@/assets/BannerLogo/bwana_books.png';

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const components: { title: string; href: string; description: string }[] = [
  {
    title: "සූත්‍ර",
    href: "/suthra",
    description:
      "මූලික වශයෙන් බුද්ධ භාෂිත අඩංගුවන කොටස් මුල් සූත්‍ර ග්‍රන්ථ නමින් හැඳින්වේ",
  },
  {
    title: "විනය",
    href: "/winaya",
    description:
      "භික්ෂු භික්ෂුණියන්ගේ පාලනය සඳහා බුදු රජාණන් වහන්සේ විසින් පැනවු ශික්ෂා පද, ප්‍රඥ්ප්ති, විනය කර්ම ආදිය විනය පිටකයේ අඩංගුය",
  },
  {
    title: "අභිධර්මය",
    href: "/abidarmaya",
    description:
      "භෞතික ලෝකයේ මායා රූපය තේරුම් ගැනීම. සඳහා අභිධර්මය උගෙනීමෙන් ලැබෙන්නේ මහඟු උපකාරයකි.",
  },
  {
    title: "භාවනා",
    href: "/bawana",
    description: "භාවනා කිරීම යනු සිත දියුණු කරගන්නා සුවිශේෂී ක්‍රමයකටයි.",
  },
  {
    title: "අනුමෝදනා",
    href: "/anumodhana",
    description:
      "පින්දීම සහ පින් අනුමෝදන් වීම ගැන දැනගන්න .",
  },
  {
    title: "සාකච්ඡා",
    href: "/darma_sakachcha",
    description:
      "ධර්ම සාකච්චා සවන්දීමට මෙතනින්",
  },

  {
    title: "ධම්ම පදය",
    href: "/dammapadaya",
    description: "බොහෝ ගාථාවන් ධර්ම කරුණු හා සම්බන්ධය"
  },

  {
    title: "අනුශාසනා",
    href: "/anushasana",
    description: "අනන්ත දුක් විඳිමින් භව ගමනක යෙදෙන සංසාරගත සත්ත්වයා දුකින් මුදා ඔසවා තැබීම පිණිස"
  },
]

export function NavigationMenuDemo() {

  const navigate = useNavigate();


  return (
    <NavigationMenu className="" >
      <NavigationMenuList>

      <NavigationMenuItem>
         <Link to="/">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            මුල් පිටුව
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>


        <NavigationMenuItem>
         <Link to="/bio">
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
            චරිතාපදානය
            </NavigationMenuLink>
            </Link>
        </NavigationMenuItem>



        <NavigationMenuItem>
          <NavigationMenuTrigger>දේශනා</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {components.map((component) => (
                <ListItem
                className=" cursor-pointer "
                  key={component.title}
                  title={component.title}
                  onClick={()=>{navigate(component.href)}}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem >
          <NavigationMenuTrigger> පොත්</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3  p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] ">
         
              <ListItem href="/bawanaBooks" title="භාවනා"  >
              වන්දනා පොත්  බැලමට මෙතනින් පිවිසෙන්න
                 <img src={bawanaBooks} alt="bawana" className="w-24 my-2 self-center rounded-md " />
              </ListItem>
              <ListItem href="/wandanaBooks" title="වන්දනා">
              වන්දනා පොත්  බැලමට මෙතනින් පිවිසෙන්න
                <img src={wandanaBooks} alt="wandana" className="w-24 my-2 self-center rounded-md " />
              </ListItem>
           
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-bold leading-none">{title}</div>
          <p className="line-clamp-2 text-sm text-slate-500 leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
