import path from "path"
import { DatabaseTables, SiteConfig } from "@/types"
import { z } from "zod"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "GoGov - ZAR",
  author:
    "Joel Shaduka, Kayode Daniel Akilo, Donna Peter, Vaughn Hay, Lebohang Makgatho",
  description:
    "XBCAD 2024 Final Project - GoGov citizen portal for South Africa",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "nerfdesign.com",
  },
  links: {
    github: "https://github.com/thekayd/GoGov",
  },
  ogImage: `${env.NEXT_PUBLIC_APP_URL}/og.jpg`,
}

export const SiteMap = {
  Home: "/",
  Auth: "/auth",
  Dashboard: "/dashboard",
  Profile: {
    path: "/dashboard/profile",
  },
  Feedback: "/dashboard/feedback",
  Appointments: "/dashboard/appointments",
  Applications: {
    Index: "/dashboard/applications",
    Passport: {
      Index: "/applications/passport",
      Create: "/dashboard/applications/passport",
    },
    children: {
      Passport: "/dashboard/applications/passport",
      DriversLicense: "/dashboard/applications/drivers-license",
      Vehicle: "/dashboard/applications/vehicle",
    },
  },
} as const

export const siteMapData = {
  Home: {
    path: "/",
    title: "Home",
    description: "Welcome to our website",
  },
  Auth: {
    path: "/auth",
    title: "Authentication",
    description: "Login or register to access your account",
  },
  AdminPanel: {
    path: "/admin",
    title: "Admin ",
    description: "Admin Panel",
  },
  Dashboard: {
    path: "/dashboard",
    title: "Dashboard",
    description: "Your personal dashboard",
    children: {
      Profile: {
        path: "/dashboard/profile",
        title: "Profile",
        description: "Manage your profile settings",
      },
      Applications: {
        path: "/dashboard/applications",
        title: "Applications",
        description: "Apply for various services",
        children: {
          Passport: {
            path: "/dashboard/applications/passport",
            title: "Passport Application",
            description: "Apply for a new passport",
          },
          DriversLicense: {
            path: "/dashboard/applications/drivers-license",
            title: "Driver's License Application",
            description: "Apply for a driver's license",
          },
          Vehicle: {
            path: "/dashboard/applications/vehicle",
            title: "Vehicle Registration Application",
            description: "Apply for vehicle registration",
          },
          Bursary: {
            path: "/dashboard/applications/bursary",
            title: "Bursary Application",
            description: "Apply for a bursary",
          },
          Vaccination: {
            path: "/dashboard/applications/vaccination",
            title: "Vaccination Applications",
            description: "Apply for a Vaccination",
          },
        },
      },
      Appointments: {
        path: "/dashboard/appointment",
        title: "Appointments",
        description: "View and manage your appointments",
      },
      Feedback: {
        path: "/feedback",
        title: "Feedback",
        description: "Get help or provide feedback",
      },
      Payment: {
        path: "/dashboard/payment",
        title: "Payments",
        description: "Make payments for services",
      },
    },
  },
  Education: {
    path: "/education",
    title: "Education",
    description: "Department of Education",
  },
  Health: {
    path: "/health",
    title: "Health",
    description: "Department of Health",
  },
  HomeAffairs: {
    path: "/home-affairs",
    title: "Home Affairs",
    description: "Department of Home Affairs",
  },
  Transport: {
    path: "/transport",
    title: "Transport",
    description: "Department of Transport",
  },
  Support: {
    path: "/support",
    title: "Support",
    description: "Advanced AI Support",
  },
  StripePayment: {
    path: "https://paystack.com/pay",
    title: "Payments",
    description: "Make payments for services",
  },
}

interface Route {
  path: string
  title: string
}
export const getNavbarRoutes = (): Route[] => {
  const routes: Route[] = []
  Object.entries(siteMapData).forEach(([key, value]) => {
    if (
      value.title === "Authentication" ||
      value.title === "Payments" ||
      value.title === "Home"
    ) {
      return
    }
    routes.push({
      path: value.path,
      title: value.title,
    })
  })

  return routes
}

export const DatabaseTablesSchema = z.nativeEnum({
  admin_profile: "admin_profile",
  bursary_applications: "bursary_applications",
  drivers_license_applications: "drivers_license_applications",
  passport_applications: "passport_applications",
  profile: "profile",
  scheduled_appointments: "scheduled_appointments",
  user_feedback: "user_feedback",
  vaccination_applications: "vaccination_applications",
})
