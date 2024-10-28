"use client"

import { use, useState } from "react"
import {
  DriversLicenseModel,
  DriversLicenseModelSchema,
} from "@/models/DriversLicenseModel"
import { zodResolver } from "@hookform/resolvers/zod"
import { Calendar as CalendarIcon, Paperclip, UploadCloud } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { useCreateDriversLicense } from "@/hooks/useDriversLicense"
import { uploadFiles } from "@/hooks/useFileUpload"
import { useShowProfile } from "@/hooks/useProfile"
import useUser from "@/hooks/useUser"
import { Button } from "@/components/ui/button"
import {
  FileInput,
  FileUploader,
  FileUploaderContent,
  FileUploaderItem,
} from "@/components/ui/file-upload"
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

export default function DriversApplicationForm() {
  const [files, setFiles] = useState<File[] | null>(null)

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  }

  const user = useUser()
  const profile = useShowProfile()
  const form = useForm<DriversLicenseModel>({
    resolver: zodResolver(DriversLicenseModelSchema),
    defaultValues: {
      email: user.data?.email ?? "",
    },
  })

  const { data, isPending, error, mutate } = useCreateDriversLicense({
    onSuccess: () => {
      toast.success("Drivers License Application created successfully")
    },
    onError: () => {
      toast.error(
        `Drivers License Application creating failed - ${error?.message}`
      )
    },
  })

  const formError = form.formState.errors
  console.log("Error: ", formError)

  function onSubmit(values: DriversLicenseModel) {
    console.log("Files: ", values)
    // if (files === null || files.length < 2) {
    //   form.setError("uploaded_documents", {
    //     type: "required",
    //     message: "Please upload at least two documents",
    //   })
    //   return
    // }

    // Validate Profil
    if (!profile.data) {
      form.setError("email", {
        type: "validate",
        message: "Please update your Profile/Personal information first.",
      })
    }

    toast.promise(
      async () => {
        // values.uploaded_documents = await uploadFiles(files!)
        values.uploaded_documents = ["something", "something2"]
        mutate(values)
      },
      {
        loading: "Submitting...",
        success: (res) => {
          console.log("Response: ", res)
          return "Successfully submitted"
        },
        error: (err) => {
          console.log("Error: ", err)
          return "Failed to submit"
        },
      }
    )
  }

  return (
    <Form {...form}>
      <form
        id="application-form"
        onSubmit={form.handleSubmit(onSubmit)}
        className=" max-w-3xl space-y-8"
      >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-6">
            <FormField
              control={form.control}
              name="license_type"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>License Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Car">Car</SelectItem>
                      <SelectItem value="Motorcycle">Motorcycle</SelectItem>
                      <SelectItem value="Bus">Bus</SelectItem>
                      <SelectItem value="Truck">Truck</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>
                    Select the type of License you want
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="col-span-6">
            <FormField
              control={form.control}
              name="test_centre"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Test Centre</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Pretoria Test Centre">
                        Pretoria Test Centre
                      </SelectItem>
                      <SelectItem value="Johannesburg Test Centre">
                        Johannesburg Test Centre
                      </SelectItem>
                      <SelectItem value="Sandton Test Centre">
                        Sandton Test Centre
                      </SelectItem>
                      <SelectItem value="Midrand Test Centre">
                        Midrand Test Centre
                      </SelectItem>
                      <SelectItem value="Centurion Test Centre">
                        Centurion Test Centre
                      </SelectItem>
                      <SelectItem value="Soweto Test Centre">
                        Soweto Test Centre
                      </SelectItem>
                      <SelectItem value="Kempton Park Test Centre">
                        Kempton Park Test Centre
                      </SelectItem>
                      <SelectItem value="Germiston Test Centre">
                        Germiston Test Centre
                      </SelectItem>
                      <SelectItem value="Benoni Test Centre">
                        Benoni Test Centre
                      </SelectItem>
                      <SelectItem value="Boksburg Test Centre">
                        Boksburg Test Centre
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormDescription>Select a Test Centre</FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="uploaded_documents"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Required Documents</FormLabel>
              <FormControl>
                <FileUploader
                  value={files}
                  onValueChange={setFiles}
                  dropzoneOptions={dropZoneConfig}
                  className="relative rounded-lg bg-background p-2"
                >
                  <FileInput
                    id="fileInput"
                    className="outline-dashed outline-1 outline-slate-500"
                  >
                    <div className="flex w-full flex-col items-center justify-center p-8 ">
                      <UploadCloud className="h-10 w-10 text-gray-500" />
                      <p className="mb-1 text-sm text-gray-500 dark:text-gray-400">
                        <span className="font-semibold">Click to upload</span>
                        &nbsp; or drag and drop
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        SVG, PNG, JPG or GIF
                      </p>
                    </div>
                  </FileInput>
                  <FileUploaderContent>
                    {files &&
                      files.length > 0 &&
                      files.map((file, i) => (
                        <FileUploaderItem key={i} index={i}>
                          <Paperclip className="h-4 w-4 stroke-current" />
                          <span>{file.name}</span>
                        </FileUploaderItem>
                      ))}
                  </FileUploaderContent>
                </FileUploader>
              </FormControl>
              <FormDescription>Upload a file.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
