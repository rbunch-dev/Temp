export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-semibold mb-6">Contact</h1>
      <p className="text-gray-600 mb-6">Tell me what’s broken. I reply within one business day.</p>

      <form
        action="https://formspree.io/f/xblajlqq"  // your real endpoint
        method="POST"
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" required className="w-full rounded border p-3" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" required className="w-full rounded border p-3" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" rows={5} required className="w-full rounded border p-3" />
        </div>

        {/* Optional spam honeypot + redirect */}
        <input type="text" name="_gotcha" className="hidden" />
        <input type="hidden" name="_next" value="/contact/sent" />

        <button className="rounded bg-black text-white px-4 py-2">Send</button>
      </form>
    </main>
  );
}
