import ReportCard from "./ReportCard"

export default function ReportsView() {
  return (
    <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
      <ReportCard title="Bursary Applications Report" />
      <ReportCard title="Drivers License Application Report" />
      <ReportCard title="Passport Application Report" />
      <ReportCard title="Vaccination Application Report" />
      <ReportCard title="Feedback Report" />
    </div>
  )
}
