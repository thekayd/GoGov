"use client"

import { useState } from "react"
import {
  Building,
  CheckCircle,
  Clock,
  FileText,
  Mail,
  MapPin,
  Phone,
  User,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface ApplicationCardProps {
  user: {
    name: string
    email: string
    phone: string
    address: string
    city: string
    postcode: string
    fullName: string
  }
  application: {
    licenseCategory: string
    testCenter: string
  }
}

type ApplicationStatus = "pending" | "approved" | "rejected" | "in-progress"

export default function ApplicationCard(
  { user, application }: ApplicationCardProps = {
    user: {
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1 (555) 123-4567",
      address: "123 Main St",
      city: "Anytown",
      postcode: "12345",
      fullName: "John Michael Doe",
    },
    application: {
      licenseCategory: "Class C",
      testCenter: "Anytown DMV",
    },
  }
) {
  const [status, setStatus] = useState<ApplicationStatus>("pending")

  const handleStatusChange = (newStatus: ApplicationStatus) => {
    setStatus(newStatus)
  }

  return (
    <Card className="mx-auto w-full max-w-5xl">
      <CardHeader className="w-full">
        <CardTitle className="text-2xl font-bold">
          Application Details
        </CardTitle>
      </CardHeader>
      <CardContent className="w-full">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">User Information</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Name:</span> {user.name}
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Email:</span> {user.email}
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Phone:</span> {user.phone}
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Address:</span> {user.address}
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">City:</span> {user.city}
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Postcode:</span> {user.postcode}
              </div>
              <div className="flex items-center space-x-2">
                <User className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Full Name:</span> {user.fullName}
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Application Details</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <FileText className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">License Category:</span>{" "}
                {application.licenseCategory}
              </div>
              <div className="flex items-center space-x-2">
                <Building className="h-5 w-5 text-muted-foreground" />
                <span className="font-medium">Test Center:</span>{" "}
                {application.testCenter}
              </div>
              <div className="flex items-center space-x-2">
                {status === "approved" && (
                  <CheckCircle className="h-5 w-5 text-green-500" />
                )}
                {status === "rejected" && (
                  <XCircle className="h-5 w-5 text-red-500" />
                )}
                {status === "in-progress" && (
                  <Clock className="h-5 w-5 text-yellow-500" />
                )}
                {status === "pending" && (
                  <Clock className="h-5 w-5 text-gray-500" />
                )}
                <span className="font-medium">Status:</span>{" "}
                {status.charAt(0).toUpperCase() + status.slice(1)}
              </div>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-end space-x-2">
        <Button
          onClick={() => handleStatusChange("approved")}
          variant={status === "approved" ? "default" : "outline"}
          className="flex items-center space-x-1"
        >
          <CheckCircle className="h-4 w-4" />
          <span>Approve</span>
        </Button>
        <Button
          onClick={() => handleStatusChange("rejected")}
          variant={status === "rejected" ? "default" : "outline"}
          className="flex items-center space-x-1"
        >
          <XCircle className="h-4 w-4" />
          <span>Reject</span>
        </Button>
        <Button
          onClick={() => handleStatusChange("in-progress")}
          variant={status === "in-progress" ? "default" : "outline"}
          className="flex items-center space-x-1"
        >
          <Clock className="h-4 w-4" />
          <span>In Progress</span>
        </Button>
      </CardFooter>
    </Card>
  )
}
