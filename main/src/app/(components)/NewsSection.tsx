import Image from "next/image"

import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"

export function NewsSection() {
  return (
    <section className="bg-gray-100 ">
      <div className="container mx-auto max-w-6xl space-y-10 px-4 md:px-10">
        <Typography variant={"h2"} className="text-center">
          News and Events
        </Typography>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-lg bg-white p-6 shadow-md">
            <Typography variant={"h3"}>Announcements</Typography>
            <Image
              src="/assets/images/Image1.png"
              alt="Announcements"
              width={400}
              height={200}
              className="mb-4 rounded-lg"
            />
            <Typography variant={"p"} affects={"removePMargin"} className="">
              Explore South Africa's commitment to excellence in public
              services! Get a comprehensive range of services across transport,
              healthcare, education, and home affairs. Efficient public
              transportation networks and advanced healthcare facilities to
              quality education systems and streamlined home affairs processes,
              South Africa is dedicated to enhancing the quality of life for all
              its citizens.
            </Typography>
            <Button variant="link">View More</Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Spotlight</h3>
            <Image
              src="/assets/images/Image19.png"
              alt="Spotlight"
              width={400}
              height={200}
              className="mb-4 rounded-lg"
            />
            <p className="mb-4 text-gray-600">
              Modern Infrastructure: Enjoy smooth travel with South Africa's
              extensive road networks, rail systems, and public transit options.
              Quality Care: Access top-tier healthcare services through a
              network of state-of-the-art hospitals and clinics. Support for
              Students: Access various support services, including scholarships,
              mentorships, and extracurricular activities.
            </p>
            <Button variant="link">View More</Button>
          </div>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <h3 className="mb-4 text-xl font-semibold">Stay Connected</h3>
            <Image
              src="/assets/images/Image12.png"
              alt="Stay Connected"
              width={400}
              height={200}
              className="mb-4 rounded-lg"
            />
            <ul className="mb-4 list-inside list-disc text-gray-600">
              <li>Subscribe to our newsletter</li>
              <li>Download the SA Government app</li>
              <li>Participate in surveys</li>
              <li>Report concerns</li>
            </ul>
            <Button variant="link">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
