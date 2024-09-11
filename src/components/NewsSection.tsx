import Image from 'next/image';
import { Button } from './ui/button';

export function NewsSection() {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-8">News and Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Announcements</h3>
            <Image src="/assets/images/Image1.png" alt="Announcements" width={400} height={200} className="rounded-lg mb-4" />
            <p className="text-gray-600 mb-4">Explore South Africa's commitment to excellence in public services! Get a comprehensive range of services across transport, healthcare, education, and home affairs. Efficient public transportation networks and advanced healthcare facilities to quality education systems and streamlined home affairs processes, South Africa is dedicated to enhancing the quality of life for all its citizens.</p>
            <Button variant="link">View More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Spotlight</h3>
            <Image src="/assets/images/Image19.png" alt="Spotlight" width={400} height={200} className="rounded-lg mb-4" />
            <p className="text-gray-600 mb-4">Modern Infrastructure: Enjoy smooth travel with South Africa's extensive road networks, rail systems, and public transit options. Quality Care: Access top-tier healthcare services through a network of state-of-the-art hospitals and clinics. Support for Students: Access various support services, including scholarships, mentorships, and extracurricular activities.</p>
            <Button variant="link">View More</Button>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-4">Stay Connected</h3>
            <Image src="/assets/images/Image12.png" alt="Stay Connected" width={400} height={200} className="rounded-lg mb-4" />
            <ul className="text-gray-600 list-disc list-inside mb-4">
              <li>Subscribe to our newsletter</li>
              <li>Download the SA Government app</li>
              <li>Participate in surveys</li>
              <li>Report concerns</li>
            </ul>
            <Button variant="link">Learn More</Button>
          </div>
        </div>
      </div>
    </section>
  );
}