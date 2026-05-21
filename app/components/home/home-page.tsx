export default function HomePageContent() {
  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-24 text-center">
        <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
          Modern Next.js Website
        </span>

        <h1 className="mt-6 max-w-4xl text-5xl font-extrabold leading-tight text-gray-900">
          Build Modern and Professional Web Applications
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Create scalable, fast, and responsive applications using
          Next.js, Tailwind CSS, and modern frontend architecture.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white transition hover:scale-105 hover:bg-blue-700">
            Get Started
          </button>

          <button className="rounded-xl border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-700 transition hover:bg-gray-100">
            Learn More
          </button>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-8 px-6 pb-24 md:grid-cols-3">
        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-4 text-4xl">⚡</div>

          <h2 className="text-xl font-bold text-gray-800">
            Fast Performance
          </h2>

          <p className="mt-3 text-gray-600">
            Optimized application performance with modern rendering
            and efficient architecture.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-4 text-4xl">🎨</div>

          <h2 className="text-xl font-bold text-gray-800">
            Clean UI Design
          </h2>

          <p className="mt-3 text-gray-600">
            Elegant and responsive user interface designed for
            modern web experiences.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
          <div className="mb-4 text-4xl">🚀</div>

          <h2 className="text-xl font-bold text-gray-800">
            Scalable Structure
          </h2>

          <p className="mt-3 text-gray-600">
            Professional folder architecture for scalable and
            maintainable projects.
          </p>
        </div>
      </section>
    </main>
  );
}