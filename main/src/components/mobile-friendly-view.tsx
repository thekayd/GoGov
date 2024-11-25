import { Laptop, ArrowRight } from 'lucide-react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export function MobileFriendlyView() {
  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold text-center">Applications Table</CardTitle>
        <CardDescription className="text-center">
          For the best experience, please view on a larger screen
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center space-y-4">
        <Laptop className="w-24 h-24 text-primary" />
        <p className="text-center text-muted-foreground">
          The full applications table is optimized for laptop and desktop viewing. 
          Switch to a larger device to access all features and information.
        </p>
      </CardContent>
      <CardFooter className="flex justify-center">
        <Button variant="outline" className="w-full">
          Refresh <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  )
}

