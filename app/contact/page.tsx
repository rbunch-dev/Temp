export default function ContactPage() {
  return (
    <main className="mx-auto max-w-xl px-6 py-12">
      <h1 className="text-3xl font-bold">Let&apos;s talk</h1>
      <p className="mt-2 text-gray-600">Simple POST form, zero JS.</p>

      <form
        action="https://formspree.io/f/xblajlqq"
        method="POST"
        className="mt-6 space-y-4 border rounded p-4"
      >
        <div>
          <label className="block text-sm font-medium mb-1">Name</label>
          <input name="name" className="w-full border p-3" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input type="email" name="email" className="w-full border p-3" required />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Message</label>
          <textarea name="message" rows={5} className="w-full border p-3" required />
        </div>

        <button className="rounded bg-black text-white px-4 py-2">Send</button>
      </form>
    </main>
  );
}
