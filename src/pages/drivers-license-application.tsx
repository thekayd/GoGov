import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";

export default function DriversLicenseApplication() {
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
              {["Home", "My applications", "Service Directory", "Appointments", "Downloads", "Payments", "Support & Feedback"].map((item) => (
                <li key={item}><a href="#" className="hover:underline">{item}</a></li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">Driver's License Application</h1>
        <p className="text-gray-600 mb-8">
          Apply for your South African driver's license online.<br />
          Fill out the form below to start your application.
        </p>

        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter Name" />
                </div>
                <div>
                  <Label htmlFor="surname">Surname</Label>
                  <Input id="surname" placeholder="Enter Surname" />
                </div>
                <div>
                  <Label htmlFor="id-number">ID Number</Label>
                  <Input id="id-number" placeholder="Enter ID Number" />
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select placeholder="Select Gender">
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="province">Province</Label>
                  <Select placeholder="Select Province">
                    <option value="gauteng">Gauteng</option>
                    <option value="western-cape">Western Cape</option>
                    <option value="eastern-cape">Eastern Cape</option>
                    <option value="kwazulu-natal">KwaZulu-Natal</option>
                    <option value="free-state">Free State</option>
                    <option value="north-west">North West</option>
                    <option value="northern-cape">Northern Cape</option>
                    <option value="mpumalanga">Mpumalanga</option>
                    <option value="limpopo">Limpopo</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" />
                </div>
                <div className="col-span-2">
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" placeholder="Enter Address" />
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="Enter Email" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Enter Phone Number" />
                </div>
                <div>
                  <Label htmlFor="license-type">License Type</Label>
                  <Select placeholder="Select License Type">
                    <option value="code-08">Code 08 (Light motor vehicle)</option>
                    <option value="code-10">Code 10 (Heavy motor vehicle)</option>
                    <option value="code-14">Code 14 (Extra heavy motor vehicle)</option>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="test-centre">Test Centre</Label>
                  <Select placeholder="Select Test Centre">
                    <option value="johannesburg">Johannesburg Test Centre</option>
                    <option value="pretoria">Pretoria Test Centre</option>
                    {/* Add more test centres */}
                  </Select>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold mb-2">Required Documents</h3>
                <p className="text-sm text-gray-600 mb-4">Please ensure you have the following documents ready to upload:</p>
                <ul className="list-disc list-inside text-sm text-gray-600 mb-4">
                  <li>South African ID Document</li>
                  <li>Passport Photograph</li>
                  <li>Proof of Address</li>
                  <li>Eye Test Certificate</li>
                </ul>
                <Button>Upload Documents</Button>
              </div>

              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="form-checkbox" />
                <label htmlFor="terms" className="text-sm text-gray-700">
                  I agree to the terms and conditions
                </label>
              </div>

              <Button className="w-full">Submit Application</Button>
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
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Disclaimer</a></li>
              <li><a href="#" className="hover:underline">Help</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
              <li><a href="#" className="hover:underline">Accessibility Statement</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Government</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Apex Bodies</a></li>
              <li><a href="#" className="hover:underline">Government Orders</a></li>
              <li><a href="#" className="hover:underline">Gazettes</a></li>
              <li><a href="#" className="hover:underline">Feedback</a></li>
              <li><a href="#" className="hover:underline">Downloads</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Services</h3>
            <ul className="space-y-1 text-sm">
              <li><a href="#" className="hover:underline">Driver's License Application</a></li>
              <li><a href="#" className="hover:underline">Vehicle Registration</a></li>
              <li><a href="#" className="hover:underline">Public Transport Permits</a></li>
              <li><a href="#" className="hover:underline">Road Safety Programs</a></li>
              <li><a href="#" className="hover:underline">Traffic Fines</a></li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto mt-8 pt-4 border-t border-blue-700 text-sm">
          <p>Content Owned, Maintained and Updated by Government of South Africa. For any query, please contact concerned departments. (Technical Support By NIC)</p>
        </div>
      </footer>
    </div>
  )
}