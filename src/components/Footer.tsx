import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Government of South Africa</h3>
            <p>Serving the nation with dedication and transparency.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy">Privacy Policy</Link></li>
              <li><Link href="/terms">Terms & Conditions</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="bg-blue-800 mt-8 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-blue-200">
            Content Owned, Maintained and Updated by Government of South Africa. For any query, please contact concerned departments. (Technical Support By NIC)
          </p>
        </div>
      </div>
    </footer>
  );
}