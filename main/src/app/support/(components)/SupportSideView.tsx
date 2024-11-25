import Image from "next/image"
import {
  Calendar,
  Clock,
  FileText,
  Mail,
  MessageCircle,
  Phone,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function SupportSideView() {
  return (
    <Card className="mx-auto w-full max-w-md">
      <CardHeader>
        <div className="flex items-center space-x-4">
          <div className="relative h-16 w-16  overflow-hidden rounded-full border-2 border-primary">
            <Image
              src="/sa-guy.png"
              alt="AI Support Mascot"
              layout="fill"
              // width={100}
              // height={100}
              objectFit="cover"
            />
          </div>
          <div>
            <CardTitle>AI Support Assistant</CardTitle>
            <CardDescription>Here to help 24/7</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="mb-2 font-semibold">What I can help with:</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <FileText className="mr-2 h-4 w-4 text-muted-foreground" />
              Answer questions about our services
            </li>
            {/* <li className="flex items-center">
              <Calendar className="mr-2 h-4 w-4 text-muted-foreground" />
              Schedule appointments
            </li> */}
            <li className="flex items-center">
              <Clock className="mr-2 h-4 w-4 text-muted-foreground" />
              Provide status updates on your applications
            </li>
            <li className="flex items-center">
              <MessageCircle className="mr-2 h-4 w-4 text-muted-foreground" />
              Guide you through common processes
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Other ways to contact us:</h3>
          <div className="space-y-2">
            <p className="flex items-center">
              <Phone className="mr-2 h-4 w-4 text-muted-foreground" />
              +27 (0) 123 456 789
            </p>
            <p className="flex items-center">
              <Mail className="mr-2 h-4 w-4 text-muted-foreground" />
              support@gogov.nerfdesigns.com
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full">
          <MessageCircle className="mr-2 h-4 w-4" />
          Start Chat
        </Button>
      </CardFooter>
    </Card>
  )
}
