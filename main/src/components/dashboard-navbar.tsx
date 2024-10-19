import Link from "next/link"

import Typography from "./ui/typography"

const NavbarLinks = [
  { name: "Home", link: "/" },
  { name: "My applications", link: "dashboard/applications" },
  { name: "Service Directory", link: "/services" },
  { name: "Appointments", link: "/appointments" },
  { name: "Downloads", link: "/downloads" },
  { name: "Payments", link: "/payments" },
  { name: "Support & Feedback", link: "/support" },
]

function DashboardNavbar() {
  return (
    <header className="w-full bg-blue-600 p-4 text-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center justify-center">
          <img
            src="/assets/images/Download111.jpeg"
            alt="Logo"
            className="mr-2 h-8 w-8"
          />
          <Typography variant={"p"} affects={"small"}>
            Government of South Africa
          </Typography>
        </div>
        <nav>
          <ul className="flex space-x-4">
            {NavbarLinks.map((item, index) => (
              <li key={index}>
                <Link href={item.link}>
                  <Typography variant={"p"} affects={"small"}>
                    {item.name}
                  </Typography>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default DashboardNavbar
