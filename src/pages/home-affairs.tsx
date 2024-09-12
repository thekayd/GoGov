import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function HomeAffairs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
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
      <section className="bg-[#3868A9] text-white py-24 relative">
        <div className="absolute inset-0 bg-black bg-opacity-35"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 max-w-2xl">
            Welcome to the Department of Home Affairs
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Ensuring Secure Identities and Efficient Services
          </p>
          <Link href="/register">
            <Button className="bg-[#008BF9] hover:bg-[#0070CC] text-lg py-2 px-4">
              CREATE YOUR GO.GOV ACCOUNT
            </Button>
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-[#EDF7FE] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1C2B78] mb-8">
            About Home Affairs
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#008BF9]">
                Overview
              </h3>
              <p className="text-gray-600">
                The Department of Home Affairs is responsible for the civic
                services and immigration matters of South Africa. We manage
                identity documents, passports, and citizenship.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#008BF9]">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To efficiently manage identity and migration while contributing
                to public safety and national security.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#008BF9]">
                Key Services
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Identity Documents</li>
                <li>Passports</li>
                <li>Birth, Marriage, and Death Certificates</li>
                <li>Immigration Services</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1C2B78] mb-8">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "South African ID Card",
                description:
                  "Apply for South African ID cards for you and your children.",
                image: "/assets/images/Image7.png",
              },
              {
                name: "Birth Certificates",
                description:
                  "Apply for birth certificates for you and your children.",
                image: "/assets/images/Image7.png",
              },
              {
                name: "Passports",
                description: "Apply for passports for you and your children.",
                image: "/assets/images/Image7.png",
              },
              {
                name: "Marriage Registrations",
                description: "Register for marriage certificates.",
                image: "/assets/images/Image7.png",
              },
              {
                name: "Death Certificates",
                description: "Apply for death certificates.",
                image: "/assets/images/Image7.png",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
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
          <h2 className="text-3xl font-semibold text-[#1C2B78] mb-8">
            Payment Information
          </h2>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <p className="text-gray-600 mb-4">
              Fees may apply for certain specialized services or for patients
              not covered under public healthcare. Please inquire for specific
              details.
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
                  <td className="border p-2">Birth Certificate</td>
                  <td className="border p-2">R 75</td>
                </tr>
                <tr>
                  <td className="border p-2">ID Document</td>
                  <td className="border p-2">R 140</td>
                </tr>
                <tr>
                  <td className="border p-2">Passport</td>
                  <td className="border p-2">R 400</td>
                </tr>
                <tr>
                  <td className="border p-2">Citizenship Application</td>
                  <td className="border p-2">R 3,000</td>
                </tr>
                <tr>
                  <td className="border p-2">Marriage Certificate</td>
                  <td className="border p-2">R 100</td>
                </tr>
                <tr>
                  <td className="border p-2">Death Certificate</td>
                  <td className="border p-2">R 50</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section*/}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1C2B78] mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How do I apply for a South African ID?
              </AccordionTrigger>
              <AccordionContent>
                To apply for a South African ID, visit your nearest Home Affairs
                office with your birth certificate, two recent passport-sized
                photos, and proof of address. You can also apply online through
                the eHomeAffairs portal.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                What documents are required to replace a lost or stolen South
                African ID?
              </AccordionTrigger>
              <AccordionContent>
                You'll need to provide a sworn affidavit stating the loss or
                theft, a copy of the police report (if stolen), and two recent
                passport-sized photos. Additional documents may be required
                depending on your situation.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                How do I register a marriage in South Africa?
              </AccordionTrigger>
              <AccordionContent>
                Both partners must appear in person at a Home Affairs office
                with their IDs, birth certificates, and two witnesses. If
                previously married, provide proof of divorce or death
                certificate of the former spouse.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                Can I check the status of my application online?
              </AccordionTrigger>
              <AccordionContent>
                Yes, you can check the status of your application online through
                the eHomeAffairs portal or by using the SMS service. You'll need
                your application reference number.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>
                What is the cost of an unabridged birth certificate?
              </AccordionTrigger>
              <AccordionContent>
                The cost of an unabridged birth certificate is R 75. This fee is
                subject to change, so it's best to check the current fee on the
                official Home Affairs website or at your local office.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-[#EDF7FE] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1C2B78] mb-8">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="mb-4">
                Let us know how we can improve our services. Your feedback is
                important to us.
              </p>
              <p className="mb-2">
                <strong>Office Hours:</strong>
              </p>
              <p className="mb-4">
                Monday to Friday: 8:00 to 15:30
                <br />
                Every last Wednesday of the month: 9:00 to 15:30
              </p>
              <p className="mb-2">
                <strong>Email:</strong> hacc@dha.gov.za
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 230 Johannes Ramokhoase St, Pretoria
                Central, Pretoria, 0001
              </p>
              <p className="mb-4">
                <strong>Phone:</strong> (+27) 0800 60 11 90
              </p>
              <p>
                Need assistance? Chat with one of our customer service
                representatives.
              </p>
            </div>
            <div>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Your email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    placeholder="Type your message..."
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
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
                <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                  Submit
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
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
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
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
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Accessibility Statement
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    ID Applications
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Passport Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Birth Certificates
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm text-gray-400 hover:text-white"
                  >
                    Marriage Registration
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <p className="text-sm text-gray-400 mb-2">
                Email: hacc@dha.gov.za
              </p>
              <p className="text-sm text-gray-400 mb-2">
                Phone: (+27) 0800 60 11 90
              </p>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-sm text-gray-400">
              © 2024 Department of Home Affairs, Government of South Africa. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
