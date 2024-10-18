import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function InitiativesSection() {
  const initiatives = [
    {
      name: "Student Sponsorship Programme",
      description:
        "SSP develops leaders for South Africa, who are committed to creating the society reflected in the South African Constitution.",
      image: "/assets/images/Min1.png",
    },
    {
      name: "Small Enterprise Finance Agency",
      description:
        "SEFA provides financial products and services to qualifying SMMEs and cooperatives.",
      image: "/assets/images/Image7.png",
    },
    {
      name: "BRICS",
      description:
        "BRICS is an intergovernmental organization comprising Brazil, Russia, India, China, South Africa, etc.",
      image: "/assets/images/Image8.png",
    },
    {
      name: "SADC",
      description:
        "The main objectives of SADC are to achieve economic development, peace and security, and growth, alleviate poverty.",
      image: "/assets/images/Image9.png",
    },
  ]

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          South African Government Initiatives
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((initiative, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-md">
              <div className="relative mb-4 h-40 w-full">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{initiative.name}</h3>
              <p className="mb-4 text-gray-600">{initiative.description}</p>
              <Button>Read More</Button>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link href="/register">
            <Button>Create your go.gov account</Button>
          </Link>
        </div>
      </div>
    </section>
  )
}
