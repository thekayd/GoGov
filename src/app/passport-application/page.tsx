import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PassportApplicationForm() {
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
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">My applications</a></li>
              <li><a href="#" className="hover:underline">Service Directory</a></li>
              <li><a href="#" className="hover:underline">Appointments</a></li>
              <li><a href="#" className="hover:underline">Downloads</a></li>
              <li><a href="#" className="hover:underline">Payments</a></li>
              <li><a href="#" className="hover:underline">Support & Feedback</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold mb-4">South African Passport Application</h1>
        <p className="text-gray-600 mb-8">
          Need an experienced and skilled hand with custom IT projects?<br />
          Fill out the form to get a free consultation.
        </p>

        <Card className="w-full max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle>Select a Date & Time</CardTitle>
          </CardHeader>
          <CardContent className="flex">
            <div className="w-1/2 pr-4">
              {/* Placeholder for Calendar */}
              <div className="bg-gray-200 h-64 flex items-center justify-center">
                Calendar Placeholder
              </div>
              {/* Removed Select component */}
            </div>
            <div className="w-1/2 pl-4">
              <h3 className="text-lg font-semibold mb-2">Available Times</h3>
              <div className="space-y-2">
                {["12:00", "12:30", "13:00", "13:30", "14:00", "14:30", "15:00", "15:30", "16:00", "16:30", "17:00", "17:30"].map((time) => (
                  <Button key={time} variant="outline" className="w-full justify-start">{time}</Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        <Button className="mt-8 mb-16">Schedule Event</Button>
      </main>

      {/* Footer */}
      <footer className="w-full bg-blue-800 text-white py-8">
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
              <li><a href="#" className="hover:underline">Apni Sarkar Uttarakhand</a></li>
              <li><a href="#" className="hover:underline">Corbett Tiger Reserve Booking</a></li>
              <li><a href="#" className="hover:underline">UTC Online</a></li>
              <li><a href="#" className="hover:underline">Chardham Yatra Booking</a></li>
              <li><a href="#" className="hover:underline">CM Dashboard</a></li>
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