import React, { useState, useRef, Suspense } from "react";
import emailjs from "@emailjs/browser";
import { Canvas } from "@react-three/fiber";

import Fox from "../models/Fox";
import Loader from "../components/Loader";

import useAlert from "../hooks/useAlert";
import Alert from "../components/Alert";

import { socialLinks, contactInfo } from "../constants";
import Footer from "../components/Footer";

const Contact = () => {
  const formRef = useRef(null);
  const { alert, showAlert, hideAlert } = useAlert();

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [currentAnimation, setCurrentAnimation] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFocus = () => setCurrentAnimation("walk");
  const handleBlur = () => setCurrentAnimation("idle");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setCurrentAnimation("hit");

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsLoading(false);
        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setCurrentAnimation("idle"), 800);

        showAlert({
          show: true,
          text: "Thank you for your message 😃",
          type: "success",
        });
        setTimeout(hideAlert, 3000);
      })
      .catch((error) => {
        console.error(error);
        setIsLoading(false);
        setCurrentAnimation("idle");

        showAlert({
          show: true,
          text: "I didn't receive your message 😢",
          type: "danger",
        });
        setTimeout(hideAlert, 3000);
      });
  };

  const externalLinks = socialLinks.filter((item) => item.link.startsWith("http"));

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <section className="relative pt-28">
          {alert.show && <Alert {...alert} />}

          <div className="max-container grid lg:grid-cols-2 grid-cols-1 gap-10 items-start">
            {/* FORM */}
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-black mb-12">
                Get In Touch
              </h1>

              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="w-full max-w-xl flex flex-col gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-black">Name</label>
                  <input
                    name="name"
                    className="input"
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-black">Email</label>
                  <input
                    type="email"
                    name="email"
                    className="input"
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-semibold text-black">Message</label>
                  <textarea
                    name="message"
                    rows={4}
                    className="textarea"
                    placeholder="Write your message..."
                    value={form.message}
                    onChange={handleChange}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    required
                  />
                </div>

                <button type="submit" className="btn self-start" disabled={isLoading}>
                  {isLoading ? "Sending..." : "Send Message"}
                </button>
              </form>
            </div>

            {/* FOX + SOCIAL LINKS */}
            <div className="w-full flex flex-col items-center">
              <div className="w-full h-105">
                <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                  <ambientLight intensity={0.6} />
                  <directionalLight position={[2, 2, 2]} intensity={2.5} />

                  <Suspense fallback={<Loader />}>
                    <Fox
                      currentAnimation={currentAnimation}
                      position={[0, -0.6, 0]}
                      rotation={[0, 0.3, 0]}
                      scale={[0.5, 0.5, 0.5]}
                    />
                  </Suspense>
                </Canvas>
              </div>

              <div className="mt-6 w-full max-w-md text-center">
                <h3 className="text-lg font-semibold text-black mb-4">
                  Connect with me
                </h3>

                <div className="flex flex-wrap gap-4 justify-center">
                  {externalLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white shadow-sm hover:shadow-md transition"
                    >
                      <img
                        src={item.iconUrl}
                        alt={item.name}
                        className="w-5 h-5 object-contain"
                      />
                      <span className="font-medium text-slate-800">{item.name}</span>
                    </a>
                  ))}
                </div>

                <p className="mt-4 text-slate-500">
                  Email:&nbsp;
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 font-semibold hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
