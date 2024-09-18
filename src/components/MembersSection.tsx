import Image from 'next/image';

export function MembersSection() {
  const members = [
    { name: 'Cyril Ramaphosa', title: 'President', image: '/assets/images/Image3.png' },
    { name: 'Paul Mashatile', title: 'Deputy President', image: '/assets/images/paulman.jpg' },
    { name: 'Dr Leon Amos Schreiber', title: 'Minister of Home Affairs', image: '/assets/images/Image4.png' },
    { name: 'Ms Barbara Dallas Creecy', title: 'Minister of Transport', image: '/assets/images/Image5.png' },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">Members of Parliament</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="relative w-64 h-64 mb-4">
                <Image src={member.image} alt={member.name} layout="fill" objectFit="cover" className="rounded-full" />
              </div>
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}