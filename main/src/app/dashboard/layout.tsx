import { RootLayoutProps } from "../layout"

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex w-full flex-col items-center justify-center py-5">
      {children}
    </div>
  )
}
