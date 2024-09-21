import SocialSignIn from "@/components/SocialSignIn";
import RegisterForm from "./(components)/RegisterForm";
import Link from "next/link";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <div className="flex h-screen">
      {/* Left side - Sign up form */}
      <div className="w-1/2 p-8 flex flex-col justify-start pt-16 items-center">
        <div className="w-4/5 max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">Get Started Now</h1>
          <RegisterForm />

          <div className="mt-4 text-center">
            <p className="mb-2 font-bold">or</p>
            <div className="flex justify-center">
              <SocialSignIn
                provider="Google"
                className="inline-flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/assets/images/googleimages3.png"
                  alt="Google logo"
                  width={20}
                  height={20}
                />
                <span>Sign in with Google</span>
              </SocialSignIn>
            </div>
          </div>

          <div className="mt-4 text-center">
            <p>
              Already have an account?{" "}
              <Link href="/login" className="text-blue-500 hover:text-blue-700">
                Sign In
              </Link>
            </p>
          </div>
        </div>
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
