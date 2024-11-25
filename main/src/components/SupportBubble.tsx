import Image from "next/image"
import Link from "next/link"
import { MessageCircle } from "lucide-react"

import { siteMapData } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"

export function SupportBubble() {
  return (
    <div className="fixed bottom-4 right-4 flex items-center space-x-4 rounded-full bg-primary p-2 text-primary-foreground shadow-lg">
      <div className="group relative h-12 w-12 overflow-hidden rounded-full border-2 border-primary-foreground">
        <Link href={siteMapData.Support.path}>
          <Image
            src="/sa-guy.png"
            alt="AI Mascot"
            width={100}
            height={100}
            objectFit="cover"
            className="transition-transform duration-500 ease-in-out group-hover:scale-110"
          />
        </Link>
      </div>
      <Link href={siteMapData.Support.path} className="hidden pr-4 sm:block">
        <p className="font-medium group-hover:visible">
          Need help? Chat to our AI chatbot for support
        </p>
      </Link>
    </div>
  )
}
