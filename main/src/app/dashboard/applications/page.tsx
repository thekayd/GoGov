"use client"

import {
  BookIcon,
  CreditCardIcon,
  GraduationCap,
  SyringeIcon,
} from "lucide-react"

import { Separator } from "@/components/ui/separator"
import { DashboardNavigationCard } from "@/app/admin/(components)/Views"

export default function ApplicationsPage() {
  return (
    <div className="mx-auto max-w-5xl space-y-14">
      <section className="mb-12">
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
          <DashboardNavigationCard
            details={{
              icon: GraduationCap,
              title: "Bursaries",
              link: "/dashboard/applications/bursary",
            }}
          />
          <DashboardNavigationCard
            details={{
              icon: CreditCardIcon,
              title: "Drivers Licenses",
              link: "/dashboard/applications/drivers-license",
            }}
          />
          <DashboardNavigationCard
            details={{
              icon: BookIcon,
              title: "Passport",
              link: "/dashboard/applications/passport",
            }}
          />
          <DashboardNavigationCard
            details={{
              icon: SyringeIcon,
              title: "Vaccination",
              link: "/dashboard/applications/vaccination",
            }}
          />
        </div>
      </section>

      <Separator className="my-8" />
    </div>
  )
}
