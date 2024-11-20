"use client"

import Link from "next/link"
import {
  Briefcase,
  Car,
  ChevronRight,
  CreditCard,
  FileText,
  Home,
} from "lucide-react"
import { FaPassport as Passport } from "react-icons/fa"

import useUser from "@/hooks/useUser"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import Typography from "@/components/ui/typography"
import ApplicationCard from "@/components/application-card"
import {
  useGetAllUserApplications,
  useGetUserApplications,
} from "@/components/ApplicationForm/useApplication"

import {
  DashboardNavigation,
  DashboardViewController,
} from "../admin/(components)/Views"

export default function CitizenPortal() {
  const { data: user } = useUser()

  return (
    <div className="mx-auto w-full max-w-5xl space-y-10">
      <DashboardNavigation baseUrl="/dashboard" />

      <Separator className="my-8" />

      <DashboardViewController selectedView="User" email={user?.email} />
    </div>
  )
}
