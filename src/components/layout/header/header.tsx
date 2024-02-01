"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { headerConfig } from "./header-config"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCode, faPlaneUp } from "@fortawesome/free-solid-svg-icons"


export default function Header() {
  return (
    <div className='w-screen h-24 border-b-2 border-black px-8 bg-gray-700'>
      <nav className="h-full flex items-center gap-x-4">
        <Link href='/'>
          <FontAwesomeIcon icon={faPlaneUp} className="w-10 h-10 text-gray-900"/>
        </Link>
      <NavigationMenu>
        <NavigationMenuList>
          {headerConfig && headerConfig.menuItems.map(menuItem => {
            // Return menu item with sub items
            if(menuItem.subItems) {
              return (
                <NavigationMenuItem key={menuItem.href}>
                  <NavigationMenuTrigger>{menuItem.title}</NavigationMenuTrigger>
                  <MenuContent content={menuItem.subItems} parentHref={menuItem.href} />
                </NavigationMenuItem>
              )
            }
            // Return menu item without sub items
            return (
              <NavigationMenuItem key={menuItem.href}>
                <Link href={menuItem.href} legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>{menuItem.title}</NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>
      </nav>
    </div>
  )
}

type MenuItem = {
  title: string,
  href: string,
  subItems?: Array<MenuItem>
}

type MenuContentProps = {
  content: Array<MenuItem>,
  parentHref: string,
}

function MenuContent({content, parentHref} : MenuContentProps) {
  return (
    <NavigationMenuContent className="w-fit">
      <div className='w-[30rem] h-fit rounded-md shadow-lg p-4 flex gap-x-4 text-nowrap'>
        {content.map(contentItem => {
          return (
            <div key={contentItem.href} className="hover:opacity-80 hover:underline underline-offset-2">
              <Link href={parentHref + contentItem.href}>
                {contentItem.title}
              </Link>
            </div>
          )
        })}
      </div>
    </NavigationMenuContent>
  )
}