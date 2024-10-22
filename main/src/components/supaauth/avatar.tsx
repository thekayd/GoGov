import React from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"
import useUser from "@/hooks/useUser"

const Avatar = () => {
  const { data, isFetching } = useUser()
  const imageUrl = data?.user_metadata?.avatar_url

  return (
    <div
      className={cn(
        " h-10 w-10 transition-all",
        isFetching ? "translate-y-2 opacity-0" : "opacity-1 translate-y-0"
      )}
    >
      {!imageUrl ? (
        <div className=" grid h-10 w-10    place-content-center rounded-full border transition-all hover:scale-105">
          <p className="-translate-y-1 text-4xl">{data?.email?.[0]}</p>
        </div>
      ) : (
        <Image
          src={imageUrl}
          alt=""
          width={50}
          height={50}
          className={cn(
            " rounded-full border p-1 transition-all duration-500 hover:scale-105",
            isFetching ? "translate-y-2 opacity-0" : "opacity-1 translate-y-0"
          )}
        />
      )}
    </div>
  )
}

export default Avatar
