import Image from "next/image";

export function TourismSection() {
  const destinations = [
    { name: "Table Mountain", image: "/assets/images/tablemountain.jpg" },
    { name: "Johannesburg", image: "/assets/images/Image15.png" },
    { name: "Cape Town", image: "/assets/images/Image16.png" },
    {
      name: "Kruger National Park",
      image: "/assets/images/Krugernationalpark.jpg",
    },
  ];

  return (
    <section className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">
          South African Tourism
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {destinations.map((destination, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-64 h-64 mb-4">
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
  );
}
