import { BursaryApplicationModel } from "@/models/BursaryModel"
import { DriversLicenseModel } from "@/models/DriversLicenseModel"

export function BursaryFields({
  application,
}: {
  application?: BursaryApplicationModel
}) {
  return (
    <>
      <p>
        <strong>Tuition:</strong> R
        {parseInt(application?.annual_tuition_fee || "").toLocaleString()}
      </p>
      <p>
        <strong>Institution:</strong> {application?.institution_name}
      </p>
      <p>
        <strong>Course:</strong> {application?.course_of_study}
      </p>
      <p>
        <strong>Enroll Year:</strong> {application?.study_year}
      </p>
      <p>
        <strong>Submitted At:</strong>{" "}
        {new Date(application?.created_at || "").toLocaleDateString()}
      </p>
    </>
  )
}

export function DriversLicenseFields({
  application,
}: {
  application?: DriversLicenseModel
}) {
  return (
    <>
      <p>
        <strong>Type:</strong> {application?.license_category}
      </p>
      <p>
        <strong>Center:</strong> {application?.test_center}
      </p>
      <p>
        <strong>Submitted At:</strong>{" "}
        {new Date(application?.created_at || "").toLocaleDateString()}
      </p>
    </>
  )
}
