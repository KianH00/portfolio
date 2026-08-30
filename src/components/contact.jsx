import { useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6zow38v",
        "template_dz03syf",
        form.current,
        "GYxYUfK3u_EdkqrdY"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message.");
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="max-w-xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Contact Me</h2>

      <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          className="border p-2 rounded"
          required
        />

        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          className="border p-2 rounded"
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          className="border p-2 rounded h-32"
          required
        />

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:opacity-90 transition"
        >
          Send Message
        </button>
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
    </section>
  );
}