"use client"

import { HTMLInputTypeAttribute, useMemo } from "react"
import { format } from "date-fns"
import { CalendarIcon } from "lucide-react"

import { cn } from "@/lib/utils"
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

import { Button } from "../ui/button"
import { Calendar } from "../ui/calendar"
import { Input } from "../ui/input"
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover"
import { Textarea } from "../ui/textarea"
import { useApplicationForm } from "./ApplicationFormContext"

export interface ApplicationFormTemplate<T> {
  title: string
  fields: {
    type: HTMLInputTypeAttribute | "select" | "textarea"
    name: keyof T & string
    label: string
    placeholder?: string
    description?: string
    options?: string[]
  }[]
}

export default function ApplicationForm({
  template,
}: {
  template: ApplicationFormTemplate<any>
}) {
  const { form, isApplicationPending, handleFileUpload, onSubmit } =
    useApplicationForm()

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
              {type === "textarea" && (
                <FormControl>
                  <Textarea
                    placeholder={placeholder}
                    className="resize-none"
                    {...field}
                  />
                </FormControl>
              )}

              {type === "date" && (
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button
                        variant={"outline"}
                        className={cn(
                          "w-full pl-3 text-left font-normal",
                          !field.value && "text-muted-foreground"
                        )}
                      >
                        {field.value ? (
                          format(field.value, "PPP")
                        ) : (
                          <span>Pick a date</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      fromDate={new Date()}
                      selected={field.value}
                      onSelect={field.onChange}
                      initialFocus
                      disabled={field.disabled}
                    />
                  </PopoverContent>
                </Popover>
              )}

              {type === "file" && (
                <FormControl>
                  <Input
                    name={name}
                    type={type}
                    onChange={(e) => {
                      if (e.target.files) {
                        const file = e.target.files[0]
                        handleFileUpload(name, file)
                      }
                    }}
                  />
                </FormControl>
              )}

              {type !== "select" &&
                type !== "textarea" &&
                type !== "date" &&
                type !== "file" && (
                  <FormControl>
                    <Input type={type} placeholder={placeholder} {...field} />
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
        {renderFields}

        <Button className="w-full" type="submit">
          Submit
        </Button>
      </form>
    </Form>
  )
}
