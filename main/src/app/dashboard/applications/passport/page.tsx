"use client"

import {
  createPassportApplicationModel,
  PassportApplicationFormSchema,
  PassportApplicationFormTemplate,
} from "@/models/PassportApplicationModel"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import ApplicationForm from "@/components/ApplicationForm/ApplicationForm"
import { ApplicationFormProvider } from "@/components/ApplicationForm/ApplicationFormContext"

import ProfileForm from "../../profile/(components)/ProfileForm"
import { ProfileFormProvider } from "../../profile/(components)/ProfileFormContext"

export default function PassportApplicationPage() {
  return (
    <main className="mx-auto mt-3">
      <div className="mb-8 mt-10 flex flex-col items-center justify-center text-center">
        <h1 className=" text-4xl font-bold">Passport Applications</h1>
        <p className=" text-gray-600">
          Apply for your South African passport online.
          <br />
          Fill out the form below to start your application.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <Card className="h-fit w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Application Information</CardTitle>
          </CardHeader>

          {/* Form is being generated by the ApplicationForm comp through the Template, and the form validation, submission & logic is being handled by the ApplicationFormContext */}
          <CardContent className="">
            <ApplicationFormProvider
              table_name="passport_applications"
              createApplicationModel={createPassportApplicationModel}
              modelFormSchema={PassportApplicationFormSchema}
            >
              <ApplicationForm template={PassportApplicationFormTemplate} />
            </ApplicationFormProvider>
          </CardContent>
        </Card>
        <Card className="w-full max-w-4xl">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>

          <CardContent className="w-full">
            <ProfileFormProvider disabled>
              <ProfileForm disabled />
            </ProfileFormProvider>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
