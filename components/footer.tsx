import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
  return (
    <div className="flex justify-center mx-auto border-t border-white/10">
      <footer className="bg-black  py-12">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="space-y-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-blue-500">
                  INGENIUM
                </span>
              </Link>
              <p className="text-gray-400 text-sm">
                The ultimate celebration of technology, innovation, and
                creativity.
              </p>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Facebook className="h-5 w-5" />
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link
                  href="https://www.instagram.com/ingenium.ecs/"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                  <span className="sr-only">Instagram</span>
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#about"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    href="#events"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Events
                  </Link>
                </li>
                <li>
                  <Link
                    href="#register"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link
                    href="#faq"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400 text-sm">
                  157/F, Nilgunj Rd,
                  <br />
                  Sahid Colony, Panihati, Khardaha,
                  <br />
                  West Bengal 700114
                </li>
                {/* <li className="text-gray-400 text-sm pt-2">
                  <Link
                    href="mailto:info@ingenium.tech"
                    className="hover:text-white transition-colors"
                  >
                    info@ingenium.tech
                  </Link>
                </li> */}
                <li className="text-gray-400 text-sm">+919830938357</li>
                <li className="text-gray-400 text-sm">+918617265402</li>
                <li className="text-gray-400 text-sm">+919123367191</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-center items-center">
            <p className="text-gray-400 text-sm">
              &copy; INGENIUM {new Date().getFullYear()}. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
