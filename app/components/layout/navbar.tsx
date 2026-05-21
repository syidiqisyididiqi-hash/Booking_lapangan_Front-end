import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        
        <div className="text-xl font-bold text-gray-800">
          MyApp
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            About
          </Link>

          <Link
            href="/services"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Services
          </Link>

          <Link
            href="/contact"
            className="text-sm font-medium text-gray-700 transition hover:text-blue-600"
          >
            Contact
          </Link>
        </div>

        <div>
          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
}