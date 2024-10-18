"use client"

import Image from "next/image"
import Link from "next/link"
import { useSearchParams } from "next/navigation"

import LoginForm from "./LoginForm"
import RegisterForm from "./RegisterForm"
import SocialSignIn from "./SocialSignIn"

export function AuthForm() {
  // The state is stored & sourced in the URL
  const params = useSearchParams()
  const state = params?.get("state") || "register"

  return (
    <div className="w-4/5 max-w-md space-y-10">
      <div className="flex w-full flex-col items-center justify-center gap-1">
        <h1 className="text-center text-3xl font-bold">
          {state === "login" && "Welcome back!"}
          {state === "register" && "Get Started Now"}
        </h1>
        {state === "login" && (
          <p className="text-center  text-sm">
            Enter your credentials to access your account
          </p>
        )}
      </div>

      <div className="space-y-3">
        {/* Stateful rendering of Auth Forms */}
        {state === "login" && <LoginForm />}
        {state === "register" && <RegisterForm />}

        <div className="mt-4 text-center">
          <p className="mb-2 font-bold">or</p>
          <div className="flex justify-center">
            <SocialSignIn
              provider="Google"
              className="inline-flex items-center justify-center space-x-2 rounded-md border border-gray-300 bg-white px-4 py-2 text-gray-700 transition-colors hover:bg-gray-50"
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
      </div>

      <div className="mt-4 text-center">
        <p>
          {state === "login" && "Don't have an account? "}
          {state === "register" && "Already have an account?"}{" "}
          <Link
            href={`/auth?state=${state === "login" ? "register" : "login"}`}
            className="text-blue-500 hover:cursor-pointer hover:text-blue-700"
          >
            {state === "login" && "Sign Up"}
            {state === "register" && "Sign In"}
          </Link>
        </p>
      </div>
    </div>
  )
}
