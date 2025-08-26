import Offers from "./components/Offers";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      {/* Header */}
      <header className="mb-10 flex items-center justify-between">
        <h1 className="text-2xl font-semibold">rbunch.dev</h1>
        <nav className="text-sm">
          <a href="/contact" className="underline">
            Contact
          </a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-bold">
          I fix small business websites so they get more calls.
        </h2>
        <p className="mt-3 text-gray-600">
          Three simple offers. Clear timelines. No fluff.
        </p>
      </section>

      {/* Offers */}
      <Offers />

      {/* Footer */}
      <footer className="mt-16 text-sm text-gray-500">
        © {new Date().getFullYear()} rbunch.dev
      </footer>
    </main>
  );
}
