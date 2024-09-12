import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";

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
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          South African Government Initiatives
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="relative w-full h-40 mb-4">
                <Image
                  src={initiative.image}
                  alt={initiative.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{initiative.name}</h3>
              <p className="text-gray-600 mb-4">{initiative.description}</p>
              <Button>Read More</Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/register">
            <Button>Create your go.gov account</Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
