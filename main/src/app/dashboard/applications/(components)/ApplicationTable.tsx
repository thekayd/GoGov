"use client"

import { useMemo } from "react"
import Link from "next/link"
import { useSearchParams } from "next/navigation"
import { Appointment, AppointmentSchema } from "@/models/AppointmentModel"
import {
  BursaryApplication,
  BursaryApplicationSchema,
} from "@/models/BursaryModel"
import {
  DriversLicenseApplication,
  DriversLicenseSchema,
} from "@/models/DriversLicenseModel"
import { FeedBack, FeedbackSchema } from "@/models/FeedbackModel"
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

import useWindowSize from "@/hooks/useWindowSize"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  useGetApplications,
  useGetUserApplications,
} from "@/components/ApplicationForm/useApplication"
import ModelTable, {
  ModelTableError,
  ModelTableSkeleton,
} from "@/components/DataTable/model-table"
import { MobileFriendlyView } from "@/components/mobile-friendly-view"

import {
  AppointmentColumns,
  BursaryApplicationsColumns,
  DriversLicenseApplicationColumns,
  FeedbackColumns,
  PassportApplicationColumns,
  VaccinationApplicationColumns,
} from "./Columns"

interface ModelRenderProps {
  modelSchema: ZodObject<any>
  tableName: DatabaseTables
  heading: string
  email?: string
  link?: string
}

export function ApplicationTable({
  modelSchema,
  tableName,
  heading,
  email,
  link,
}: ModelRenderProps) {
  const searchParams = useSearchParams()
  const state = searchParams.get("state")
  if (state === "success") {
    console.log("State: ", state)
    console.log("Navigate to page")
  }

  const { data, isPending, error } = email
    ? useGetUserApplications<z.infer<typeof modelSchema>>(tableName, email)
    : useGetApplications<z.infer<typeof modelSchema>>(tableName)

  console.log("Applications: ", data)

  const { width, height } = useWindowSize()

  if (width < 1024) {
    return (
      <div className="container mx-auto p-4">
        <MobileFriendlyView />
      </div>
    )
  }

  return (
    <section className="mb-12  space-y-4">
      <div className="flex items-center justify-between ">
        <h2 className="mb-4 text-2xl font-semibold text-gray-900">{heading}</h2>
        {link && (
          <Link href={link} className={buttonVariants({ variant: "default" })}>
            Create
          </Link>
        )}
      </div>
      {isPending && !error && !data && <ModelTableSkeleton />}
      {error && !isPending && !data && <ModelTableError error={error} />}
      {modelSchema === BursaryApplicationSchema && data && (
        <ModelTable
          columns={BursaryApplicationsColumns}
          data={data as BursaryApplication[]}
          defaultColumnVisibility={{
            id: false,
            financial_need_statement: false,
            academic_achievements: false,
            other_funding_sources: false,
            name: false,
            surname: false,
            address: false,
            gender: false,
            city: false,
            email: false,
            date_of_birth: false,
            phone_number: false,
            actions: !email,
            payaction: !!email,
          }}
        />
      )}
      {modelSchema === DriversLicenseSchema && data && (
        <ModelTable
          columns={DriversLicenseApplicationColumns}
          data={data as DriversLicenseApplication[]}
          defaultColumnVisibility={{
            id: false,
            name: false,
            surname: false,
            address: false,
            gender: false,
            city: false,
            email: false,
            date_of_birth: false,
            phone_number: false,
            actions: !email,
            payaction: !!email,
          }}
        />
      )}
      {modelSchema === PassportApplicationSchema && data && (
        <ModelTable
          columns={PassportApplicationColumns}
          data={data as PassportApplication[]}
          defaultColumnVisibility={{
            id: false,
            name: false,
            surname: false,
            address: false,
            gender: false,
            city: false,
            email: false,
            date_of_birth: false,
            phone_number: false,
            actions: !email,
            payaction: !!email,
          }}
        />
      )}
      {modelSchema === VaccinationApplicationSchema && data && (
        <ModelTable
          columns={VaccinationApplicationColumns}
          data={data as VaccinationApplication[]}
          defaultColumnVisibility={{
            id: false,
            name: false,
            surname: false,
            address: false,
            gender: false,
            city: false,
            email: false,
            date_of_birth: false,
            phone_number: false,
            actions: !email,
            payaction: !!email,
          }}
        />
      )}
      {modelSchema === AppointmentSchema && data && (
        <ModelTable
          columns={AppointmentColumns}
          data={data as Appointment[]}
          defaultColumnVisibility={{
            id: false,
            name: false,
            surname: false,
            address: false,
            gender: false,
            city: false,
            email: false,
            date_of_birth: false,
            phone: false,
          }}
        />
      )}
      {modelSchema === FeedbackSchema && data && (
        <ModelTable columns={FeedbackColumns} data={data as FeedBack[]} />
      )}
    </section>
  )
}
