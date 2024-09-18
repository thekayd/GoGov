import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Transport() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/assets/images/logo.png"
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
              {["Home", "My Applications", "Service Directory", "Appointments", "Downloads", "Payments", "Support & Feedback"].map((item) => (
                <li key={item}>
                  <Link href="#" className={`text-sm font-medium ${item === "Home" ? "text-[#008BF9]" : "text-gray-600"}`}>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-800 text-white py-24 relative">
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-semibold mb-4 max-w-2xl">
            Welcome to the Department of Transport
          </h1>
          <p className="text-xl mb-8 max-w-xl">
            Connecting South Africa through safe, reliable, and efficient transportation
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
            About the Department of Transport
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#008BF9]">
                Overview
              </h3>
              <p className="text-gray-600">
                The Department of Transport is responsible for the planning, development, and maintenance of South Africa's transportation infrastructure and systems.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#008BF9]">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide safe, reliable, and efficient transportation systems that support economic growth and social development in South Africa.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="text-xl font-semibold mb-4 text-[#008BF9]">
                Key Services
              </h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Driver's License Applications</li>
                <li>Vehicle Registration</li>
                <li>Public Transport Permits</li>
                <li>Road Safety Programs</li>
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
                name: "Driver's License",
                description: "Apply for or renew your driver's license.",
                image: "/assets/images/drivers-license.png",
              },
              {
                name: "Vehicle Registration",
                description: "Register your vehicle or transfer ownership.",
                image: "/assets/images/vehicle-registration.png",
              },
              {
                name: "Public Transport",
                description: "Information on public transport services and permits.",
                image: "/assets/images/public-transport.png",
              },
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <div className="relative w-full h-40 mb-4">
                  <Image
                    src={service.image}
                    alt={service.name}
                    layout="fill"
                    objectFit="contain"
                    className="rounded-lg"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                {service.name === "Driver's License" ? (
                  <Link href="/drivers-license-application">
                    <Button className="border border-gray-300 hover:bg-gray-100">
                      Apply Now
                    </Button>
                  </Link>
                ) : service.name === "Vehicle Registration" ? (
                  <Link href="/vehicle-registration">
                    <Button className="border border-gray-300 hover:bg-gray-100">
                      Register Now
                    </Button>
                  </Link>
                ) : (
                  <Button className="border border-gray-300 hover:bg-gray-100">
                    Read More
                  </Button>
                )}
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
              Fees apply for various transport services. Please note that prices may change, and additional fees may apply for expedited services.
            </p>
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border p-2 text-left">Services</th>
                  <th className="border p-2 text-left">Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border p-2">Driver's License Application</td><td className="border p-2">R140</td></tr>
                <tr><td className="border p-2">Vehicle Registration</td><td className="border p-2">R400</td></tr>
                <tr><td className="border p-2">Public Transport Permit</td><td className="border p-2">R500</td></tr>
                <tr><td className="border p-2">Learner's License Test</td><td className="border p-2">R75</td></tr>
                <tr><td className="border p-2">License Renewal</td><td className="border p-2">R250</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-semibold text-[#1C2B78] mb-8">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I apply for a driver's license?</AccordionTrigger>
              <AccordionContent>
                To apply for a driver's license, you must first obtain a learner's license, complete a driving course, and pass a driving test. Visit your nearest Driving License Testing Centre (DLTC) with your ID, proof of address, and the required fee to start the process.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>How do I renew my vehicle license?</AccordionTrigger>
              <AccordionContent>
                You can renew your vehicle license at your local licensing department, select post offices, or online through the eNaTIS system. You'll need your ID, proof of residence, and the renewal fee. Remember to renew before it expires to avoid penalties.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What documents do I need to register a vehicle?</AccordionTrigger>
              <AccordionContent>
                To register a vehicle, you'll need your ID, proof of address, the vehicle's certificate of registration (if previously registered), a valid roadworthy certificate, and proof of purchase or ownership. If it's a new vehicle, you'll also need the mass measuring certificate.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>How can I apply for a public transport permit?</AccordionTrigger>
              <AccordionContent>
                To apply for a public transport permit, you need to submit an application to your provincial regulatory entity. You'll need to provide details about your business, the type of transport service you plan to offer, vehicle information, and undergo a background check. The process and requirements may vary by province.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What should I do if I've lost my driver's license?</AccordionTrigger>
              <AccordionContent>
                If you've lost your driver's license, you should apply for a replacement at your nearest DLTC. You'll need to provide identification, proof of residence, and pay a replacement fee. It's advisable to report the loss to the police first and get an affidavit, which you may need to present when applying for the replacement.
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
                We're here to help with any transport-related inquiries. Your feedback is important to us.
              </p>
              <p className="mb-2">
                <strong>Office Hours:</strong>
              </p>
              <p className="mb-4">
                Monday to Friday: 8:00 AM - 4:30 PM
              </p>
              <p className="mb-2">
                <strong>Email:</strong> info@transport.gov.za
              </p>
              <p className="mb-2">
                <strong>Address:</strong> 123 Government Street, Pretoria
              </p>
              <p className="mb-4">
                <strong>Phone:</strong> 0800 123 456
              </p>
              <p>
                Need assistance? Chat with one of our customer service representatives.
              </p>
            </div>
            <div>
              <form className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                  <input id="name" placeholder="Your name" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input id="email" type="email" placeholder="Your email" className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                  <textarea id="message" placeholder="Type your message..." className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                </div>
                <div className="mb-4">
                  <label className="flex items-center">
                    <input type="checkbox" className="form-checkbox" />
                    <span className="ml-2 text-sm text-gray-600">I agree to the terms and conditions</span>
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
                src="/assets/images/logo.png"
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
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Privacy Policy</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Disclaimer</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Terms & Conditions</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Driver's Licenses</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Vehicle Registration</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Public Transport</Link></li>
                <li><Link href="#" className="text-sm text-gray-400 hover:text-white">Road Safety</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p className="text-sm text-gray-400">
                123 Government Street, Pretoria
              </p>
              <p className="text-sm text-gray-400">
                0800 123 456
              </p>
              <p className="text-sm text-gray-400">
                info@transport.gov.za
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}