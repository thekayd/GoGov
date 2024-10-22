"use client"

import React, { useState } from "react"
import { CircleUser } from "lucide-react"
import { FaDiscord, FaGithub } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"
import { MdOutlineMarkEmailRead } from "react-icons/md"

import { cn } from "@/lib/utils"
import useUser from "@/hooks/useUser"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

import Avatar from "./avatar"

export type IconKey = "email" | "github" | "discord" | "google"

export const authProvider = {
  email: {
    Icon: MdOutlineMarkEmailRead,
  },
  github: {
    Icon: FaGithub,
  },
  discord: {
    Icon: FaDiscord,
  },
  google: {
    Icon: FcGoogle,
  },
}

export default function ManageProfile() {
  const [activeTab, setActiveTab] = useState("profile")
  const { data } = useUser()

  const AuthProviderIcon = data?.app_metadata
    ? authProvider[data.app_metadata.provider as IconKey].Icon
    : MdOutlineMarkEmailRead

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button id="manage-profile"></button>
      </DialogTrigger>
      <DialogContent className=" flex w-full flex-col sm:flex-row md:w-[55rem]  ">
        <div className=" h-[100%] w-60 space-y-7 rounded-s-lg p-5 ">
          <div>
            <h1 className="text-2xl font-bold">Account</h1>
            <p className="text-sm dark:text-gray-300 ">
              Manage your account info.
            </p>
          </div>

          <div
            className={cn(
              "flex cursor-pointer items-center gap-2  rounded-lg p-2 text-sm transition-all  ",
              {
                " text-green-700 ring-[0.5px] ring-zinc-400 dark:text-green-500":
                  activeTab == "profile",
              }
            )}
            onClick={() => setActiveTab("profile")}
          >
            <CircleUser />
            <span>Profile</span>
          </div>
        </div>

        <div className="h-full flex-1  space-y-5 divide-y-[0.5px] rounded-lg border-l px-5 py-5 sm:px-10">
          <h1 className="w-36 text-xl font-bold">Profile details</h1>
          <div className="flex items-center py-5  sm:gap-24">
            <h1 className="w-36 text-sm font-medium ">Profile</h1>
            <div className="flex-1 sm:px-3">
              <Avatar />
            </div>
          </div>
          <div className="flex items-center justify-between py-5 sm:gap-24 ">
            <h1 className="w-36 text-sm font-medium">Email</h1>
            <div className="flex flex-1 items-center justify-between sm:pl-3  ">
              <p className="text-sm">{data?.email}</p>
            </div>
          </div>
          <div className="flex items-start gap-2 py-5 sm:gap-24 ">
            <h1 className="w-36 text-sm font-medium  ">Connected accounts</h1>
            <div className="flex-1 space-y-5 ">
              <div className="flex items-center gap-2 px-3">
                <AuthProviderIcon />
                <p className="capitalize">{data?.app_metadata.provider}</p>
                <p className="text-sm text-gray-400">
                  {data?.user_metadata.user_name}
                </p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
