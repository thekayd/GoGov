"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { type DatabaseTables } from "@/types"

import { DatabaseTablesSchema, siteMapData } from "@/config/site"
import useUser from "@/hooks/useUser"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import SupportSideView from "@/app/support/(components)/SupportSideView"

import { BadRequestView, PaymentConfirmationContent } from "./PaymentCard"

export default function PaymentPage() {
  // Get the Search Params to compuse the Payment Request
  const router = useRouter()
  const searchParams = useSearchParams()
  const rawTableName = searchParams.get("table")
  const applicationId = searchParams.get("application")
  const submitted =
    searchParams.get("submitted") === "true"
      ? (searchParams.get("submitted") as string)
      : undefined

  const { data: tableName, success } =
    DatabaseTablesSchema.safeParse(rawTableName)
  console.log("Search Params: ", tableName, applicationId)
  const isNotValid = !success || !applicationId || applicationId === "undefined"

  // Authenticate User - Verified by Middleware
  const { data: user, isLoading } = useUser()

  if (!user?.email && !isLoading) router.push(siteMapData.Auth.path)

  return (
    <div className="container mx-auto p-4">
      <Card className="mx-auto w-full max-w-2xl">
        {isNotValid && (
          <CardContent className="space-y-6">
            <BadRequestView />
          </CardContent>
        )}
        {user?.email && !isNotValid && !isLoading && (
          <>
            <CardHeader>
              <CardTitle>
                {submitted && "Application Submitted Successfully"}
                {!submitted && "Complete your Application's Payment"}
              </CardTitle>
              <CardDescription>
                Please complete your payment to finalize your application
              </CardDescription>
            </CardHeader>
            <PaymentConfirmationContent
              tableName={tableName as DatabaseTables}
              applicationId={applicationId}
              email={user.email}
            />
          </>
        )}
      </Card>
      <SupportSideView />
    </div>
  )
}
