"use client"

import Image from "next/image"
import Link from "next/link"

import useUser from "@/hooks/useUser"

import UserProfile from "./supaauth/user-profile"
import { buttonVariants } from "./ui/button"

export function Header() {
  const { data } = useUser()
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto flex items-center justify-between px-4 py-6">
        <div className="flex items-center">
          <Image
            src="/assets/images/Download111.jpeg"
            alt="Logo"
            width={64}
            height={45}
            className="mr-4"
          />
          <span className="text-lg font-medium text-blue-900">
            Government of South Africa
          </span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link href="/dashboard" className="text-gray-600">
                Dashboard
              </Link>
            </li>
            <li>
              <Link href="/admin" className="text-gray-600">
                Admin Dashboard
              </Link>
            </li>
            <li>
              <Link href="/dashboard/applications" className="text-gray-600">
                My applications
              </Link>
            </li>
            <li>
              <Link href="/services" className="text-gray-600">
                Service Directory
              </Link>
            </li>
            <li>
              <Link href="/dashboard/appointments" className="text-gray-600">
                Appointments
              </Link>
            </li>
            <li>
              <Link href="/downloads" className="text-gray-600">
                Downloads
              </Link>
            </li>
            <li>
              <Link href="/payments" className="text-gray-600">
                Payments
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="text-gray-600">
                Support & Feedback
              </Link>
            </li>
            <li>
              {data?.email ? (
                <UserProfile />
              ) : (
                <Link
                  href="/dashboard"
                  className={buttonVariants({ variant: "outline", size: "sm" })}
                >
                  Login
                </Link>
              )}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
