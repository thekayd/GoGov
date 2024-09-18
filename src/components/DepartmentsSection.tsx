import Image from 'next/image';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import Link from 'next/link';

export function DepartmentsSection() {
  const departments = [
    { name: 'HOME AFFAIRS', image: '/assets/images/Image7.png', services: ['ID APPLICATIONS', 'PASSPORTS', 'BIRTH CERTIFICATES'], link: '/home-affairs' },
    { name: 'TRANSPORTATION', image: '/assets/images/Rectangle22.png', services: ["DRIVER'S LICENSES", 'VEHICLE REGISTRATIONS', 'ROADWORTHINESS CERTIFICATES'], link: '/transport'},
    { name: 'HEALTH', image: '/assets/images/Rectangle222.jpeg', services: ['Medical Aid Applications', 'Vacation Records', 'Health Grants'], link: '/health' },
    { name: 'EDUCATION', image: '/assets/images/Rectangle221.png', services: ['Scheduling Grants', 'Adult Education Programs', 'Certification Requests'], link: '/education' },
  ];

  return (
    <section className="bg-blue-800 py-16 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">South African Departments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {departments.map((dept, index) => (
            <Card key={index} className="bg-white">
              <CardHeader>
                <div className="relative w-full h-48">
                  <Image src={dept.image} alt={dept.name} fill className="rounded-t-lg object-cover" />
                </div>
                <CardTitle className="text-black font-bold">{dept.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside mb-4 text-sm">
                  {dept.services.map((service, i) => (
                    <li key={i} className="text-gray-600">{service}</li>
                  ))}
                </ul>
                {dept.link ? (
                  <Link href={dept.link}>
                    <Button className="w-full">Read More</Button>
                  </Link>
                ) : (
                  <Button className="w-full">Read More</Button>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}