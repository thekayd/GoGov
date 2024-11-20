import { VerifyAdmin } from "../auth/actions"
import { RootLayoutProps } from "../layout"

export default async function AdminLayout({ children }: RootLayoutProps) {
  await VerifyAdmin()

  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="min-h-screen px-4 py-10">
        {/* {isLoading && (
            <div className="flex min-h-screen w-full items-center justify-center">
              <Loader className="h-8 w-8 animate-spin" />
            </div>
          )} */}
        <div className="mx-auto max-w-5xl space-y-4">
          <h1 className=" text-4xl font-semibold text-gray-900">
            Admin Portal
          </h1>

          {children}
        </div>
      </div>
    </div>
  )
}
