"use client"

import { Appointment } from "@/models/AppointmentModel"
import {
  BursaryApplication,
  BursaryApplicationModel,
} from "@/models/BursaryModel"
import {
  DriversLicenseApplication,
  DriversLicenseSchema,
} from "@/models/DriversLicenseModel"
import { FeedBack } from "@/models/FeedbackModel"
import { PassportApplication } from "@/models/PassportApplicationModel"
import { VaccinationApplication } from "@/models/VaccinationModel"
import { ColumnDef } from "@tanstack/react-table"
import {
  ArrowDown,
  ArrowRight,
  ArrowUp,
  CheckCircle,
  CheckIcon,
  Circle,
  CircleOff,
  HelpCircle,
  Timer,
  XCircleIcon,
} from "lucide-react"

import { DataTableColumnHeader } from "../../../../components/DataTable/data-table-column-header"
import { DataTableRowActions } from "../../../../components/DataTable/data-table-row-actions"

export const BursaryApplicationsColumns: ColumnDef<BursaryApplication>[] = [
  {
    accessorKey: "institution_name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Institution" />
    ),
    cell: ({ row }) => {
      console.log("Insitituon: ", row.getValue("institution_name"))
      return row.getValue("institution_name")
    },
  },
  {
    accessorKey: "course_of_study",
    header: "Course",
  },
  {
    accessorKey: "total_course_duration",
    header: "Duration",
  },
  {
    accessorKey: "study_year",
    header: "Enroll Year",
  },
  {
    accessorKey: "annual_tuition_fee",
    header: "Tuition",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return FormatStatus(row.getValue("status"))
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Applied at" />
    ),
    cell: ({ row }) => {
      return FormatDate(row.getValue("created_at"))
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]

export const DriversLicenseApplicationColumns: ColumnDef<DriversLicenseApplication>[] =
  [
    {
      accessorKey: "id",
      header: "Id",
    },
    {
      accessorKey: "license_category",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="License Type" />
      ),
    },
    {
      accessorKey: "test_center",
      header: "Center",
    },
    {
      accessorKey: "id_document",
      header: "Id Doc",
      cell: ({ row }) => {
        return VerifyDocumentIsUploaded(row.getValue("id_document"))
      },
    },
    {
      accessorKey: "proof_of_address",
      header: "Prof. Address",
      cell: ({ row }) => {
        return VerifyDocumentIsUploaded(row.getValue("proof_of_address"))
      },
    },
    {
      accessorKey: "eye_test_certificate",
      header: "Eye Test",
      cell: ({ row }) => {
        return VerifyDocumentIsUploaded(row.getValue("eye_test_certificate"))
      },
    },
    {
      accessorKey: "passport_photo",
      header: "Passport",
      cell: ({ row }) => {
        return VerifyDocumentIsUploaded(row.getValue("passport_photo"))
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        return FormatStatus(row.getValue("status"))
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "phone_number",
      header: "Phone",
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Applied at" />
      ),
      cell: ({ row }) => {
        return FormatDate(row.getValue("created_at"))
      },
    },
    {
      id: "actions",
      cell: ({ row }) => (
        <DataTableRowActions
          table="drivers_license_applications"
          schema={DriversLicenseSchema}
          row={row}
        />
      ),
    },
  ]

