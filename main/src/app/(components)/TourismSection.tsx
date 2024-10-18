import Image from "next/image"

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
    <section className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-semibold">
          South African Tourism
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {destinations.map((destination, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4 h-64 w-64">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold">{destination.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
