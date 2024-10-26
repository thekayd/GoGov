"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import DriversApplicationForm from "@/components/application-forms/drivers-license"

import ProfileForm from "../../profile/(components)/ProfileForm"
import { ProfileFormProvider } from "../../profile/(components)/ProfileFormContext"

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

      <div className="space-y-5">
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Application info Information</CardTitle>
          </CardHeader>

          <CardContent className="">
            <DriversApplicationForm />
          </CardContent>
        </Card>
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>

          <CardContent className="w-full">
            <ProfileFormProvider>
              <ProfileForm />
            </ProfileFormProvider>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
