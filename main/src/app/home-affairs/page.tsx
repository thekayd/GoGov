import Image from "next/image"
import Link from "next/link"

import { siteMapData } from "@/config/site"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button, buttonVariants } from "@/components/ui/button"
import { HeroSection } from "@/app/(components)/HeroSection"

export default function HomeAffairs() {
  return (
    <main className="flex w-full flex-col items-center justify-center">
      <HeroSection
        imageUrl="/home-affairs-bg.jpg"
        title="Department of Home Affairs"
        subheading={"Ensuring Secure Identities and Efficient Services"}
      />
      <div className="flex w-full flex-col items-center justify-center gap-16 py-10 ">
        {/* About Section */}
        <section className="mx-auto w-full max-w-6xl px-4 md:px-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
              About Home Affairs
            </h2>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                  Overview
                </h3>
                <p className="text-gray-600">
                  The Department of Home Affairs is responsible for the civic
                  services and immigration matters of South Africa. We manage
                  identity documents, passports, and citizenship.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To efficiently manage identity and migration while
                  contributing to public safety and national security.
                </p>
              </div>
              <div className="rounded-lg bg-white p-6 shadow">
                <h3 className="mb-4 text-xl font-semibold text-[#008BF9]">
                  Key Services
                </h3>
                <ul className="list-inside list-disc text-gray-600">
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
        <section className="mx-auto w-full max-w-6xl px-4 md:px-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
              Our Services
            </h2>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
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
                <div key={index} className="rounded-lg bg-white p-6 shadow-md">
                  <div className="relative mb-4 h-40 w-full">
                    <Image
                      src={service.image}
                      alt={service.name}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">{service.name}</h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <Link
                    href={siteMapData.Dashboard.path}
                    className={buttonVariants({
                      className: "border border-gray-300 hover:bg-gray-100",
                    })}
                  >
                    Get started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Payment Information */}
        <section className="mx-auto w-full max-w-6xl px-4 md:px-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
              Payment Information
            </h2>
            <div className="rounded-lg bg-white p-6 shadow-md">
              <p className="mb-4 text-gray-600">
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
        <section className="mx-auto w-full max-w-6xl px-4 md:px-10">
          <div className="container mx-auto px-4">
            <h2 className="mb-8 text-3xl font-semibold text-[#1C2B78]">
              Frequently Asked Questions
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>
                  How do I apply for a South African ID?
                </AccordionTrigger>
                <AccordionContent>
                  To apply for a South African ID, visit your nearest Home
                  Affairs office with your birth certificate, two recent
                  passport-sized photos, and proof of address. You can also
                  apply online through the eHomeAffairs portal.
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
                  Yes, you can check the status of your application online
                  through the eHomeAffairs portal or by using the SMS service.
                  You'll need your application reference number.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-5">
                <AccordionTrigger>
                  What is the cost of an unabridged birth certificate?
                </AccordionTrigger>
                <AccordionContent>
                  The cost of an unabridged birth certificate is R 75. This fee
                  is subject to change, so it's best to check the current fee on
                  the official Home Affairs website or at your local office.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mx-auto w-full max-w-6xl px-4 md:px-10">
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
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
