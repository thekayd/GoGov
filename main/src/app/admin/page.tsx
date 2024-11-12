// Views: ["applications", "driversapplication""]
// Views state are stored in the URL
// The Comp renders the appropriately
import { Separator } from "@/components/ui/separator"

import {
  AdminDashboardNavigation,
  AdminDashboardView,
} from "./(components)/Views"

export default function CitizenPortal() {
  return (
    <div className="mx-auto max-w-5xl space-y-14">
      <section className="mb-12">
        <AdminDashboardNavigation />
      </section>

      <Separator className="my-8" />

      <AdminDashboardView />
    </div>
  )
}
