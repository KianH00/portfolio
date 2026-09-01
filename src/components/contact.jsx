import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs
      .sendForm(
        "service_6zow38v",
        "template_dz03syf",
        form.current,
        "GYxYUfK3u_EdkqrdY"
      )
      .then(
        () => {
          setStatus("sent");
          form.current.reset();
        },
        (error) => {
          setStatus("error");
          console.log(error.text);
        }
      );
  };

  return (
    <section
      id="contact"
      className="relative bg-slate-900 py-20 overflow-hidden"
    >
      {/* background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[36rem] h-[36rem] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-8 text-white text-center">
          Contact Me
        </h2>

        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            className="bg-slate-800 border border-slate-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-indigo-400 transition"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            className="bg-slate-800 border border-slate-700 text-white placeholder-gray-500 p-3 rounded-lg focus:outline-none focus:border-indigo-400 transition"
            required
          />

          <textarea
            name="message"
            placeholder="Your Message"
            className="bg-slate-800 border border-slate-700 text-white placeholder-gray-500 p-3 rounded-lg h-32 resize-none focus:outline-none focus:border-indigo-400 transition"
            required
          />

          <button
            type="submit"
            disabled={status === "sending"}
            className="bg-indigo-600 text-white p-3 rounded-lg font-medium hover:bg-indigo-500 disabled:opacity-60 disabled:cursor-not-allowed transition"
          >
            {status === "sending" ? "Sending..." : "Send Message"}
          </button>

          {status === "sent" && (
            <p className="text-sm text-green-400 text-center">
              Message sent successfully!
            </p>
          )}
          {status === "error" && (
            <p className="text-sm text-red-400 text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>

        {/* RESUME BUTTON */}
        <div className="mt-6 flex justify-center">
          <a
            href="/KHellie-Tech.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 border border-slate-600 rounded-xl hover:bg-slate-700 transition text-center text-white"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
}