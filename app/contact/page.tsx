"use client"; // App Router only. For Pages Router, this file is client by default.

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle"|"sending"|"sent"|"error">("idle");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    const res = await fetch("https://formspree.io/f/xblajlqq", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (res.ok) {
      setStatus("sent");
      form.reset();
    } else {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={onSubmit} className="space-y-4">
      {/* fields */}
      <button disabled={status==="sending"} className="rounded bg-black text-white px-4 py-2">
        {status==="sending" ? "Sending..." : "Send"}
      </button>
      {status==="sent" && <p className="text-green-600">Thanks — got it.</p>}
      {status==="error" && <p className="text-red-600">Something broke. Try again.</p>}
    </form>
  );
}
