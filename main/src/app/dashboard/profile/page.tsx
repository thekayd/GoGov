import UserInfoForm from "./(components)/UserInfoForm"
import { UserInfoFormProvider } from "./(components)/UserInfoFormContext"

export default function ProfilePage() {
  return (
    <div className="min-h-screen w-full bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="mb-8 text-4xl font-semibold text-gray-900">
          Your Profile and Information
        </h1>

        <section className="mb-8 w-full">
          <UserInfoFormProvider>

          <UserInfoForm />
          </UserInfoFormProvider>
        </section>
      </div>
    </div>
  )
}
