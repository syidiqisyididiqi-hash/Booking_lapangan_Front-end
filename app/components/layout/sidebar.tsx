import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="h-screen w-64 border-r bg-white">
      <div className="border-b p-6">
        <h1 className="text-2xl font-bold text-gray-800">
          MyApp
        </h1>
      </div>

      <nav className="flex flex-col gap-2 p-4">
        <Link
          href="/dashboard"
          className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          Dashboard
        </Link>

        <Link
          href="/users"
          className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          Users
        </Link>

        <Link
          href="/booking"
          className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          Booking
        </Link>

        <Link
          href="/transactions"
          className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          Transactions
        </Link>

        <Link
          href="/settings"
          className="rounded-lg px-4 py-3 text-gray-700 transition hover:bg-blue-100 hover:text-blue-600"
        >
          Settings
        </Link>
      </nav>
    </aside>
  );
}