import { Separator } from "@/components/ui/separator"

import {
  DashboardNavigation,
  DashboardViewController,
} from "./(components)/Views"

export default function AdminPortal() {
  return (
    <div className="mx-auto w-full max-w-5xl space-y-10">
      <DashboardNavigation baseUrl="/admin" />

      <Separator className="my-8" />

      <DashboardViewController selectedView="Admin" />
    </div>
  )
}
