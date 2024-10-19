import DashboardNavbar from "@/components/dashboard-navbar"
import { DetailedFooter } from "@/components/Footer"

import { RootLayoutProps } from "../layout"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <DashboardNavbar />
      {children}
      <DetailedFooter />
    </div>
  )
}
