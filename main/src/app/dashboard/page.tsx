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
  DashboardNavigation,
  DashboardViewController,
} from "../admin/(components)/Views"

export default async function CitizenPortal() {
  const availableApplications = [
    {
      title: "Passport Application",
      icon: Passport,
      description: "Apply for a new passport or renew an existing one",
      link: "/dashboard/applications/passport",
    },
    {
      title: "Driver's License (Renewal)",
      icon: Car,
      description: "Renew your driver's license online",
      link: "/dashboard/applications/drivers-license",
    },
    {
      title: "Vehicle Registration",
      icon: FileText,
      description: "File your annual tax returns",
      link: "/dashboard/applications/vehicle",
    },
  ]

  const openedApplications = [
    {
      title: "Passport Application",
      status: "In Progress",
      lastUpdated: "2023-05-15",
    },
    { title: "Tax Filing", status: "Submitted", lastUpdated: "2023-04-10" },
  ]

  return (
    <Card className="min-h-screen bg-gray-50  ">
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

        <DashboardViewController selectedView="Dashboard" />

        <section className="space-y-5">
          <Typography variant={"h2"}>Your Applications</Typography>
          <div className="grid grid-cols-1 items-start justify-start gap-3 space-y-4 lg:grid-cols-2">
            {openedApplications.map((app, index) => (
              <ApplicationCard />
            ))}
          </div>
        </section>
      </CardContent>
    </Card>
  )
}
