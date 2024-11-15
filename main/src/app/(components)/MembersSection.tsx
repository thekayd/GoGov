import Image from "next/image"

import Typography from "@/components/ui/typography"

export function MembersSection() {
  const members = [
    {
      name: "Cyril Ramaphosa",
      title: "President",
      image: "/assets/images/Image3.png",
    },
    {
      name: "Paul Mashatile",
      title: "Deputy President",
      image: "/assets/images/paulman.jpg",
    },
    {
      name: "Dr Leon Amos Schreiber",
      title: "Minister of Home Affairs",
      image: "/assets/images/Image4.png",
    },
    {
      name: "Ms Barbara Dallas Creecy",
      title: "Minister of Transport",
      image: "/assets/images/Image5.png",
    },
  ]

  return (
    <section className="w-full pt-10 ">
      <div className="m mx-auto max-w-6xl space-y-10 px-4">
        <Typography variant={"h2"} className="text-center">
          Members of Parliament
        </Typography>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative mb-4 h-32 w-32">
                <Image
                  src={member.image}
                  alt={member.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-full"
                />
              </div>
              <div className=" text-center">
                <Typography variant={"h3"}>{member.name}</Typography>
                <Typography
                  affects={"removePMargin"}
                  variant={"p"}
                  className="text-gray-600"
                >
                  {member.title}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
