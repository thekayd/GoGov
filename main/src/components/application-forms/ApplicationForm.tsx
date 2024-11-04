"use client"

import { useMemo } from "react"
import { useRouter } from "next/navigation"

import { useShowProfile } from "@/hooks/useProfile"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { Input } from "../ui/input"
import { useApplicationForm } from "./ApplicationFormContext"

const testCenters = [
  "Pretoria Test Centre",
  "Johannesburg Test Centre",
  "Sandton Test Centre",
  "Midrand Test Centre",
  "Centurion Test Centre",
  "Soweto Test Centre",
  "Kempton Park Test Centre",
  "Germiston Test Centre",
  "Benoni Test Centre",
  "Boksburg Test Centre",
]

export interface ApplicationFormTemplate {
  title: string
  fields: {
    type: "select" | "file"
    name: string
    label: string
    placeholder?: string
    description?: string
    options?: string[]
  }[]
}

export default function ApplicationForm({
  template,
}: {
  template: ApplicationFormTemplate
}) {
  const { form, isApplicationPending, onSubmit } = useApplicationForm()

  const renderFields = useMemo(() => {
    return template.fields.map(
      ({ label, name, type, description, options, placeholder }) => (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              {type === "select" && (
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={placeholder} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {options?.map((value) => (
                      <SelectItem value={value}>{value}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              )}

              {type === "file" && (
                <FormControl>
                  <Input type="file" {...field} />
                </FormControl>
              )}

              {description && <FormDescription>{description}</FormDescription>}
              <FormMessage />
            </FormItem>
          )}
        />
      )
    )
  }, [template.fields])
  return (
    <Form {...form}>
      <form
        id="application-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-w-3xl space-y-8"
      >
        {/* <div className="grid grid-cols-12 gap-4"> */}
        {/* <div className="col-span-6"> */}

        {renderFields}

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
