"use client"

import { useState } from "react"
import { Send } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

import Chatbot from "./(components)/Chatbot"
import SupportSideView from "./(components)/SupportSideView"
import { AskGemini } from "./actions"

type Message = {
  id: number
  text: string
  sender: "user" | "ai"
}

export default function SupportPage() {
  return (
    <div className="min-h-screen w-full p-4 py-3">
      <section className="grid w-full max-w-4xl grid-cols-1 items-start justify-center gap-3 md:grid-cols-2">
        <Chatbot />
        <SupportSideView />
      </section>
    </div>
  )
}
