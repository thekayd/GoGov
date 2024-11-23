"use client"

import { useRouter } from "next/navigation"
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
import { Row } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"
import { toast } from "sonner"
import { z, ZodSchema } from "zod"

import { siteMapData } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { statuses } from "../../app/dashboard/applications/(components)/Columns"
import { useUpdateApplication } from "../ApplicationForm/useApplication"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
  table: DatabaseTables
  schema: ZodSchema<any>
}

export function DataTableRowActions<TData>({
  row,
  table,
  schema,
}: DataTableRowActionsProps<TData>) {
  const rowData = row.original
  const router = useRouter()
  const application = ValidateApplication(rowData)
  const { mutate } = useUpdateApplication<z.infer<typeof schema>>()

  function handleStatusChange(newStatus: string) {
    if (!application) return
    toast.promise(
      async () => {
        if (!application?.app?.id) {
          throw new Error("Application ID is missing")
        }
        mutate({
          id: application.app.id.toString(),
          newStatus: newStatus,
          tableName: table,
        })
      },
      {
        loading: "Updating application's status",
        success: (res) => {
          console.log("Response: ", res)
          location.reload()
          return "Status successfully updated!"
        },
        error: (error: Error) => {
          console.log("Error: ", error)
          return error.message || "Oops 🤯 An unexpected error ocurred!"
        },
      }
    )
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
        >
          <MoreHorizontal />
          <span className="sr-only">Open menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-[160px]">
        {/* <DropdownMenuItem>View Full Details</DropdownMenuItem> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuSub> */}
        {/* <DropdownMenuSubTrigger>Status</DropdownMenuSubTrigger> */}
        {/* <DropdownMenuSubContent> */}
        <DropdownMenuRadioGroup
          value={application?.app.status || "Send For Validation"}
        >
          {statuses.map((label) => (
            <DropdownMenuRadioItem
              key={label.value}
              value={label.value}
              onClick={() => handleStatusChange(label.value)}
            >
              {label.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
        <DropdownMenuItem
          onClick={() =>
            router.push(
              `${siteMapData.Dashboard.children.Payment.path}?table=${application?.tableName}&application=${application?.app.id}`
            )
          }
        >
          Pay Now
        </DropdownMenuItem>
        {/* </DropdownMenuSubContent>
        </DropdownMenuSub> */}
        {/* <DropdownMenuSeparator /> */}
        {/* <DropdownMenuItem>
          Delete
          <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
        </DropdownMenuItem> */}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

type availbleApplications =
  | BursaryApplication
  | DriversLicenseApplication
  | PassportApplication
  | VaccinationApplication
interface ValidateApplicationResponse {
  app: availbleApplications
  tableName: DatabaseTables
}
function ValidateApplication(
  application: any
): ValidateApplicationResponse | undefined {
  const { data: bursaryApplication, error: bursaryError } =
    BursaryApplicationSchema.safeParse(application)
  console.log("Bursary Schema Error: ", bursaryError)
  if (!bursaryError) {
    return {
      app: bursaryApplication,
      tableName: "bursary_applications",
    }
  }
  const { data: driversApplication, error: driversError } =
    DriversLicenseSchema.safeParse(application)
  console.log("Drivers Schema Error: ", driversError)
  if (!driversError) {
    return {
      app: driversApplication,
      tableName: "drivers_license_applications",
    }
  }
  console.log("Drivers Schema Error: ", driversError)
  const { data: passportApplication, error: passportError } =
    PassportApplicationSchema.safeParse(application)
  if (!passportError) {
    return {
      app: passportApplication,
      tableName: "passport_applications",
    }
  }
  const { data: vaccinationApplication, error: vaccinationError } =
    VaccinationApplicationSchema.safeParse(application)
  if (!vaccinationError) {
    return {
      app: vaccinationApplication,
      tableName: "vaccination_applications",
    }
  }
}
