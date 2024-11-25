import Image from "next/image"
import Link from "next/link"

import { siteMapData } from "@/config/site"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Typography from "@/components/ui/typography"

export function DepartmentsSection() {
  const departments = [
    {
      name: "HOME AFFAIRS",
      image: "/assets/images/Image7.png",
      services: ["ID APPLICATIONS", "PASSPORTS", "BIRTH CERTIFICATES"],
      link: siteMapData.Dashboard.children.Applications.children.Passport.path,
    },
    {
      name: "TRANSPORTATION",
      image: "/assets/images/Rectangle22.png",
      services: [
        "DRIVER'S LICENSES",
        "VEHICLE REGISTRATIONS",
        "ROADWORTHINESS CERTIFICATES",
      ],
      link: siteMapData.Dashboard.children.Applications.children.DriversLicense
        .path,
    },
    {
      name: "HEALTH",
      image: "/assets/images/Rectangle222.jpeg",
      services: [
        "Medical Aid Applications",
        "Vacation Records",
        "Health Grants",
      ],
      link: siteMapData.Dashboard.children.Applications.children.Vaccination
        .path,
    },
    {
      name: "EDUCATION",
      image: "/assets/images/Rectangle221.png",
      services: [
        "Scheduling Grants",
        "Adult Education Programs",
        "Certification Requests",
      ],
      link: siteMapData.Dashboard.children.Applications.children.Bursary.path,
    },
  ]

  return (
    <section className="w-full bg-blue-800 py-10 text-white" id="departments">
      <div className="container mx-auto w-full max-w-6xl space-y-10">
        <Typography variant={"h2"} className="text-center">
          South African Departments
        </Typography>
        <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {departments.map((dept, index) => (
            <Card key={index} className="bg-white">
              <CardHeader className="space-y-3 p-2">
                <div className="relative h-48 w-full">
                  <Image
                    src={dept.image}
                    alt={dept.name}
                    fill
                    className="rounded-t-lg object-cover"
                  />
                </div>
                <CardTitle className="font-bold text-black">
                  {dept.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 p-2">
                <div className="flex w-full flex-col items-start justify-center">
                  {dept.services.map((service, i) => (
                    <Typography
                      variant={"p"}
                      key={i}
                      affects={"removePMargin"}
                      className="text-gray-600"
                    >
                      {service}
                    </Typography>
                  ))}
                </div>
                <Link
                  className={buttonVariants({ className: "w-full" })}
                  href={dept.link}
                >
                  Get Start
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
