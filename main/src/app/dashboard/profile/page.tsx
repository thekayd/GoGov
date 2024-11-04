import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

import ProfileForm from "./(components)/ProfileForm"
import { ProfileFormProvider } from "./(components)/ProfileFormContext"

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-semibold text-gray-900">
          Your Profile and Information
        </h1>

        <section className="mb-8 w-full">
          <Card className="w-full max-w-4xl">
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
    </div>
  )
}
