import Image from "next/image";
import { AuthForm } from "./(components)/AuthForm";

export default function AuthPage() {
  return (
    <div className="flex h-screen">
      {/* Left side - Sign up form */}
      <div className="w-1/2 p-8 flex flex-col justify-start pt-16 items-center">
        {/* Handles Client Side Rendering of Login/Signup forms based on URL query */}
        <AuthForm />
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 relative">
        <Image
          src="/assets/images/ChrisLee70L1Tdai6Rmunsplash1.jpeg"
          alt="Sign up background"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
}
