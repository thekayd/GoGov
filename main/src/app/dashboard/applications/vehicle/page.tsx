import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function VehicleRegistrationForm() {
  return (
    <main className="mx-autpnpm add drizzle-orm postgreso mt-8">
      <div className="mb-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold">Vehicle Registration Form</h1>
        <p className="text-gray-600">
          Complete the form below to register your vehicle with the Government
          of South Africa.
        </p>
      </div>

      <Card className="mx-auto w-full max-w-5xl">
        <CardHeader>
          <CardTitle>Vehicle Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div>
                <Label htmlFor="vehicleMake">Vehicle Make</Label>
                <Input id="vehicleMake" placeholder="Enter vehicle make" />
              </div>
              <div>
                <Label htmlFor="vehicleModel">Vehicle Model</Label>
                <Input id="vehicleModel" placeholder="Enter vehicle model" />
              </div>
              <div>
                <Label htmlFor="vehicleYear">Vehicle Year</Label>
                <Input
                  id="vehicleYear"
                  type="number"
                  placeholder="Enter vehicle year"
                />
              </div>
              <div>
                <Label htmlFor="vehicleVIN">Vehicle VIN</Label>
                <Input id="vehicleVIN" placeholder="Enter vehicle VIN" />
              </div>
              <div>
                <Label htmlFor="ownerName">Owner Name</Label>
                <Input id="ownerName" placeholder="Enter your name" />
              </div>
              <div>
                <Label htmlFor="ownerID">Owner ID</Label>
                <Input id="ownerID" placeholder="Enter your ID number" />
              </div>
            </div>

            <div className="mt-6">
              <h3 className="mb-2 text-lg font-semibold">Required Documents</h3>
              <p className="mb-4 text-sm text-gray-600">
                Please ensure you have the following documents ready to upload:
              </p>
              <ul className="mb-4 list-inside list-disc text-sm text-gray-600">
                <li>Proof of ownership (e.g., purchase invoice)</li>
                <li>Valid ID document</li>
                <li>Proof of address</li>
                <li>Vehicle roadworthy certificate</li>
              </ul>
              <Button>Upload Documents</Button>
            </div>

            <div className="mt-4 flex items-center space-x-2">
              <input type="checkbox" id="terms" className="form-checkbox" />
              <label htmlFor="terms" className="text-sm text-gray-700">
                I agree to the terms and conditions
              </label>
            </div>

            <div className="flex justify-end">
              <Button className="mt-4">Submit Registration</Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </main>
  )
}
