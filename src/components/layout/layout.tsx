import { ReactNode } from "react"
import Header from "./header/header"
import { Heebo } from "next/font/google"
import { Toaster } from "../ui/toaster"

interface Props {
  children?: ReactNode
}

const heebo = Heebo({subsets: ['latin']})

export default function Layout({children} : Props) {
  return (
    <div className={`max-w-screen min-h-screen overflow-x-hidden ${heebo.className}`}>
      <Header />
      <main className="py-4 px-8">{children}</main>
      <Toaster />
    </div>
  )
}