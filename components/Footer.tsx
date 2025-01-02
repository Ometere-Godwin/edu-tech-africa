import { Code2, Facebook, Twitter, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-purple-400" />
              <span className="font-bold text-xl">TechEdu Africa</span>
            </div>
            <p className="text-gray-400">
              Empowering Africa's next generation of tech leaders through quality education.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-purple-400">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/courses" className="text-gray-400 hover:text-purple-400">Courses</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-purple-400">About Us</Link></li>
              <li><Link href="/pricing" className="text-gray-400 hover:text-purple-400">Pricing</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-purple-400">Contact</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link href="/blog" className="text-gray-400 hover:text-purple-400">Blog</Link></li>
              <li><Link href="/tutorials" className="text-gray-400 hover:text-purple-400">Tutorials</Link></li>
              <li><Link href="/documentation" className="text-gray-400 hover:text-purple-400">Documentation</Link></li>
              <li><Link href="/community" className="text-gray-400 hover:text-purple-400">Community</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Legal</h3>
            <ul className="space-y-2">
              <li><Link href="/privacy" className="text-gray-400 hover:text-purple-400">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-gray-400 hover:text-purple-400">Terms of Service</Link></li>
              <li><Link href="/cookies" className="text-gray-400 hover:text-purple-400">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <p className="text-center text-gray-400">
            © {new Date().getFullYear()} TechEdu Africa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}