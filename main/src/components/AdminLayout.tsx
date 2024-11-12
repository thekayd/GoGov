import DashboardNavbar from "@/components/dashboard-navbar"
import { DetailedFooter } from "@/components/Footer"

import { RootLayoutProps } from "../app/layout"

export default function AdminLayout({ children }: RootLayoutProps) {
  return (
    <div className="mx-auto max-w-6xl space-y-14">
      <h1 className="mb-8 text-4xl font-semibold text-gray-900">
        Admin Portal
      </h1>

      {children}
    </div>
  )
}
