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
import { faCode } from "@fortawesome/free-solid-svg-icons"


export default function Header() {
  return (
    <div className='w-screen h-24 border-b-2 border-black px-8'>
      <nav className="h-full flex items-center gap-x-4">
        <Link href='/'>
          <FontAwesomeIcon icon={faCode} className="w-10 h-10"/>
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
      <ul className='w-[25vw] h-fit rounded-md shadow-lg p-4'>
        {content.map(contentItem => {
          return (
            <li key={contentItem.href} className="hover:opacity-80 hover:underline underline-offset-2">
              <Link href={parentHref + contentItem.href}>
                {contentItem.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </NavigationMenuContent>
  )
}