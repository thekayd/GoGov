"use client"

import { useMemo } from "react"
import Link from "next/link"
import { BursaryApplication } from "@/models/BursaryModel"
import { DriversLicenseApplication } from "@/models/DriversLicenseModel"
import { DatabaseTables } from "@/types"

import { useGetApplications } from "@/components/ApplicationForm/useApplication"

import ModelTable from "../../../../components/DataTable/model-table"
import { DriversLicenseApplicationColumns } from "./Columns"

// As the name applies, this component works in combination with the DB Model's Index page.
// ApplicationIndex, handles the fetching & Rendering of applications from the provided Model

interface ApplicationIndex {
  table_name: DatabaseTables
}

export default async function ApplicationIndex({
  table_name,
}: ApplicationIndex) {
  const {
    data,
    isPending: isApplicationPending,
    error: applicationError,
  } = useGetApplications<DriversLicenseApplication>(
    "drivers_license_applications"
  )

  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-1 xl:grid-cols-1">
      {data && (
        <ModelTable columns={DriversLicenseApplicationColumns} data={data} />
      )}
    </div>
  )
}
