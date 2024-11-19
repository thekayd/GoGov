import { siteMapData } from "@/config/site"

export const protectedPaths = [
  siteMapData.Dashboard.path,
  siteMapData.Dashboard.children.Profile.path,
  siteMapData.Dashboard.children.Feedback.path,
  siteMapData.Dashboard.children.Appointments.path,
  siteMapData.Dashboard.children.Applications.path,
  siteMapData.Dashboard.children.Applications.children.Bursary.path,
  siteMapData.Dashboard.children.Applications.children.DriversLicense.path,
  siteMapData.Dashboard.children.Applications.children.Passport.path,
  siteMapData.Dashboard.children.Applications.children.Vaccination.path,
  siteMapData.Dashboard.children.Applications.children.Vehicle.path,
]
export const authPaths = [siteMapData.Auth.path]