export const PassportApplicationColumns: ColumnDef<PassportApplication>[] = [
  {
    accessorKey: "passport_type",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Passport Type" />
    ),
  },
  {
    accessorKey: "processing_center",
    header: "Center",
  },
  {
    accessorKey: "id_document",
    header: "Id Doc",
    cell: ({ row }) => {
      return VerifyDocumentIsUploaded(row.getValue("id_document"))
    },
  },
  {
    accessorKey: "proof_of_address",
    header: "Prof. Address",
    cell: ({ row }) => {
      return VerifyDocumentIsUploaded(row.getValue("proof_of_address"))
    },
  },
  {
    accessorKey: "passport_photo",
    header: "Photo",
    cell: ({ row }) => {
      return VerifyDocumentIsUploaded(row.getValue("passport_photo"))
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return FormatStatus(row.getValue("status"))
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "phone_number",
    header: "Phone",
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Applied at" />
    ),
    cell: ({ row }) => {
      return FormatDate(row.getValue("created_at"))
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]

export const VaccinationApplicationColumns: ColumnDef<VaccinationApplication>[] =
  [
    {
      accessorKey: "vaccine_type",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Passport Type" />
      ),
    },
    {
      accessorKey: "vaccination_center",
      header: "Center",
    },
    {
      accessorKey: "id_document",
      header: "Id Doc",
      cell: ({ row }) => {
        return VerifyDocumentIsUploaded(row.getValue("id_document"))
      },
    },
    {
      accessorKey: "status",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Status" />
      ),
      cell: ({ row }) => {
        return FormatStatus(row.getValue("status"))
      },
      filterFn: (row, id, value) => {
        return value.includes(row.getValue(id))
      },
    },
    {
      accessorKey: "phone_number",
      header: "Phone",
    },
    {
      accessorKey: "created_at",
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title="Applied at" />
      ),
      cell: ({ row }) => {
        return FormatDate(row.getValue("created_at"))
      },
    },
    // {
    //   id: "actions",
    //   cell: ({ row }) => <DataTableRowActions row={row} />,
    // },
  ]

export const AppointmentColumns: ColumnDef<Appointment>[] = [
  {
    accessorKey: "appointment_date",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Date" />
    ),
    cell: ({ row }) => {
      return FormatDate(row.getValue("appointment_date"))
    },
  },
  {
    accessorKey: "appointment_time",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Time" />
    ),
  },
  {
    accessorKey: "reason",
    header: "Reason",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "status",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      return FormatStatus(row.getValue("status"))
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Applied at" />
    ),
    cell: ({ row }) => {
      return FormatDate(row.getValue("created_at"))
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]

export const FeedbackColumns: ColumnDef<FeedBack>[] = [
  {
    accessorKey: "rating",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Rating" />
    ),
    cell: ({ row }) => {
      return row.getValue("rating")
    },
  },
  {
    accessorKey: "feedback",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Feedback" />
    ),
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "created_at",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created at" />
    ),
    cell: ({ row }) => {
      return FormatDate(row.getValue("created_at"))
    },
  },
  // {
  //   id: "actions",
  //   cell: ({ row }) => <DataTableRowActions row={row} />,
  // },
]

function FormatDate(value: unknown) {
  const date = new Date(value as string)
  return date.toLocaleDateString()
}
function VerifyDocumentIsUploaded(document: unknown) {
  return (
    <div className="flex items-center justify-center">
      {document === null ? (
        <XCircleIcon className="text-destructive" />
      ) : (
        <CheckIcon className="text-green-400" />
      )}
    </div>
  )
}
function FormatStatus(value: unknown) {
  const status = statuses.find((status) => status.value === value)

  if (!status) {
    return null
  }

  return (
    <div className="flex w-[100px] items-center">
      {status.icon && (
        <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
      )}
      <span>{status.label}</span>
    </div>
  )
}

export const statuses = [
  //   {
  //     value: "backlog",
  //     label: "Backlog",
  //     icon: HelpCircle,
  //   },
  {
    value: "Sent For Validation",
    label: "Validating",
    icon: Circle,
  },
  {
    value: "In Progress",
    label: "In Progress",
    icon: Timer,
  },
  {
    value: "Approved",
    label: "Approved",
    icon: CheckCircle,
  },
  {
    value: "Rejected",
    label: "Rejected",
    icon: CircleOff,
  },
]

export const priorities = [
  {
    label: "Low",
    value: "low",
    icon: ArrowDown,
  },
  {
    label: "Medium",
    value: "medium",
    icon: ArrowRight,
  },
  {
    label: "High",
    value: "high",
    icon: ArrowUp,
  },
]
