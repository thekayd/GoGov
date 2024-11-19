"use server"

import Gemini from "gemini-ai"

import { env } from "@/env.mjs"

export async function AskGemini(message: string) {
  const gemini = new Gemini(env.GEMINI_API_KEY)

  try {
    const res = await gemini.ask(message)
    if (res === "" || res === null) {
      //   return Promise.reject(
      //     new Error("Unexpected error happend, please try again")
      //   )
      console.log("Gemini Error Null: ", res)
      return "Unexpected error happend, please try again"
    }
    return res
  } catch (error: any) {
    console.log("Gemini Error: ", error)
    // return Promise.reject(new Error(error.message))
    return "Unexpected error happend, please try again"
  }
}
