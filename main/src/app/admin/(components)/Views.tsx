"use client"

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
  MessageSquareIcon,
  SyringeIcon,
} from "lucide-react"
import { z } from "zod"

import { siteMapData } from "@/config/site"
import { ApplicationAnalytics } from "@/components/application-analytics"
import { ApplicationTable } from "@/app/dashboard/applications/(components)/ApplicationTable"

import DashboardNavigationCard from "./NavigationCard"
import ReportsView from "./ReportsView"

const ViewsSchema = z.enum([
  "app-index",
  "app-bursary",
  "app-drivers-license",
  "app-passport",
  "app-vaccination",
  "appoint-index",
  "feedback",
  "analytics-index",
  "analytics-bursary",
  "analytics-drivers",
  "analytics-passport",
  "analytics-vaccination",
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
              link: `${baseUrl}?view=analytics-index`,
              active: currentView === "analytics-index",
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

type ControllerView = "Admin" | "Dashboard" | "User" | "Analytics"

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
      {view === "analytics-index" && (
        <ApplicationSelectionView view={"Analytics"} />
      )}
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
      {view === "analytics-bursary" && (
        <ApplicationAnalytics
          tableName="bursary_applications"
          title={"Bursary Applications Dashboard"}
        />
      )}
      {view === "analytics-drivers" && (
        <ApplicationAnalytics
          tableName="drivers_license_applications"
          title={"Drivers License Applications Dashboard"}
        />
      )}
      {view === "analytics-passport" && (
        <ApplicationAnalytics
          tableName="passport_applications"
          title={"Passport Applications Dashboard"}
        />
      )}
      {view === "analytics-vaccination" && (
        <ApplicationAnalytics
          tableName="vaccination_applications"
          title={"Vaccination Applications Dashboard"}
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
            (view === "Analytics" && "/admin?view=analytics-bursary") ||
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
            (view === "Analytics" && "/admin?view=analytics-drivers") ||
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
            (view === "Analytics" && "/admin?view=analytics-passport") ||
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
            (view === "Analytics" && "/admin?view=analytics-vaccination") ||
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
