import DashboardNavbar from "@/components/dashboard-navbar"
import { DetailedFooter } from "@/components/Footer"

import { RootLayoutProps } from "../layout"

export default function AdminLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <DashboardNavbar />
      <div className="min-h-screen px-4 py-10">
        <div className="min-h-screen bg-gray-50 p-8">
          <div className="mx-auto max-w-5xl space-y-14">
            <h1 className="mb-8 text-4xl font-semibold text-gray-900">
              Admin Portal
            </h1>

            {children}
          </div>
        </div>
      </div>
      <DetailedFooter />
    </div>
  )
}
