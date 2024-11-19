export type SiteConfig = {
  name: string
  author: string
  description: string
  keywords: Array<string>
  url: {
    base: string
    author: string
  }
  links: {
    github: string
  }
  ogImage: string
}

export type DatabaseTables =
  | "admin_profile"
  | "bursary_applications"
  | "drivers_license_applications"
  | "passport_applications"
  | "profile"
  | "scheduled_appointments"
  | "user_feedback"
  | "vaccination_applications"
