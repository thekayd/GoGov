import Link from 'next/link';
import Image from 'next/image';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Checkbox } from "@/components/ui/checkbox";
import { ClientOnlySelect } from '@/components/ClientOnlySelect';

export default function PassportApplicationForm2() {
  return (
    <div className="bg-white flex flex-col items-center w-full">
      {/* Header */}
      <header className="w-full bg-[#0069FF] text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/assets/images/Download111.jpeg" alt="Logo" width={64} height={45} className="mr-4" />
            <span className="font-medium text-sm">Government of South Africa</span>
          </div>
          <nav>
            <ul className="flex space-x-5">
              <li><a href="#" className="text-sm font-medium">Home</a></li>
              <li><a href="#" className="text-sm font-medium">My applications</a></li>
              <li><a href="#" className="text-sm font-medium">Service Directory</a></li>
              <li><a href="#" className="text-sm font-medium">Appointments</a></li>
              <li><a href="#" className="text-sm font-medium">Downloads</a></li>
              <li><a href="#" className="text-sm font-medium">Payments</a></li>
              <li><a href="#" className="text-sm font-medium">Support & Feedback</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto mt-8 px-4">
        <h1 className="text-4xl font-bold mb-4 text-center">South African Passport Application</h1>
        <p className="text-gray-600 mb-8 text-center">
          Need an experienced and skilled hand with custom IT projects?<br />
          Fill out the form to get a free consultation.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <Input placeholder="Enter Name" className="mb-4" />
            <Input placeholder="Enter Surname" className="mb-4" />
            <Input placeholder="Enter ID Number" className="mb-4" />
            <ClientOnlySelect placeholder="Gender" className="mb-4">
              <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </ClientOnlySelect>
            <ClientOnlySelect placeholder="Status" className="mb-4">
              <SelectContent>
                <SelectItem value="single">Single</SelectItem>
                <SelectItem value="married">Married</SelectItem>
                <SelectItem value="divorced">Divorced</SelectItem>
                <SelectItem value="widowed">Widowed</SelectItem>
              </SelectContent>
            </ClientOnlySelect>
            <Input placeholder="Address" className="mb-4" />
            <Input placeholder="Enter Email" className="mb-4" />
            <Input placeholder="Enter Phone Number" className="mb-4" />
            <ClientOnlySelect placeholder="License Type" className="mb-4">
              <SelectContent>
                <SelectItem value="standard">Standard</SelectItem>
                <SelectItem value="professional">Professional</SelectItem>
                <SelectItem value="commercial">Commercial</SelectItem>
              </SelectContent>
            </ClientOnlySelect>
          </div>
          <div>
            <h2 className="text-xl font-bold mb-4">Date of Birth</h2>
            <Calendar className="mb-8" />
            
            <h2 className="text-xl font-bold mb-4">South African Identity Document (ID)</h2>
            <p className="text-sm text-gray-600 mb-2">Attach file. File size of your documents should not exceed 10MB</p>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center mb-4">
              <Button>Upload Additional file</Button>
            </div>

            <h2 className="text-xl font-bold mb-4">Passport Photograph</h2>
            <p className="text-sm text-gray-600 mb-2">Attach file. File size of your documents should not exceed 10MB</p>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center mb-4">
              <Button>Upload Additional file</Button>
            </div>

            <h2 className="text-xl font-bold mb-4">Proof of Address</h2>
            <p className="text-sm text-gray-600 mb-2">Attach file. File size of your documents should not exceed 10MB</p>
            <div className="border-2 border-dashed border-gray-300 p-4 text-center mb-4">
              <Button>Upload Additional file</Button>
            </div>

            <div className="flex items-center mb-8">
              <Checkbox id="nda" />
              <label htmlFor="nda" className="ml-2 text-sm">I want to protect my data by signing an NDA</label>
            </div>

            <Link href="/passport-application">
              <Button className="w-full bg-[#008F17] text-white">Submit</Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-[#2A77BF] text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          {/* ... (copy the footer content from your provided code) ... */}
        </div>
      </footer>
    </div>
  );
}