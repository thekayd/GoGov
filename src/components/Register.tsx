"use client"; // Add this line at the top of the file
import React from "react";
import InputField from "./InputField";
import Button from "./Button";
import SocialSignIn from "./SocialSignIn";
import Image from "next/image";
import Link from "next/link";

const Register: React.FC = () => {
  const provinces = [
    "Eastern Cape",
    "Free State",
    "Gauteng",
    "KwaZulu-Natal",
    "Limpopo",
    "Mpumalanga",
    "Northern Cape",
    "North West",
    "Western Cape",
  ];

  return (
    <div className="flex h-screen">
      {/* Left side - Sign up form */}
      <div className="w-1/2 p-8 flex flex-col justify-start pt-16 items-center">
        <div className="w-4/5 max-w-md">
          <h1 className="text-3xl font-bold mb-6 text-center">
            Get Started Now
          </h1>
          <form className="space-y-4">
            <InputField
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
            />
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email"
            />
            <InputField
              label="Password"
              type="password"
              placeholder="Create a password"
            />

            <div className="mt-4">
              <label className="block text-sm font-bold mb-2">
                Select a Province
              </label>
              <p className="text-sm mb-2">
                Please select your primary province from the list
              </p>
              <select className="w-full p-2 border rounded">
                <option value="">Select a province</option>
                {provinces.map((province, index) => (
                  <option key={index} value={province}>
                    {province}
                  </option>
                ))}
              </select>
            </div>

            <Button label="Sign Up" />
          </form>

          <div className="mt-4 text-center">
            <p className="mb-2 font-bold">or</p>
            <div className="flex justify-center">
              <SocialSignIn
                provider="Google"
                onSignIn={() => {}}
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
              <Link
                href="/login"
                className="text-blue-500 hover:text-blue-700"
              >
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
};

export default Register;
