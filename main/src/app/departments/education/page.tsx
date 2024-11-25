import Image from "next/image"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { HeroSection } from "@/app/(components)/HeroSection"

export default function Education() {
  return (
    <div className="flex min-h-screen flex-col">
      <HeroSection
        imageUrl="/assets/health-department.webp"
        title="Department of Health"
        subheading={"Discover an unparalleled journey filled with adventure."}
      />

      {/* Hero Section */}
      <section className="relative bg-[#3868A9] py-24 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            Welcome to the Department of Education
          </h1>
          <p className="mb-8 max-w-xl text-xl">
            Empowering Minds, Shaping Futures, Ensuring Quality Education for
            All
          </p>
          <Link href="/register">
            <Button className="bg-[#008BF9] px-4 py-2 text-lg hover:bg-[#0070CC]">
              CREATE YOUR GO.GOV ACCOUNT
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#EDF7FE] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
            About the Department of Education
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                Overview
              </h3>
              <p className="text-gray-600">
                The Department of Education is responsible for the development
                and implementation of education policies, curriculum standards,
                and ensuring access to quality education for all South Africans.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide quality education that transforms lives, promotes
                social cohesion, and contributes to the development of a skilled
                and capable workforce for South Africa.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                Key Services
              </h3>
              <ul className="list-inside list-disc text-gray-600">
                <li>Early Childhood Development</li>
                <li>Basic Education</li>
                <li>Higher Education and Training</li>
                <li>Adult Education and Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "School Registration",
                description:
                  "Register your child for school or apply for school admission.",
                image: "/assets/images/Image121.png",
              },
              {
                name: "Exam Information",
                description:
                  "Access exam timetables, results, and certification services.",
                image: "/assets/images/Image121.png",
              },
              {
                name: "Bursaries and Financial Aid",
                description:
                  "Apply for educational bursaries and financial assistance programs.",
                image: "/assets/images/Image121.png",
              },
            ].map((service, index) => (
              <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                <div className="relative mb-4 h-40 w-full">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                <p className="mb-4 text-gray-600">{service.description}</p>
                <Button className="border border-gray-300 hover:bg-gray-100">
                  Read More
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Information */}
      <section className="bg-[#EDF7FE] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
            Payment Information
          </h2>
          <div className="rounded-lg bg-white p-6 shadow-md">
            <p className="mb-4 text-gray-600">
              Most basic education services are provided free of charge. Fees
              may apply for certain specialized services or higher education
              programs. Please inquire for specific details.
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Services</th>
                  <th className="border p-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border p-2">Basic Education (Grades 1-12)</td>
                  <td className="border p-2">Free</td>
                </tr>
                <tr>
                  <td className="border p-2">University Application Fee</td>
                  <td className="border p-2">Varies by institution</td>
                </tr>
                <tr>
                  <td className="border p-2">TVET College Registration</td>
                  <td className="border p-2">Varies by program</td>
                </tr>
                <tr>
                  <td className="border p-2">Adult Education and Training</td>
                  <td className="border p-2">Free at public centers</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    Exam Certification (Replacements)
                  </td>
                  <td className="border p-2">Fee applies</td>
                </tr>
                <tr>
                  <td className="border p-2">
                    School Transport (where applicable)
                  </td>
                  <td className="border p-2">Subsidized rates</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I enroll my child in school?
              </AccordionTrigger>
              <AccordionContent>
                To enroll your child in school, contact your nearest public
                school or visit the Department of Education's website for online
                application options. You'll need to provide proof of residence,
                the child's birth certificate, and immunization records.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How can I access my matric results?
              </AccordionTrigger>
              <AccordionContent>
                Matric results are typically released in January. You can access
                them online through the Department of Education's website, via
                SMS, or by visiting your school. You'll need your exam number to
                retrieve your results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What financial aid options are available for higher education?
              </AccordionTrigger>
              <AccordionContent>
                There are several options including the National Student
                Financial Aid Scheme (NSFAS), bursaries, and scholarships. Visit
                the NSFAS website or contact your chosen institution's financial
                aid office for more information and application procedures.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How do I apply for a replacement matric certificate?
              </AccordionTrigger>
              <AccordionContent>
                You can apply for a replacement matric certificate through the
                Department of Basic Education. Visit their website or a local
                education department office to submit an application along with
                the required documents and fee.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What support is available for learners with special needs?
              </AccordionTrigger>
              <AccordionContent>
                The Department of Education provides various support services
                for learners with special needs, including specialized schools,
                inclusive education programs, and accommodations in mainstream
                schools. Contact your local education department for specific
                support options in your area.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#EDF7FE] py-16">
        <div className="container mx-auto px-4">
          <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h3 className="mb-4 text-xl font-semibold">Get in Touch</h3>
              <p className="mb-4">
                Let us know how we can improve our services. Your feedback is
                important to us.
              </p>
              <p className="mb-2">
                <strong>Office Hours:</strong>
              </p>
              <p className="mb-4">Monday to Friday: 8:00 to 15:30</p>
              <p className="mb-2">
                <strong>Email:</strong> info@health.gov.za
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 45 Commissioner St, Johannesburg, 2000
              </p>
              <p className="mb-4">
                <strong>Phone:</strong> (+27) 0800 012 322
              </p>
              <p>
                Need assistance? Chat with one of our customer service
                representatives.
              </p>
            </div>
            <div>
              <form className="rounded-lg bg-white p-6 shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="mb-1 block text-sm font-medium text-gray-700"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type your message..."
                    className="w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">
                      I agree to the terms and conditions
                    </span>
                  </label>
                </div>
                <Button className="rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div>
              <Image
                src="/assets/images/Download111.jpeg"
                alt="Logo"
                width={64}
                height={45}
                className="mb-4"
              />
              <p className="text-sm text-gray-400">
                Government of South Africa
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Disclaimer
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Primary Healthcare
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Vaccination Programs
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Maternal and Child Health
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    HIV/AIDS and TB Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
              <p className="text-sm text-gray-400">
                45 Commissioner St, Johannesburg, 2000
              </p>
              <p className="text-sm text-gray-400">(+27) 0800 012 322</p>
              <p className="text-sm text-gray-400">info@health.gov.za</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
