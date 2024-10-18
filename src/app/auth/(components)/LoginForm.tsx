"use client";

import { login } from "../actions";
import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

// Defines the Forms structure
const loginFormScheam = z.object({
  name: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  password: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});
export type LoginFormScheam = z.infer<typeof loginFormScheam>;

export default function LoginForm() {
  // Using react-hook-forms for accessible and easy form validation using schemas
  const form = useForm<LoginFormScheam>({
    resolver: zodResolver(loginFormScheam),
    defaultValues: {
      name: "Charles",
      email: "charlierossouw@outlook.com",
      password: "password123",
    },
  });

  return (
    <Form {...form}>
      {/* OnSubmit fires the server action for login */}
      <form onSubmit={form.handleSubmit((values) => login(values))} className="space-y-5">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="youremail@example.com" {...field} />
              </FormControl>
              <FormDescription>This is your public display name.</FormDescription>
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
                <FormDescription>This is your public display name.</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Link
            href="/forgot-password"
            className="absolute top-0 right-0 text-xs text-blue-600 hover:text-blue-800"
          >
            Forgot password?
          </Link>
        </div>

        <Button type="submit" className="w-full">
          Login now
        </Button>
      </form>
    </Form>
  );
}
