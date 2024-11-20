"use client"

import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { AppointmentSchema } from "@/models/AppointmentModel"
import { BursaryApplicationSchema } from "@/models/BursaryModel"
import { DriversLicenseSchema } from "@/models/DriversLicenseModel"
import { FeedbackSchema } from "@/models/FeedbackModel"
import { PassportApplicationSchema } from "@/models/PassportApplicationModel"
import { VaccinationApplicationSchema } from "@/models/VaccinationModel"
import {
  AreaChartIcon,
  BookIcon,
  CalendarCheckIcon,
  CreditCardIcon,
  FileIcon,
  GraduationCap,
  LayoutGridIcon,
  LucideIcon,
  MessageSquareIcon,
  SyringeIcon,
} from "lucide-react"
import { z } from "zod"

import { siteMapData } from "@/config/site"
import { Card } from "@/components/ui/card"
import Typography from "@/components/ui/typography"
import { ApplicationTable } from "@/app/dashboard/applications/(components)/ApplicationTable"

import DashboardNavigationCard from "./NavigationCard"
import ReportCard from "./ReportCard"
import ReportsView from "./ReportsView"

const ViewsSchema = z.enum([
  "app-index",
  "app-bursary",
  "app-drivers-license",
  "app-passport",
  "app-vaccination",
  "appoint-index",
  "feedback",
  "analytics",
  "reports",
])

type Views = z.infer<typeof ViewsSchema>

// FIRST ROW
// Title & Main nav bar
export function DashboardNavigation({ baseUrl }: { baseUrl: string }) {
  const searchParams = useSearchParams()
  const { data: currentView } = ViewsSchema.safeParse(searchParams.get("view"))
  const isActive = (view: Views) => currentView === view

  return (
    <div className="grid w-full grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      <DashboardNavigationCard
        details={{
          icon: LayoutGridIcon,
          title: "Applications",
          link: `${baseUrl}?view=app-index`,
          active: currentView?.split("-")[0] === "app",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: CalendarCheckIcon,
          title: "Appointments",
          link: `${baseUrl}?view=appoint-index`,
          active: currentView?.split("-")[0] === "appoint",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: MessageSquareIcon,
          title: "Feedbacks",
          link: `${baseUrl}?view=feedback`,
          active: currentView === "feedback",
        }}
      />
      {baseUrl === "/admin" && (
        <>
          <DashboardNavigationCard
            details={{
              icon: AreaChartIcon,
              title: "Analytics",
              link: `${baseUrl}?view=analytics`,
              active: currentView === "analytics",
            }}
          />
          <DashboardNavigationCard
            details={{
              icon: FileIcon,
              title: "Reports",
              link: `${baseUrl}?view=reports`,
              active: currentView === "reports",
            }}
          />
        </>
      )}
    </div>
  )
}

type ControllerView = "Admin" | "Dashboard" | "User" | "Reports"

// Final VIEW
export function DashboardViewController({
  selectedView,
  email,
}: {
  email?: string
  selectedView: ControllerView
}) {
  const searchParams = useSearchParams()
  const { data: view } = ViewsSchema.safeParse(searchParams.get("view"))

  return (
    <section className="mb-12">
      {view === "app-index" && <ApplicationSelectionView view={selectedView} />}
      {view === "reports" && <ReportsView />}
      {view === "app-bursary" && (
        <ApplicationTable
          email={email}
          link={
            email &&
            siteMapData.Dashboard.children.Applications.children.Bursary.path
          }
          heading="Bursary Applications"
          tableName="bursary_applications"
          modelSchema={BursaryApplicationSchema}
        />
      )}
      {view === "app-drivers-license" && (
        <ApplicationTable
          email={email}
          link={
            email &&
            siteMapData.Dashboard.children.Applications.children.DriversLicense
              .path
          }
          heading="Drivers License Applications"
          tableName="drivers_license_applications"
          modelSchema={DriversLicenseSchema}
        />
      )}
      {view === "app-passport" && (
        <ApplicationTable
          email={email}
          link={
            email &&
            siteMapData.Dashboard.children.Applications.children.Passport.path
          }
          heading="Passport Applications"
          tableName="passport_applications"
          modelSchema={PassportApplicationSchema}
        />
      )}
      {view === "app-vaccination" && (
        <ApplicationTable
          email={email}
          link={
            email &&
            siteMapData.Dashboard.children.Applications.children.Vaccination
              .path
          }
          heading="Vaccination Applications"
          tableName="vaccination_applications"
          modelSchema={VaccinationApplicationSchema}
        />
      )}
      {view === "appoint-index" && (
        <ApplicationTable
          email={email}
          link={email && siteMapData.Dashboard.children.Appointments.path}
          heading="Scheduled Appointments"
          tableName="scheduled_appointments"
          modelSchema={AppointmentSchema}
        />
      )}
      {view === "feedback" && (
        <ApplicationTable
          email={email}
          link={email && siteMapData.Dashboard.children.Feedback.path}
          heading="Feedback"
          tableName="user_feedback"
          modelSchema={FeedbackSchema}
        />
      )}
      {view === "analytics" && (
        <ApplicationTable
          email={email}
          link={email && siteMapData.Dashboard.children.Feedback.path}
          heading="Feedback"
          tableName="drivers_license_applications"
          modelSchema={DriversLicenseSchema}
        />
      )}
    </section>
  )
}

// 2nd Level for selecting Table
export function ApplicationSelectionView({ view }: { view: ControllerView }) {
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4">
      <DashboardNavigationCard
        details={{
          icon: GraduationCap,
          title: "Bursaries",
          link:
            (view === "Admin" && "/admin?view=app-bursary") ||
            (view === "Reports" && "/admin?view=reports-bursary") ||
            (view === "Dashboard" &&
              siteMapData.Dashboard.children.Applications.children.Bursary
                .path) ||
            (view === "User" && "/dashboard?view=app-bursary") ||
            "",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: CreditCardIcon,
          title: "Drivers Licenses",
          link:
            (view === "Admin" && "/admin?view=app-drivers-license") ||
            (view === "Reports" && "/admin?view=reports-drivers-license") ||
            (view === "Dashboard" &&
              siteMapData.Dashboard.children.Applications.children
                .DriversLicense.path) ||
            (view === "User" && "/dashboard?view=app-drivers-license") ||
            "",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: BookIcon,
          title: "Passport",
          link:
            (view === "Admin" && "/admin?view=app-passport") ||
            (view === "Reports" && "/admin?view=reports-passport") ||
            (view === "Dashboard" &&
              siteMapData.Dashboard.children.Applications.children.Passport
                .path) ||
            (view === "User" && "/dashboard?view=app-passport") ||
            "",
        }}
      />
      <DashboardNavigationCard
        details={{
          icon: SyringeIcon,
          title: "Vaccination",
          link:
            (view === "Admin" && "/admin?view=app-vaccination") ||
            (view === "Reports" && "/admin?view=reports-vaccination") ||
            (view === "Dashboard" &&
              siteMapData.Dashboard.children.Applications.children.Vaccination
                .path) ||
            (view === "User" && "/dashboard?view=app-vaccination") ||
            "",
        }}
      />
    </div>
  )
}
