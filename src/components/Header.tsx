import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <header className="bg-white shadow">
      <div className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center">
          <Image src="/assets/images/Download111.jpeg" alt="Logo" width={64} height={45} className="mr-4" />
          <span className="text-lg font-medium text-blue-900">Government of South Africa</span>
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><Link href="/" className="text-blue-500">Home</Link></li>
            <li><Link href="/applications" className="text-gray-600">My applications</Link></li>
            <li><Link href="/services" className="text-gray-600">Service Directory</Link></li>
            <li><Link href="/appointments" className="text-gray-600">Appointments</Link></li>
            <li><Link href="/downloads" className="text-gray-600">Downloads</Link></li>
            <li><Link href="/payments" className="text-gray-600">Payments</Link></li>
            <li><Link href="/support" className="text-gray-600">Support & Feedback</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}