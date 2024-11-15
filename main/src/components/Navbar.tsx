"use client"

import Link from "next/link"
import { US, ZA } from "country-flag-icons/react/3x2"
import { MenuIcon, MountainIcon } from "lucide-react"

import { getNavbarRoutes } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function Navbar() {
  return (
    <nav className="flex items-center  justify-between bg-white px-4 py-4 dark:bg-gray-800 md:px-9">
      <Link href="#" className="flex w-8 items-center gap-2" prefetch={false}>
        <ZA />
      </Link>
      <div className="hidden gap-4 md:flex">
        {getNavbarRoutes().map((route) => (
          <Link
            key={route.path}
            href={route.path}
            className="text-lg font-medium underline-offset-4 hover:underline"
            prefetch={false}
          >
            {route.title}
          </Link>
        ))}
      </div>
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="md:hidden">
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <div className="grid w-[200px] p-4">
            {getNavbarRoutes().map((route) => (
              <Link
                key={route.path}
                href={route.path}
                className="text-lg font-medium underline-offset-4 hover:underline"
                prefetch={false}
              >
                {route.title}
              </Link>
            ))}
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  )
}
