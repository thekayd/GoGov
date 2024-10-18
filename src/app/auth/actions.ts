"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { LoginFormScheam } from "./(components)/LoginForm";
import { RegisterFormSchema } from "./(components)/RegisterForm";
import { AuthService } from "@/supabase/AuthService";

// Server Action for Login (and SignUp)
export async function login(values: LoginFormScheam) {
  const response = await AuthService.login(values.email, values.password); // Authentication layer in the Auth Service

  if (response.err) {
    redirect("/error");
  }

  revalidatePath("/dashboard", "layout");
  redirect("/dashboard");
}

export async function signup(values: RegisterFormSchema) {
  const response = await AuthService.signUp(values.email, values.password);

  if (response.err) {
    redirect("/error");
  }

  revalidatePath("/", "layout");
  redirect("/auth?state=login");
}
