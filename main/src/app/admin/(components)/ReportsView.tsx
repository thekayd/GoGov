import { useGetApplicationReport } from "@/hooks/useReport"

import ReportCard, { ReportCardSkeleton } from "./ReportCard"

export default function ReportsView() {
  const { data: bursaryReport, isLoading: bursaryLoading } =
    useGetApplicationReport("bursary_applications")
  const { data: driversReport, isLoading: driversLoading } =
    useGetApplicationReport("drivers_license_applications")
  const { data: passportReport, isLoading: passportLoading } =
    useGetApplicationReport("passport_applications")
  const { data: vaccinationReport, isLoading: vaccinationLoading } =
    useGetApplicationReport("vaccination_applications")
  const { data: feedbackReport, isLoading: feedbackLoading } =
    useGetApplicationReport("user_feedback")

  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      {bursaryLoading && <ReportCardSkeleton />}
      {driversLoading && <ReportCardSkeleton />}
      {passportLoading && <ReportCardSkeleton />}
      {vaccinationLoading && <ReportCardSkeleton />}
      {feedbackLoading && <ReportCardSkeleton />}
      {bursaryReport && !bursaryLoading && (
        <ReportCard
          title="Bursary Applications Report"
          report={bursaryReport}
        />
      )}
      {driversReport && !driversLoading && (
        <ReportCard
          title="Drivers License Application Report"
          report={driversReport}
        />
      )}
      {passportReport && !passportLoading && (
        <ReportCard
          title="Passport Application Report"
          report={passportReport}
        />
      )}
      {vaccinationReport && !vaccinationLoading && (
        <ReportCard
          title="Vaccination Application Report"
          report={vaccinationReport}
        />
      )}
      {feedbackReport && !feedbackLoading && (
        <ReportCard title="Feedback Report" report={feedbackReport} />
      )}
    </div>
  )
}
