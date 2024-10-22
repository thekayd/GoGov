import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative h-[90vh]">
      {" "}
      {/* Changed from h-screen to h-[90vh] */}
      <Image
        src="/assets/images/ChrisLee70L1Tdai6Rmunsplash1.jpeg"
        alt="Hero"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
        <div className="text-center text-white">
          <h1 className="mb-4 text-5xl font-bold">
            Welcome to the
            <br />
            South African
            <br />
            Citizen Portal
          </h1>
          <p className="mb-8 text-xl">
            Discover an unparalleled journey filled with adventure.
          </p>
          <Button>
            <Link href="/dashboard">Access your portal now</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
