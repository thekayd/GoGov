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

export default function CitizenPortal() {
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
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-semibold text-gray-900">
          Citizen Portal
        </h1>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Available Applications
          </h2>
          <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
            {availableApplications.map((app, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-shadow hover:shadow-sm"
              >
                <CardHeader className="p-2">
                  <div className="flex items-center space-x-1">
                    <app.icon className="h-3 w-3 text-blue-500" />
                    <CardTitle className="text-xs font-medium">
                      {app.title}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="p-2 pt-0">
                  <CardDescription className="line-clamp-2 text-[10px]">
                    {app.description}
                  </CardDescription>
                </CardContent>
                <CardFooter className="p-2 pt-0">
                  <Link
                    href={app.link}
                    className={buttonVariants({
                      size: "sm",
                      variant: "outline",
                      className:
                        "h-6 w-full py-0 text-[10px] text-blue-500 hover:bg-blue-50 hover:text-blue-600",
                    })}
                  >
                    Start
                  </Link>
                  {/* <Button
                    variant="outline"
                    size="sm"
                    className="h-6 w-full py-0 text-[10px] text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Start
                    <ChevronRight className="ml-1 h-2 w-2" />
                  </Button> */}
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>

        <Separator className="my-8" />

        <section>
          <h2 className="mb-4 text-2xl font-semibold text-gray-900">
            Your Applications
          </h2>
          <div className="space-y-4">
            {openedApplications.map((app, index) => (
              <Card
                key={index}
                className="overflow-hidden transition-shadow hover:shadow-sm"
              >
                <CardHeader className="p-2">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-xs font-medium">
                      {app.title}
                    </CardTitle>
                    <span
                      className={`rounded-full px-1 py-0.5 text-[10px] ${
                        app.status === "Submitted"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {app.status}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="p-2 pt-0">
                  <p className="text-[10px] text-gray-500">
                    Last updated: {app.lastUpdated}
                  </p>
                </CardContent>
                <CardFooter className="p-2 pt-0">
                  <Button
                    variant="outline"
                    size="sm"
                    className="h-6 w-full py-0 text-[10px]"
                  >
                    View
                    <ChevronRight className="ml-1 h-2 w-2" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
