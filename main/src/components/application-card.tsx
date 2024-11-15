"use client"

import { useState } from "react"
import {
  Building,
  CheckCircle,
  Clock,
  FileText,
  LucideIcon,
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

import Typography from "./ui/typography"

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
    department: string
    status: string
    createdAt: string
    type: string
    center: string
  }
}

type ApplicationStatus = "pending" | "approved" | "rejected" | "in-progress"

export default function ApplicationCard() {
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+1 (555) 123-4567",
    address: "123 Main St",
    city: "Anytown",
    postcode: "12345",
    fullName: "John Michael Doe",
  }
  const application = {
    department: "Transport",
    status: "pending",
    type: "Class C",
    createdAt: "2023-01-01",
    center: "Anytown DMV",
  }
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
      <CardContent className="w-full p-3">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="space-y-4">
            <Typography variant={"p"} affects={"large"}>
              Citizen Information
            </Typography>
            <div className="space-y-2">
              <CardField label="Name" value={user.name} />
              <CardField label="Email" value={user.email} />
              <CardField label="Phone" value={user.phone} />
              <CardField label="Address" value={user.address} />
              <CardField label="Address" value={user.address} />
              <CardField label="City" value={user.city} />
              <CardField label="Postcode" value={user.postcode} />
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Application Details</h3>
            <div className="space-y-2">
              <CardField
                label="Type"
                value={application.type}
                icon={FileText}
              />
              <CardField
                label="Test Center"
                value={application.center}
                icon={FileText}
              />
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
      <CardFooter className="flex w-full flex-col gap-3 pt-5 md:flex-row">
        <Button
          onClick={() => handleStatusChange("approved")}
          variant={status === "approved" ? "default" : "outline"}
          className="flex w-full items-center space-x-1"
        >
          <CheckCircle className="h-4 w-4" />
          <span>Approve</span>
        </Button>
        <Button
          onClick={() => handleStatusChange("rejected")}
          variant={status === "rejected" ? "default" : "outline"}
          className="flex w-full items-center space-x-1"
        >
          <XCircle className="h-4 w-4" />
          <span>Reject</span>
        </Button>
        <Button
          onClick={() => handleStatusChange("in-progress")}
          variant={status === "in-progress" ? "default" : "outline"}
          className="flex w-full items-center space-x-1"
        >
          <Clock className="h-4 w-4" />
          <span>In Progress</span>
        </Button>
      </CardFooter>
    </Card>
  )
}

function CardField(props: { label: string; value: string; icon?: LucideIcon }) {
  return (
    // <div className="flex w-full flex-col items-center space-y-2">
    <div className="flex w-full items-center justify-start gap-2">
      {props.icon && <props.icon className="h-5 w-5 text-muted-foreground" />}
      <Typography variant="p" className="font-medium" affects="removePMargin">
        {props.label}:
      </Typography>
      <Typography affects={"removePMargin"} variant={"p"}>
        {props.value}
      </Typography>
    </div>
    // </div>
  )
}
