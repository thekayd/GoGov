'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { MobileFriendlyView } from '@/components/mobile-friendly-view'
// Import your actual table component
// import { ApplicationsTable } from '@/components/applications-table'

export default function ApplicationsPage() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (isMobile) {
    return (
      <div className="container mx-auto p-4">
        <MobileFriendlyView />
      </div>
    )
  }

  return (
    <div className="container mx-auto p-4">
      {/* Your actual table component would go here */}
      {/* <ApplicationsTable /> */}
      <p>Your applications table would be rendered here on larger screens.</p>
    </div>
  )
}

