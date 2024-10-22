"use client"

import React, { useTransition } from "react"
import { useRouter } from "next/navigation"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { IoMdSettings } from "react-icons/io"
import { PiSignOutFill } from "react-icons/pi"

import { createSupabaseBrowser } from "@/lib/supabase/client"
import { cn } from "@/lib/utils"
import useUser from "@/hooks/useUser"
import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import Avatar from "./avatar"
import ManageProfile from "./manage-profile"

export default function UserProfile() {
  const [isSignOut, startSignOut] = useTransition()
  const router = useRouter()
  const { data } = useUser()

  const signout = () => {
    startSignOut(async () => {
      const supabase = createSupabaseBrowser()
      await supabase.auth.signOut()
      router.push("/signin")
    })
  }

  return (
    <div className="w-full">
      <Popover>
        <PopoverTrigger>
          <Avatar />
        </PopoverTrigger>
        <PopoverContent align="end" className="w-[90%] sm:w-[30rem]">
          <div
            className={cn("flex w-[90%] items-start gap-5 sm:w-full", {
              "animate-pulse": isSignOut,
            })}
          >
            <div className="w-10">
              <Avatar />
            </div>
            <div className="w-full flex-1 space-y-5">
              <div>
                <h1>{data?.email}</h1>
              </div>

              <div className="flex w-full gap-2 pr-3 sm:pr-0">
                <Button
                  className="flex h-9  w-1/2 items-center justify-center gap-2 rounded-xl text-sm text-gray-600 dark:text-gray-200"
                  variant="outline"
                  onClick={() => {
                    document.getElementById("manage-profile")?.click()
                  }}
                >
                  <IoMdSettings className="size-5" />
                  Manage Account
                </Button>
                <Button
                  className=" flex h-9  w-1/2 items-center justify-center gap-2 rounded-xl text-sm text-gray-600 dark:text-gray-200"
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
          </div>
        </PopoverContent>
      </Popover>
      <ManageProfile />
    </div>
  )
}
