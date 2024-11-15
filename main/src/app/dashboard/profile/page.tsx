import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Typography from "@/components/ui/typography"

import ProfileForm from "./(components)/ProfileForm"
import { ProfileFormProvider } from "./(components)/ProfileFormContext"

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-10 p-5">
      <Typography variant={"h1"} className="text-center ">
        Your Profile and Information
      </Typography>

      <section className="mb-8 flex w-full items-center justify-center">
        <Card className="w-full max-w-4xl ">
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>

          <CardContent className="w-full">
            <ProfileFormProvider>
              <ProfileForm />
            </ProfileFormProvider>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
