"use server"

import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { AuthService } from "@/lib/AuthService"

import { LoginFormScheam } from "./(components)/LoginForm"
import { RegisterFormSchema } from "./(components)/RegisterForm"

// Server Action for Login (and SignUp)
export async function login(values: LoginFormScheam) {
  const response = await AuthService.login(values.email, values.password) // Authentication layer in the Auth Service

  if (response.err) {
    const error = response.val
    throw new Error(error.message, { cause: error.error })
    // redirect("/error")
  }

  revalidatePath("/dashboard", "layout")
  redirect("/dashboard")
}

export async function signup(values: RegisterFormSchema) {
  const response = await AuthService.signUp(values.email, values.password)

  if (response.err) {
    const error = response.val
    throw new Error(error.message, { cause: error.error })
  }

  revalidatePath("/", "layout")
  redirect("/auth?state=login")
}

export async function signOut() {
  const response = await AuthService.signOut()

  if (response.err) {
    redirect("/error")
  }

  revalidatePath("/", "layout")
  redirect("/")
}

export async function loginAsAdmin(values: LoginFormScheam) {
  const response = await AuthService.loginAsAdmin(values.email, values.password) // Authentication layer in the Auth Service

  if (response.err) {
    const error = response.val
    throw new Error(error.message, { cause: error.error })
    // redirect("/error")
  }

  revalidatePath("/admin", "layout")
  redirect("/admin")
}

export async function VerifyAdmin() {
  const response = await AuthService.getAdmin()
  if (response.err) {
    redirect("/auth")
    // const error = response.val
    // throw new Error(error.message, { cause: error.error })
    // redirect("/error")
  }

  revalidatePath("/auth?state=admin", "layout")
}
