import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-blue-900 py-12 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="mb-4 text-lg font-semibold">
              Government of South Africa
            </h3>
            <p>Serving the nation with dedication and transparency.</p>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/privacy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/terms">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="/contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-4 text-lg font-semibold">Connect With Us</h3>
            {/* Add social media icons here */}
          </div>
        </div>
      </div>
      <div className="mt-8 bg-blue-800 py-4">
        <div className="container mx-auto px-4">
          <p className="text-sm text-blue-200">
            Content Owned, Maintained and Updated by Government of South Africa.
            For any query, please contact concerned departments. (Technical
            Support By NIC)
          </p>
        </div>
      </div>
    </footer>
  )
}

export function DetailedFooter() {
  return (
    <footer className="mt-16 w-full bg-blue-800 py-8 text-white">
      <div className="container mx-auto grid grid-cols-4 gap-8">
        <div>
          <img src="/logo.png" alt="Logo" className="mb-4 h-12 w-12" />
          <p className="text-sm">Government of South Africa</p>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Quick Links</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Disclaimer
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Help
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Accessibility Statement
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Government</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Apex Bodies
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Government Orders
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Gazettes
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Downloads
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="mb-2 font-semibold">Services</h3>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Driver's License Application
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Vehicle Registration
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Public Transport Permits
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Road Safety Programs
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Traffic Fines
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto mt-8 border-t border-blue-700 pt-4 text-sm">
        <p>
          Content Owned, Maintained and Updated by Government of South Africa.
          For any query, please contact concerned departments. (Technical
          Support By NIC)
        </p>
      </div>
    </footer>
  )
}
