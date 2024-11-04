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
import PassportApplicationForm from "@/components/application-forms/passport-application"

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

      <PassportApplicationForm />
    </main>
  )
}
