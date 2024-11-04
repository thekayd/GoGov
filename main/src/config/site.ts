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
  Applications: {
    children: {
      Passport: "/dashboard/applications/passport",
      DriversLicense: "/dashboard/applications/drivers-license",
      Vehicle: "/dashboard/applications/vehicle",
    },
  },
} as const

SiteMap.Dashboard
