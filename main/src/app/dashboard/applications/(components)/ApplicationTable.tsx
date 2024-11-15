"use client"

import { useMemo } from "react"
import Link from "next/link"
import { Appointment, AppointmentSchema } from "@/models/AppointmentModel"
import {
  BursaryApplication,
  BursaryApplicationSchema,
} from "@/models/BursaryModel"
import {
  DriversLicenseApplication,
  DriversLicenseSchema,
} from "@/models/DriversLicenseModel"
import {
  PassportApplication,
  PassportApplicationSchema,
} from "@/models/PassportApplicationModel"
import {
  VaccinationApplication,
  VaccinationApplicationSchema,
} from "@/models/VaccinationModel"
import { DatabaseTables } from "@/types"
import { z, ZodObject } from "zod"

import {
  useGetApplications,
  useGetUserApplications,
} from "@/components/ApplicationForm/useApplication"
import ModelTable, {
  ModelTableError,
  ModelTableSkeleton,
} from "@/components/DataTable/model-table"

import {
  AppointmentColumns,
  BursaryApplicationsColumns,
  DriversLicenseApplicationColumns,
  PassportApplicationColumns,
  VaccinationApplicationColumns,
} from "./Columns"

interface ModelRenderProps {
  modelSchema: ZodObject<any>
  tableName: DatabaseTables
  heading: string
  email?: string
}

export function ApplicationTable({
  modelSchema,
  tableName,
  heading,
  email,
}: ModelRenderProps) {
  const { data, isPending, error } = email
    ? useGetUserApplications<z.infer<typeof modelSchema>>(tableName, email)
    : useGetApplications<z.infer<typeof modelSchema>>(tableName)

  console.log("Applications: ", data)

  // const applicationTable = () => {
  //   if (!data || isPending || error) return
  //   if (modelSchema === BursaryApplicationSchema)
  //     return (
  //       <ModelTable
  //         columns={BursaryApplicationsColumns}
  //         data={data as BursaryApplication[]}
  //       />
  //     )
  //   if (modelSchema === DriversLicenseSchema)
  //     return (
  //       <ModelTable
  //         columns={DriversLicenseApplicationColumns}
  //         data={data as DriversLicenseApplication[]}
  //       />
  //     )
  //   if (modelSchema === PassportApplicationSchema)
  //     return (
  //       <ModelTable
  //         columns={PassportApplicationColumns}
  //         data={data as PassportApplication[]}
  //       />
  //     )
  // }

  return (
    <section className="mb-12 w-full">
      <h2 className="mb-4 text-2xl font-semibold text-gray-900">{heading}</h2>
      {isPending && !error && !data && <ModelTableSkeleton />}
      {error && !isPending && !data && <ModelTableError error={error} />}
      {modelSchema === BursaryApplicationSchema && data && (
        <ModelTable
          columns={BursaryApplicationsColumns}
          data={data as BursaryApplication[]}
        />
      )}
      {modelSchema === DriversLicenseSchema && data && (
        <ModelTable
          columns={DriversLicenseApplicationColumns}
          data={data as DriversLicenseApplication[]}
        />
      )}
      {modelSchema === PassportApplicationSchema && data && (
        <ModelTable
          columns={PassportApplicationColumns}
          data={data as PassportApplication[]}
        />
      )}
      {modelSchema === VaccinationApplicationSchema && data && (
        <ModelTable
          columns={VaccinationApplicationColumns}
          data={data as VaccinationApplication[]}
        />
      )}
      {modelSchema === AppointmentSchema && data && (
        <ModelTable columns={AppointmentColumns} data={data as Appointment[]} />
      )}
    </section>
  )
}
