import { Link, LucideIcon } from "lucide-react"
import { IconType } from "react-icons/lib"

import { buttonVariants } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

interface Application {
  title: string
  icon: IconType | LucideIcon
  description: string
  link: string
}

export default function ApplicationCard({
  application,
}: {
  application: Application
}) {
  return (
    <Card className="overflow-hidden transition-shadow hover:shadow-sm">
      <CardHeader className="p-2">
        <div className="flex items-center space-x-1">
          <application.icon className="h-3 w-3 text-blue-500" />
          <CardTitle className="text-xs font-medium">
            {application.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="p-2 pt-0">
        <CardDescription className="line-clamp-2 text-[10px]">
          {application.description}
        </CardDescription>
      </CardContent>
      <CardFooter className="p-2 pt-0">
        <Link
          href={application.link}
          className={buttonVariants({
            size: "sm",
            variant: "outline",
            className:
              "h-6 w-full py-0 text-[10px] text-blue-500 hover:bg-blue-50 hover:text-blue-600",
          })}
        >
          Start
        </Link>
        {/* <Button
                    variant="outline"
                    size="sm"
                    className="h-6 w-full py-0 text-[10px] text-blue-500 hover:bg-blue-50 hover:text-blue-600"
                  >
                    Start
                    <ChevronRight className="ml-1 h-2 w-2" />
                  </Button> */}
      </CardFooter>
    </Card>
  )
}
