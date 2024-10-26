import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import MyForm from "@/components/application-forms/drivers-license"

export default function DriversLicenseApplication() {
  return (
    <main className="mx-auto mt-8">
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        <h1 className=" text-4xl font-bold">Driver's License Application</h1>
        <p className=" text-gray-600">
          Apply for your South African driver's license online.
          <br />
          Fill out the form below to start your application.
        </p>
      </div>

      <Card className="w-full max-w-4xl">
        <CardHeader>
          <CardTitle>Personal Information</CardTitle>
        </CardHeader>

        <CardContent className="">
          <MyForm />
        </CardContent>
      </Card>
    </main>
  )
}