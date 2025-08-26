import Link from "next/link";

export default function Sent() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-2xl font-semibold">Thanks — got it.</h1>
      <p className="mt-2 text-gray-600">I&apos;ll get back to you within one business day.</p>
      <Link href="/" className="inline-block mt-6 underline">Back to home</Link>
    </main>
  );
}
