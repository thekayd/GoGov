"use client"

import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { toast } from "sonner"
import { z } from "zod"

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
import { Input } from "@/components/ui/input"

import { login, loginAsAdmin } from "../actions"
import { loginFormScheam, LoginFormScheam } from "./LoginForm"

export default function AdminLoginForm() {
  // Using react-hook-forms for accessible and easy form validation using schemas
  const form = useForm<LoginFormScheam>({
    resolver: zodResolver(loginFormScheam),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values: LoginFormScheam) {
    toast.promise(loginAsAdmin(values), {
      loading: "Logging in...",
      success: (res) => {
        console.log("Login Response: ", res)
        return "Successfully Logged as Admin"
      },
      error: (err: Error) => {
        console.log("Error: ", err.message)
        return `Oops 🤯 ${err.message}. Please try again.`
      },
    })
  }

  return (
    <Form {...form}>
      {/* OnSubmit fires the server action for login */}
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="youremail@example.com"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                This is your public display name.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="relative">
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    placeholder="password"
                    autoComplete="current-password"
                    type="password"
                    {...field}
                  />
                </FormControl>
                <FormDescription>
                  This is your public display name.
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href="/forgot-password"
            className="absolute right-0 top-0 text-xs text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Login now
        </Button>
      </form>
    </Form>
  )
}
