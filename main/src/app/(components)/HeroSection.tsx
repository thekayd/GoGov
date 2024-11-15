import Image from "next/image"
import Link from "next/link"

import { siteMapData } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import Typography from "@/components/ui/typography"

export function HeroSection() {
  return (
    <section className="relative h-[50vh] w-full">
      <Image
        src="/assets/cape-town-bay.jpg"
        alt="Hero"
        layout="fill"
        objectFit="cover "
        objectPosition="center"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="flex flex-col gap-4 px-4 text-center text-white">
          <div className="space-y-3">
            <Typography variant={"h1"}>Discover South Africa</Typography>
            <Typography variant={"p"}>
              Discover an unparalleled journey filled with adventure.
            </Typography>
          </div>
          <div className="space-x-4">
            <Link
              href={siteMapData.Auth.path}
              className={buttonVariants({ className: "" })}
            >
              Access Your Portal
            </Link>
            <Link
              href="/dashboard"
              className={buttonVariants({
                className:
                  "text-secondary-foreground hover:text-primary-foreground",
                variant: "outline",
              })}
            >
              Departments
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
