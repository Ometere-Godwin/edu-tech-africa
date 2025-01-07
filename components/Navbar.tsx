"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";
import { useActivePath } from "@/hooks/useActivePath";
import { cn } from "@/lib/utils";
import { Code2, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const isActive = useActivePath();
  const router = useRouter();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/courses", label: "Courses" },
    { href: "/career-pathways", label: "Career Pathways" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Code2 className="h-8 w-8 text-purple-600" />
              <span className="font-bold text-xl text-purple-600">
                TechEdu Africa
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-gray-700 hover:text-purple-600",
                  isActive(href) && "text-purple-600 font-medium"
                )}
              >
                {label}
              </Link>
            ))}
            <Button
              variant="purple"
              onClick={() => router.push("/get-started")}
            >
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-purple-600"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-16 inset-x-0 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                onClick={() => setIsOpen(false)}
                className={cn(
                  "block px-3 py-2 text-gray-700 hover:text-purple-600",
                  isActive(href) && "text-purple-600 font-medium bg-purple-50"
                )}
              >
                {label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <Button
                variant="purple"
                className="w-full"
                onClick={() => {
                  setIsOpen(false);
                  router.push("/get-started");
                }}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
