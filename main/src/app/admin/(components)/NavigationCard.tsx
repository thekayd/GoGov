import Link from "next/link"
import { LucideIcon } from "lucide-react"

import { Card } from "@/components/ui/card"
import Typography from "@/components/ui/typography"

export default function DashboardNavigationCard({
  details,
}: {
  details: {
    icon: LucideIcon
    title: string
    link: string
    active?: boolean
  }
}) {
  return (
    <Link href={details.link} className="min-h-full w-full">
      <Card
        className={`flex h-full w-full flex-col items-center justify-center space-y-4 p-5 text-center hover:cursor-pointer hover:bg-secondary ${details.active && "border-green-500"}`}
      >
        <details.icon size={40} />
        <Typography variant={"p"} affects={"large"}>
          {details.title}
        </Typography>
      </Card>
    </Link>
  )
}
