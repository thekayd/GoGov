"use client"

import React, { useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { UserCircleIcon } from "lucide-react"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { IoMdSettings } from "react-icons/io"
import { PiSignOutFill } from "react-icons/pi"

import { siteMapData } from "@/config/site"
import { createSupabaseBrowser } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import useUser from "@/hooks/useUser"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Typography from "../ui/typography"

export default function UserProfile() {
  const [isSignOut, startSignOut] = useTransition()
  const router = useRouter()
  const { data } = useUser()

  const signout = () => {
    startSignOut(async () => {
      const supabase = createSupabaseBrowser()
      supabase.auth.signOut().then(() => {
        router.push("/auth")
      })
      await supabase.auth.signOut()
      router.push("/auth")
    })
  }

  console.log("User: ", data)

  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger>
          {data?.email ? <UserCircleIcon /> : <Button size="sm">Login</Button>}
        </PopoverTrigger>
        <PopoverContent align="end" className="w-[90%] sm:w-[30rem]">
          <div
            className={cn("flex w-[90%] flex-col items-start gap-5 sm:w-full", {
              "animate-pulse": isSignOut,
            })}
          >
            <div className="flex w-full items-center justify-center gap-3">
              <UserCircleIcon />
              <Typography variant={"p"} affects={"removePMargin"}>
                {data?.email}
              </Typography>
            </div>
            <div className="flex w-full gap-2 pr-3 sm:pr-0">
              <Link
                className={buttonVariants({
                  variant: "outline",
                  className:
                    "flex h-9 w-full items-center justify-center gap-2 rounded-xl text-sm text-gray-600 dark:text-gray-200",
                })}
                href={siteMapData.Dashboard.children.Profile.path}
              >
                <IoMdSettings className="size-5" />
                Manage Account
              </Link>
              <Button
                className=" flex h-9  w-full items-center justify-center gap-2 rounded-xl text-sm text-gray-600 dark:text-gray-200"
                variant="outline"
                onClick={signout}
              >
                {!isSignOut ? (
                  <PiSignOutFill className="size-5" />
                ) : (
                  <AiOutlineLoading3Quarters className="size-4 animate-spin" />
                )}
                SignOut
              </Button>
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
