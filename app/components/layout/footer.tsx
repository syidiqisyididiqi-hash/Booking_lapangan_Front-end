import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 md:flex-row">
        
        <div className="text-sm text-gray-600">
          © 2026 MyApp. All rights reserved.
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            Instagram
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            GitHub
          </a>

          <a
            href="#"
            className="text-sm text-gray-600 transition hover:text-blue-600"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}