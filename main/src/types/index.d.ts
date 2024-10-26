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
  | "drivers_license_applications"
  | "bursary_applications"
  | "passport_applications"
  | "scheduled_appointments"
  | "vaccination_applications"
  | "profile"
