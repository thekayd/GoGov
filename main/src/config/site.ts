import path from "path"
import { SiteConfig } from "@/types"

import { env } from "@/env.mjs"

export const siteConfig: SiteConfig = {
  name: "Next Entree",
  author: "redpangilinan",
  description:
    "Next.js 14+ starter template with app router, shadcn/ui, typesafe env, icons and configs setup.",
  keywords: ["Next.js", "React", "Tailwind CSS", "Radix UI", "shadcn/ui"],
  url: {
    base: env.NEXT_PUBLIC_APP_URL,
    author: "https://rdev.pro",
  },
  links: {
    github: "https://github.com/redpangilinan/next-entree",
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
    },
  },
  Appointments: {
    path: "/dashboard/appointments",
    title: "Appointments",
    description: "View and manage your appointments",
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
  Services: {
    path: "/services",
    title: "Services",
    description: "Explore our range of services",
  },
  Payments: {
    path: "/payments",
    title: "Payments",
    description: "Make payments for services",
  },
  Support: {
    path: "/feedback",
    title: "Support & Feedback",
    description: "Get help or provide feedback",
  },
} as const

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
