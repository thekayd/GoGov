import Image from "next/image"

import { Card, CardContent } from "./ui/card"

export default function WelcomeBanner() {
  return (
    <Card className="w-full overflow-hidden">
      <CardContent className="p-0">
        <div className="relative h-[200px] md:h-[300px]">
          <Image
            src="/welcome-banner.jpg"
            alt="South African landscape"
            layout="fill"
            objectFit="cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/40" />
          <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12">
            <h1 className="mb-2 text-2xl font-bold text-white md:text-4xl">
              Welcome to Your Dashboard
            </h1>
            <p className="text-lg text-white/90 md:text-xl">
              Explore opportunities and services for South African citizens
            </p>
          </div>
        </div>
        <div className="bg-primary/10 p-4 md:p-6">
          <div className="flex items-center justify-center space-x-4">
            <div className="relative h-8 w-12">
              <Image
                src="/sa-guy.png"
                alt="South African flag"
                width={90}
                height={90}
                objectFit="contain"
              />
            </div>
            <p className="text-sm text-muted-foreground md:text-base">
              Access government services, check your status, and stay informed
              about important updates.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
