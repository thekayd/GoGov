import Typography from "@/components/ui/typography"

import { RootLayoutProps } from "../layout"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    // <div className="flex w-full flex-col items-center justify-center py-5">
    //   {children}
    // </div>
    <div className="flex w-full flex-col items-center justify-center">
      <div className="min-h-screen px-3 py-10">
        {/* {isLoading && (
            <div className="flex min-h-screen w-full items-center justify-center">
              <Loader className="h-8 w-8 animate-spin" />
            </div>
          )} */}
        <div className="mx-auto max-w-5xl space-y-4">
          <Typography variant={"h1"}>Citizen Dashboard</Typography>

          {children}
        </div>
      </div>
    </div>
  )
}
