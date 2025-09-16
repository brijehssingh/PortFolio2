import { useState } from "react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState("");
  const [toast, setToast] = useState(null);

  const showToast = (type, text) => {
    setToast({ type, text });
    setTimeout(() => setToast(null), 3000);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      showToast("error", "Please enter a valid email.");
      return;
    }
    if (!msg.trim()) {
      showToast("error", "Message cannot be empty.");
      return;
    }

    const to = "brijeshkumar4705r@gmail.com";
    const subject = encodeURIComponent(`Portfolio contact from ${email}`);
    const body = encodeURIComponent(`${msg}\n\n---\nReply to: ${email}`);
    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;

    showToast("success", "Opening your email app...");
    setEmail("");
    setMsg("");
  };

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText("brijeshkumar4705r@gmail.com");
      showToast("info", "Email copied to clipboard.");
    } catch {
      showToast("error", "Couldn’t copy. Long-press to copy manually.");
    }
  };

  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8">
        <span className="inline-block rounded-xl bg-base-200 px-5 py-2">
          Contact <span className="text-primary">Me</span>
        </span>
      </h2>

      <div className="rounded-3xl bg-base-100/70 backdrop-blur border border-base-200 shadow-lg p-6 md:p-8">
        <form onSubmit={onSubmit} className="space-y-6">
          {/* Quick actions */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:brijeshkumar4705r@gmail.com"
              className="btn btn-sm btn-outline"
            >
              Email me
            </a>
            <button type="button" onClick={copyEmail} className="btn btn-sm">
              Copy address
            </button>
            <span className="opacity-70 text-sm">
              brijeshkumar4705r@gmail.com
            </span>
          </div>

          {/* Email input */}
          <label className="form-control w-full">
            <div className="label mb-1">
              <span className="label-text">Your Email</span>
            </div>
            <input
              type="email"
              placeholder="you@example.com"
              className="input input-bordered w-full focus:input-primary"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          {/* Message box */}
          <label className="form-control w-full">
            <div className="label mb-1">
              <span className="label-text p-4">Message</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-36 focus:textarea-primary m-6"
              placeholder="Hey! I'd like to collaborate on..."
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
            />
          </label>

          {/* Submit button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="btn btn-primary shadow-md hover:shadow-primary/30 hover:-translate-y-0.5 transition"
            >
              Send
            </button>
          </div>
        </form>
      </div>

      {/* Toasts */}
      {toast && (
        <div className="toast toast-end z-50">
          <div
            className={
              toast.type === "success"
                ? "alert alert-success"
                : toast.type === "error"
                ? "alert alert-error"
                : "alert alert-info"
            }
          >
            <span>{toast.text}</span>
          </div>
        </div>
      )}
    </section>
  );
}
