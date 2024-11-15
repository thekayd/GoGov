import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import Typography from "@/components/ui/typography"

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
    <section className="">
      <div className="container mx-auto max-w-6xl space-y-5 px-4 md:px-10">
        <Typography variant={"h2"} affects={"removePMargin"} className="">
          Initiatives
        </Typography>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-3 lg:grid-cols-4">
          {initiatives.map((initiative, index) => (
            <div
              key={index}
              className="space-y-3 rounded-lg bg-white p-2 shadow-md"
            >
              <div className="relative mb-4 h-40 w-full">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <div className="flex flex-col gap-3">
                <Typography
                  variant={"h3"}
                  affects={"removePMargin"}
                  className=""
                >
                  {initiative.name}
                </Typography>
                <Typography
                  variant={"p"}
                  affects={"removePMargin"}
                  className=""
                >
                  {initiative.description}
                </Typography>
              </div>
              <Button className="w-full">Read More</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
