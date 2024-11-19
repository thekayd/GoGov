import Image from "next/image"

import { AuthForm } from "./(components)/AuthForm"

export default function AuthPage() {
  return (
    <div className="flex h-screen">
      {/* Left side - Sign up form */}
      <div className="flex w-full flex-col items-center justify-start p-8 pt-16 md:w-1/2">
        {/* Handles Client Side Rendering of Login/Signup forms based on URL query */}
        <AuthForm />
      </div>

      {/* Right side - Image */}
      <div className="relative hidden w-1/2 md:block">
        <Image
          src="/assets/images/ChrisLee70L1Tdai6Rmunsplash1.jpeg"
          alt="Sign up background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  )
}
