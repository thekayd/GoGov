"use client"

import { useState } from "react"
import Gemini from "gemini-ai"
import { Send } from "lucide-react"

import { env } from "@/env.mjs"
import { useGemini } from "@/hooks/useGemini"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

import { AskGemini } from "./actions"

type Message = {
  id: number
  text: string
  sender: "user" | "ai"
}

export default function SupportPage() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hello! How can I assist you today?", sender: "ai" },
  ])
  const [inputMessage, setInputMessage] = useState("")

  const handleSendMessage = async () => {
    if (inputMessage.trim() === "") return

    const newMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: "user",
    }

    setMessages([...messages, newMessage])
    setInputMessage("")

    const response = await AskGemini(inputMessage)
    const aiResponse: Message = {
      id: messages.length + 2,
      text: response,
      sender: "ai",
    }
    setMessages((prevMessages) => [...prevMessages, aiResponse])

    // Simulate AI response
    // setTimeout(() => {
    //   const aiResponse: Message = {
    //     id: messages.length + 2,
    //     text: "Thank you for your message. I'm processing your request and will respond shortly.",
    //     sender: "ai",
    //   }
    //   setMessages((prevMessages) => [...prevMessages, aiResponse])
    // }, 1000)
  }

  return (
    <div className="min-h-screen py-5">
      <Card className="mx-auto w-full max-w-md">
        <CardHeader className="flex flex-row items-center gap-3 p-4">
          <Avatar>
            <AvatarImage
              src="/placeholder.svg?height=40&width=40"
              alt="AI Assistant"
            />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar>
          <div>
            <h2 className="text-lg font-semibold">AI Assistant</h2>
            <p className="text-sm text-green-500">Online</p>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="h-[400px] pr-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"} mb-4`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-blue-500 text-white"
                      : "bg-gray-100 text-gray-800"
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
          </ScrollArea>
        </CardContent>
        <CardFooter className="flex gap-2">
          <Input
            placeholder="Type your message..."
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            onKeyPress={(e) => {
              if (e.key === "Enter") {
                handleSendMessage()
              }
            }}
            className="flex-grow"
          />
          <Button onClick={handleSendMessage} size="icon">
            <Send className="h-4 w-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
