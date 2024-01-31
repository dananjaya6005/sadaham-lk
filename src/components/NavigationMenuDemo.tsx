
import * as React from "react"
import { Link } from "react-router-dom";

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
    href: "/docs/primitives/alert-dialog",
    description:
      "මූලික වශයෙන් බුද්ධ භාෂිත අඩංගුවන කොටස් මුල් සූත්‍ර ග්‍රන්ථ නමින් හැඳින්වේ",
  },
  {
    title: "විනය",
    href: "/docs/primitives/hover-card",
    description:
      "භික්ෂු භික්ෂුණියන්ගේ පාලනය සඳහා බුදු රජාණන් වහන්සේ විසින් පැනවු ශික්ෂා පද, ප්‍රඥ්ප්ති, විනය කර්ම ආදිය විනය පිටකයේ අඩංගුය",
  },
  {
    title: "අභිධර්මය",
    href: "/docs/primitives/progress",
    description:
      "භෞතික ලෝකයේ මායා රූපය තේරුම් ගැනීම. සඳහා අභිධර්මය උගෙනීමෙන් ලැබෙන්නේ මහඟු උපකාරයකි.",
  },
  {
    title: "භාවනා",
    href: "/docs/primitives/scroll-area",
    description: "භාවනා කිරීම යනු සිත දියුණු කරගන්නා සුවිශේෂී ක්‍රමයකටයි.",
  },
  {
    title: "කමටහන්",
    href: "/docs/primitives/tabs",
    description:
      "චරිත ස්වභාවය අනුව භාවනා කිරීම සඳහා කමටහන් තෝරා ගැනීම වැදගත් වන අතර භාවනාවට අවශ්‍ය මූලික අවබෝධයත්, පසුබිමත්, සීලයත්, සම්පූර්ණ කොට ගෙන අනතුරුව සමාධි හා විපස්සනා භාවනා ක්‍රම දෙකින් සමාධි භාවනාව ආරම්භ කිරීම යෝග්‍ය වේ.",
  },
  {
    title: "සාකච්ඡා",
    href: "/docs/primitives/tooltip",
    description:
      "ධර්ම සාකච්චා සවන්දීමට මෙතනින්",
  },
]

export function NavigationMenuDemo() {
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
                  key={component.title}
                  title={component.title}
                  href={component.href}
                >
                  {component.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger> පොත්</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-4 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
         
              <ListItem href="/docs" title="Introduction">
                Re-usable components built using Radix UI and Tailwind CSS.
              </ListItem>
              <ListItem href="/docs/installation" title="Installation">
                How to install dependencies and structure your app.
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
