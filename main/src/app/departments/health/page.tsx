import Image from "next/image"
import Link from "next/link"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function Health() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center">
            <Image
              src="/assets/images/Download111.jpeg"
              alt="Logo"
              width={64}
              height={45}
              className="mr-4"
            />
            <span className="text-sm font-medium text-[#1C2B78]">
              Government of South Africa
            </span>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className="text-sm font-medium text-[#008BF9]">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-600">
                  My applications
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-600">
                  Service Directory
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-600">
                  Appointments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-600">
                  Downloads
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-600">
                  Payments
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm font-medium text-gray-600">
                  Support & Feedback
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[#3868A9] py-24 text-white">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container relative z-10 mx-auto px-4">
          <h1 className="mb-4 max-w-2xl text-4xl font-semibold md:text-5xl">
            Welcome to the Department of Health
          </h1>
          <p className="mb-8 max-w-xl text-xl">
            Promoting Health, Preventing Disease, Ensuring Quality Care for All
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
            About the Department of Health
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                Overview
              </h3>
              <p className="text-gray-600">
                The Department of Health is responsible for healthcare policies,
                public health initiatives, and ensuring access to quality
                healthcare services for all South Africans.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To improve the health status of all South Africans through
                prevention of illnesses, promotion of healthy lifestyles, and
                consistent improvement of the healthcare delivery system.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                Key Services
              </h3>
              <ul className="list-inside list-disc text-gray-600">
                <li>Primary Healthcare</li>
                <li>Vaccination Programs</li>
                <li>Maternal and Child Health</li>
                <li>HIV/AIDS and TB Services</li>
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
                name: "Vaccinations",
                description: "Apply for vaccinations for you and your family.",
                image: "/assets/images/Image121.png",
              },
              {
                name: "Maternal Programs",
                description: "Apply for maternal and child health programs.",
                image: "/assets/images/Image121.png",
              },
              {
                name: "Chronic Illness Management",
                description: "Apply for chronic illness management programs.",
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
              Most services are provided free of charge. Fees may apply for
              certain specialized services or for patients not covered under
              public healthcare. Please inquire for specific details.
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
                  <td className="border p-2">Primary Healthcare</td>
                  <td className="border p-2">Free</td>
                </tr>
                <tr>
                  <td className="border p-2">Hospital Services</td>
                  <td className="border p-2">Sliding scale based on income</td>
                </tr>
                <tr>
                  <td className="border p-2">Vaccination Programs</td>
                  <td className="border p-2">
                    Free for children and at-risk groups
                  </td>
                </tr>
                <tr>
                  <td className="border p-2">Maternal and Child Health</td>
                  <td className="border p-2">Free</td>
                </tr>
                <tr>
                  <td className="border p-2">HIV/AIDS and TB Services</td>
                  <td className="border p-2">Free</td>
                </tr>
                <tr>
                  <td className="border p-2">Mental Health Services</td>
                  <td className="border p-2">Free at primary care level</td>
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
                How do I register for healthcare services?
              </AccordionTrigger>
              <AccordionContent>
                You can register for healthcare services at your nearest public
                health facility. Bring your South African ID or passport, and
                proof of residence. Registration is free for South African
                citizens and permanent residents.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How do I get a referral to a specialist?
              </AccordionTrigger>
              <AccordionContent>
                Start by visiting your local clinic or general practitioner.
                They will assess your condition and provide a referral letter if
                specialist care is needed. This referral is necessary to access
                specialist services in public hospitals.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                What should I bring for a hospital admission?
              </AccordionTrigger>
              <AccordionContent>
                Bring your ID, medical aid details (if applicable), referral
                letter, any current medications, and personal essentials. It's
                also helpful to bring your medical history and any recent test
                results.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Where can I get my flu shot?</AccordionTrigger>
              <AccordionContent>
                Flu shots are available at public health clinics, community
                health centers, and some pharmacies. They are usually free for
                high-risk groups such as the elderly, pregnant women, and those
                with chronic conditions.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                Are there any costs associated with vaccinations?
              </AccordionTrigger>
              <AccordionContent>
                Vaccinations included in the national immunization schedule are
                provided free of charge at public health facilities. Some
                specialized or travel vaccines may have associated costs.
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
