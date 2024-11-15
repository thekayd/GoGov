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
  const openedApplications = [
    {
      title: "Passport Application",
      status: "In Progress",
      lastUpdated: "2023-05-15",
    },
    { title: "Tax Filing", status: "Submitted", lastUpdated: "2023-04-10" },
  ]

  const { data: user } = useUser()
  const { data: applications } = useGetAllUserApplications(user?.email || "")

  return (
    <Card className="min-h-screen max-w-7xl bg-gray-50  ">
      <CardHeader>
        <Typography variant="h1" className=" text-gray-900">
          Citizen Portal
        </Typography>
      </CardHeader>

      <CardContent>
        <section className="mb-12 space-y-4">
          <Typography variant={"h3"}>Get Started</Typography>
          <section className="">
            <DashboardNavigation baseUrl="/dashboard" />
          </section>
        </section>
        <Separator className="my-8" />

        <DashboardViewController selectedView="Dashboard" email={user?.email} />

        <section className="space-y-5">
          <Typography variant={"h2"}>Your Applications</Typography>
          <div className="grid grid-cols-1 items-start justify-start gap-3 lg:grid-cols-2">
            {applications?.bursaries.map((app, index) => (
              <ApplicationCard
                user={{
                  phone: app.phone_number || "",
                  postcode: app.postcode || "",
                  name: app.name || "",
                  email: app.email || "",
                  city: app.city || "",
                  address: app.address || "",
                }}
                application={{
                  department: "Education",
                  status: app.status || "",
                  createdAt: app.created_at || "",
                }}
              />
            ))}
            {applications?.drivers.map((app, index) => (
              <ApplicationCard
                user={{
                  phone: app.phone_number || "",
                  postcode: app.postcode || "",
                  name: app.name || "",
                  email: app.email || "",
                  city: app.city || "",
                  address: app.address || "",
                }}
                application={{
                  department: "Transport",
                  status: app.status || "",
                  createdAt: app.created_at || "",
                  center: app.test_center || "",
                  type: app.license_category || "",
                }}
              />
            ))}
            {applications?.passport.map((app, index) => (
              <ApplicationCard
                user={{
                  phone: app.phone_number || "",
                  postcode: app.postcode || "",
                  name: app.name || "",
                  email: app.email || "",
                  city: app.city || "",
                  address: app.address || "",
                }}
                application={{
                  department: "Home Affairs",
                  status: app.status || "",
                  createdAt: app.created_at || "",
                  type: app.passport_type || "",
                }}
              />
            ))}
            {applications?.vaccination.map((app, index) => (
              <ApplicationCard
                user={{
                  phone: app.phone_number || "",
                  postcode: app.postcode || "",
                  name: app.name || "",
                  email: app.email || "",
                  city: app.city || "",
                  address: app.address || "",
                }}
                application={{
                  department: "Health",
                  status: app.status || "",
                  createdAt: app.created_at || "",
                  center: app.vaccination_center || "",
                  type: app.vaccine_type || "",
                }}
              />
            ))}
            {/* {openedApplications.map((app, index) => (
              <ApplicationCard />
            ))} */}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
