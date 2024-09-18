import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function VehicleRegistrationForm() {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      {/* Header */}
      <header className="w-full bg-blue-600 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <img src="/logo.png" alt="Logo" className="h-8 w-8 mr-2" />
            <span className="font-bold">Government of South Africa</span>
          </div>
          <nav>
            <ul className="flex space-x-4">
              {["Home", "My Applications", "Service Directory", "Appointments", "Downloads", "Payments", "Support & Feedback"].map((item) => (
                <li key={item}><Link href="#" className="hover:underline">{item}</Link></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">Vehicle Registration Form</h1>
        <p className="text-gray-600 mb-8">
          Complete the form below to register your vehicle with the Government of South Africa.
        </p>

        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Vehicle Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <Input id="vehicleYear" type="number" placeholder="Enter vehicle year" />
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
                <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
                <p className="text-sm text-gray-600 mb-4">Please ensure you have the following documents ready to upload:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  <li>Proof of ownership (e.g., purchase invoice)</li>
                  <li>Valid ID document</li>
                  <li>Proof of address</li>
                  <li>Vehicle roadworthy certificate</li>
                </ul>
                <Button>Upload Documents</Button>
              </div>

              <div className="flex items-center space-x-2 mt-4">
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

      {/* Footer */}
      <footer className="w-full bg-blue-800 text-white py-8 mt-16">
        <div className="container mx-auto grid grid-cols-4 gap-8">
          <div>
            <img src="/logo.png" alt="Logo" className="h-12 w-12 mb-4" />
            <p className="text-sm">Government of South Africa</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:underline">Disclaimer</Link></li>
              <li><Link href="#" className="hover:underline">Help</Link></li>
              <li><Link href="#" className="hover:underline">Terms & Conditions</Link></li>
              <li><Link href="#" className="hover:underline">Accessibility Statement</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Government</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Apex Bodies</Link></li>
              <li><Link href="#" className="hover:underline">Government Orders</Link></li>
              <li><Link href="#" className="hover:underline">Gazettes</Link></li>
              <li><Link href="#" className="hover:underline">Feedback</Link></li>
              <li><Link href="#" className="hover:underline">Downloads</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li><Link href="#" className="hover:underline">Driver's License Application</Link></li>
              <li><Link href="#" className="hover:underline">Vehicle Registration</Link></li>
              <li><Link href="#" className="hover:underline">Public Transport Permits</Link></li>
              <li><Link href="#" className="hover:underline">Road Safety Programs</Link></li>
              <li><Link href="#" className="hover:underline">Traffic Fines</Link></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-blue-700 text-sm">
          <p>Content Owned, Maintained and Updated by Government of South Africa. For any query, please contact concerned departments. (Technical Support By NIC)</p>
        </div>
      </footer>
    </div>
  );
}