import { Report } from "@/models/ReportModel"
import {
  BarChart,
  CheckCircle,
  ClipboardList,
  Clock,
  XCircle,
} from "lucide-react"

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Typography from "@/components/ui/typography"

export default function ReportCard({
  title,
  report,
}: {
  title: string
  report: Report
}) {
  // Calculate approval rate
  const approvalRate = (
    (report.approved / (report.totalApplications - report.pending)) *
    100
  ).toFixed(1)

  // Get current date and time
  const currentDate = new Date().toLocaleString()

  return (
    <Card className="mx-auto w-full max-w-lg">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex items-center justify-between rounded-lg bg-primary/10 p-4">
          <div className="flex items-center">
            <ClipboardList className="mr-2 h-6 w-6 text-primary" />
            <span className="font-semibold">Total Applications</span>
          </div>
          <span className="text-2xl font-bold">{report.totalApplications}</span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-yellow-100 p-4">
          <Clock className="mb-2 h-6 w-6 text-yellow-600" />
          {/* <span className="text-sm font-medium">Pending</span> */}
          <Typography variant={"p"} affects={"small"}>
            Pending
          </Typography>
          <span className="text-xl font-bold text-yellow-600">
            {report.pending}
          </span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-green-100 p-4">
          <CheckCircle className="mb-2 h-6 w-6 text-green-600" />
          <Typography variant={"p"} affects={"small"}>
            Approved
          </Typography>
          <span className="text-xl font-bold text-green-600">
            {report.approved}
          </span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-red-100 p-4">
          <XCircle className="mb-2 h-6 w-6 text-red-600" />
          <Typography variant={"p"} affects={"small"}>
            Rejected
          </Typography>
          <span className="text-xl font-bold text-red-600">
            {report.rejected}
          </span>
        </div>
        <div className="flex flex-col items-center rounded-lg bg-blue-100 p-4">
          <BarChart className="mb-2 h-6 w-6 text-blue-600" />
          <Typography variant={"p"} affects={"small"}>
            Approval Rate
          </Typography>
          <span className="text-xl font-bold text-blue-600">
            {approvalRate}%
          </span>
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        Last generated: {currentDate}
      </CardFooter>
    </Card>
  )
}

export function ReportCardSkeleton() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <CardTitle className="text-center text-2xl font-bold">
          <Skeleton className="mx-auto h-8 w-48" />
        </CardTitle>
      </CardHeader>
      <CardContent className="grid grid-cols-2 gap-4">
        <div className="col-span-2 flex items-center justify-between rounded-lg bg-primary/10 p-4">
          <div className="flex items-center">
            <ClipboardList className="mr-2 h-6 w-6 text-primary" />
            <Skeleton className="h-6 w-40" />
          </div>
          <Skeleton className="h-8 w-16" />
        </div>
        <div className="flex flex-col items-center rounded-lg bg-yellow-100 p-4">
          <Clock className="mb-2 h-6 w-6 text-yellow-600" />
          <Skeleton className="mb-2 h-4 w-16" />
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="flex flex-col items-center rounded-lg bg-green-100 p-4">
          <CheckCircle className="mb-2 h-6 w-6 text-green-600" />
          <Skeleton className="mb-2 h-4 w-16" />
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="flex flex-col items-center rounded-lg bg-red-100 p-4">
          <XCircle className="mb-2 h-6 w-6 text-red-600" />
          <Skeleton className="mb-2 h-4 w-16" />
          <Skeleton className="h-6 w-12" />
        </div>
        <div className="flex flex-col items-center rounded-lg bg-blue-100 p-4">
          <BarChart className="mb-2 h-6 w-6 text-blue-600" />
          <Skeleton className="mb-2 h-4 w-16" />
          <Skeleton className="h-6 w-12" />
        </div>
      </CardContent>
      <CardFooter className="text-sm text-muted-foreground">
        <Skeleton className="h-4 w-48" />
      </CardFooter>
    </Card>
  )
}
