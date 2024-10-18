"use client"

import { Button } from "@/components/ui/button"

import { signOut } from "../auth/actions"

export default function PrivatePage() {
  return (
    <div>
      <h1>Hello</h1>
      <Button onClick={() => signOut()}>Sign Out</Button>
    </div>
  )
}
