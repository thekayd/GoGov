import Image from "next/image"

import Typography from "@/components/ui/typography"

export function TourismSection() {
  const destinations = [
    { name: "Table Mountain", image: "/assets/images/tablemountain.jpg" },
    { name: "Johannesburg", image: "/assets/images/Image15.png" },
    { name: "Cape Town", image: "/assets/images/Image16.png" },
    {
      name: "Kruger National Park",
      image: "/assets/images/Krugernationalpark.jpg",
    },
  ]

  return (
    <section className="w-full bg-blue-800 py-10 text-white">
      <div className="container mx-auto max-w-6xl space-y-10 px-4 md:px-10">
        <Typography variant={"h2"} className="text-center">
          South African Tourism
        </Typography>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <div key={index} className="flex w-full flex-col items-center">
              <div className="relative mb-4 h-64 w-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <Typography variant={"h3"}>{destination.name}</Typography>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
