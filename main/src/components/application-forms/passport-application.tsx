"use client"

import { use, useState } from "react"
import {
  DriversLicenseModel,
  DriversLicenseModelSchema,
} from "@/models/DriversLicenseModel"
import {
  PassportApplicationModel,
  PassportApplicationModelSchema,
} from "@/models/PassportApplicationModel"
import { zodResolver } from "@hookform/resolvers/zod"
import { Checkbox } from "@radix-ui/react-checkbox"
import { Link, Paperclip, UploadCloud } from "lucide-react"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import * as z from "zod"

import { useCreateDriversLicense } from "@/hooks/useApplication"
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

import { Calendar } from "../ui/calendar"
import { Input } from "../ui/input"

export default function PassportApplicationForm() {
  const [files, setFiles] = useState<File[] | null>(null)

  const dropZoneConfig = {
    maxFiles: 5,
    maxSize: 1024 * 1024 * 4,
    multiple: true,
  }

  const user = useUser()
  const profile = useShowProfile()
  const form = useForm<PassportApplicationModel>({
    resolver: zodResolver(PassportApplicationModelSchema),
    defaultValues: {
      identity_document: "something",
      passport_photo: "something",
      proof_of_address: "something",
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

  function onSubmit(values: PassportApplicationModel) {
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
        onSubmit={form.handleSubmit(onSubmit)}
        className="mx-auto max-w-3xl space-y-8 py-10"
      >
        <FormField
          control={form.control}
          name="passport_type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Type</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select passport type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="m@example.com">m@example.com</SelectItem>
                  <SelectItem value="m@google.com">m@google.com</SelectItem>
                  <SelectItem value="m@support.com">m@support.com</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="identity_document"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Identity Document</FormLabel>
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
                      <CloudUpload className="h-10 w-10 text-gray-500" />
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
              <FormDescription>Ensure document is certified</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="passport_photo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Passport Photo</FormLabel>
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
                      <CloudUpload className="h-10 w-10 text-gray-500" />
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
              <FormDescription>
                This will be used as your passport photo
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="proof_of_address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Proof of Address</FormLabel>
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
                      <CloudUpload className="h-10 w-10 text-gray-500" />
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

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  )
}
