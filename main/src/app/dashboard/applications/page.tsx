import Link from "next/link"
import {
  Briefcase,
  CalendarCheckIcon,
  Car,
  ChevronRight,
  CreditCard,
  FileText,
  Home,
  LayoutGridIcon,
  LucideIcon,
  MessageSquareIcon,
} from "lucide-react"
import { FaPassport as Passport } from "react-icons/fa"

import { SiteMap } from "@/config/site"
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
import AdminLayout from "@/components/AdminLayout"
import ApplicationCard from "@/app/(components)/ApplicationCard"

import ApplicationIndex from "./(components)/ApplicationIndex"

// TODO: BLOCK CITZENS (USERS) FORM VIEWING THE PAGE
// View restricted for Admins only

export default async function ApplicationsIndex() {
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

  return (
    <AdminLayout>
      {/* Bursaries */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Bursary Applications
        </h2>
        {/* <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4"> */}
        <ApplicationIndex table_name="bursary_applications" />
        {/* </div> */}
      </section>

      <Separator className="my-8" />

      {/* Drivers License applications */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Drivers License Applications
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {availableApplications.map((app, index) => (
            <ApplicationCard application={app} />
          ))}
        </div>
      </section>

      {/* Passport Applications */}
      <section className="mb-12">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">
          Passport Applications
        </h2>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          {availableApplications.map((app, index) => (
            <ApplicationCard application={app} />
          ))}
        </div>
      </section>
    </AdminLayout>
  )
}

export function DashboardNavigationCard({
  details,
}: {
  details: {
    icon: LucideIcon
    title: string
    link: string
  }
}) {
  return (
    <Link href={details.link} className="w-full">
      <Card className="flex w-full flex-col items-center justify-center space-y-4 p-5 hover:cursor-pointer hover:bg-secondary">
        <details.icon size={40} />
        <Typography variant={"p"} affects={"large"}>
          {details.title}
        </Typography>
      </Card>
    </Link>
  )
}
