import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export default function PassportApplicationForm2() {
  return (
    <main className="mx-auto mt-8 px-4">
      <h1 className="mb-4 text-center text-4xl font-bold">
        South African Passport Application
      </h1>
      <p className="mb-8 text-center text-gray-600">
        Need an experienced and skilled hand with custom IT projects?
        <br />
        Fill out the form to get a free consultation.
      </p>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <Input placeholder="Enter Name" className="mb-4" />
          <Input placeholder="Enter Surname" className="mb-4" />
          <Input placeholder="Enter ID Number" className="mb-4" />
          <Select>
            <SelectContent>
              <SelectItem value="male">Male</SelectItem>
              <SelectItem value="female">Female</SelectItem>
              <SelectItem value="other">Other</SelectItem>
            </SelectContent>
          </Select>
          <Select>
            <SelectContent>
              <SelectItem value="single">Single</SelectItem>
              <SelectItem value="married">Married</SelectItem>
              <SelectItem value="divorced">Divorced</SelectItem>
              <SelectItem value="widowed">Widowed</SelectItem>
            </SelectContent>
          </Select>
          <Input placeholder="Address" className="mb-4" />
          <Input placeholder="Enter Email" className="mb-4" />
          <Input placeholder="Enter Phone Number" className="mb-4" />
          <Select>
            <SelectContent>
              <SelectItem value="standard">Standard</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="commercial">Commercial</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <h2 className="mb-4 text-xl font-bold">Date of Birth</h2>
          <Calendar className="mb-8" />

          <h2 className="mb-4 text-xl font-bold">
            South African Identity Document (ID)
          </h2>
          <p className="mb-2 text-sm text-gray-600">
            Attach file. File size of your documents should not exceed 10MB
          </p>
          <div className="mb-4 border-2 border-dashed border-gray-300 p-4 text-center">
            <Button>Upload Additional file</Button>
          </div>

          <h2 className="mb-4 text-xl font-bold">Passport Photograph</h2>
          <p className="mb-2 text-sm text-gray-600">
            Attach file. File size of your documents should not exceed 10MB
          </p>
          <div className="mb-4 border-2 border-dashed border-gray-300 p-4 text-center">
            <Button>Upload Additional file</Button>
          </div>

          <h2 className="mb-4 text-xl font-bold">Proof of Address</h2>
          <p className="mb-2 text-sm text-gray-600">
            Attach file. File size of your documents should not exceed 10MB
          </p>
          <div className="mb-4 border-2 border-dashed border-gray-300 p-4 text-center">
            <Button>Upload Additional file</Button>
          </div>

          <div className="mb-8 flex items-center">
            <Checkbox id="nda" />
            <label htmlFor="nda" className="ml-2 text-sm">
              I want to protect my data by signing an NDA
            </label>
          </div>

          <Link href="/passport-application">
            <Button className="w-full bg-[#008F17] text-white">Submit</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
