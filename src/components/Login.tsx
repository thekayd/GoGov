"use client";
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import SocialSignIn from "./SocialSignIn";
import Image from "next/image";
import Link from "next/link";

const Login: React.FC = () => {
  return (
    <div className="flex h-screen">
      {/* Left side - Login form */}
      <div className="w-1/2 p-8 flex flex-col justify-start pt-16 items-center">
        <div className="w-4/5 max-w-md">
          <h1 className="text-3xl font-bold mb-2">Welcome back!</h1>
          <p className="text-sm mb-6">
            Enter your credentials to access your account
          </p>

          <form className="space-y-4">
            <InputField
              label="Email address"
              type="email"
              placeholder="Enter your email"
            />
            <div className="relative">
              <InputField
                label="Password"
                type="password"
                placeholder="Enter your password"
              />
              <Link
                href="/forgot-password"
                className="absolute top-0 right-0 text-xs text-blue-600 hover:text-blue-800"
              >
                Forgot password?
              </Link>
            </div>

            <div className="flex items-center mb-4">
              <input type="checkbox" id="remember" className="mr-2" />
              <label htmlFor="remember" className="text-sm">
                Remember for 30 days
              </label>
            </div>

            <Button label="Login" />
          </form>

          <div className="mt-6 text-center">
            <p className="mb-4 font-bold relative">
              <span className="bg-white px-2 z-10 relative">Or</span>
              <span className="absolute inset-x-0 top-1/2 h-px bg-gray-300 -z-1"></span>
            </p>
            <div className="flex justify-center space-x-4">
              <SocialSignIn
                provider="Google"
                onSignIn={() => {}}
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/assets/images/googleimages3.png"
                  alt="Google logo"
                  width={20}
                  height={20}
                />
                <span>Sign in with Google</span>
              </SocialSignIn>
              <SocialSignIn
                provider="Apple"
                onSignIn={() => {}}
                className="flex items-center justify-center space-x-2 bg-white text-gray-700 border border-gray-300 px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              >
                <Image
                  src="/assets/images/apple-logo.png"
                  alt="Apple logo"
                  width={20}
                  height={20}
                />
                <span>Sign in with Apple</span>
              </SocialSignIn>
            </div>
          </div>

          <div className="mt-6 text-center">
            <p>
              Don't have an account?{" "}
              <Link
                href="/register"
                className="text-blue-500 hover:text-blue-700"
              >
                Sign Up
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Right side - Image */}
      <div className="w-1/2 relative">
        <Image
          src="/assets/images/ChrisLee70L1Tdai6Rmunsplash1.jpeg"
          alt="Login background"
          layout="fill"
          objectFit="cover"
          className="rounded-l-3xl"
        />
      </div>
    </div>
  );
};

export default Login;
