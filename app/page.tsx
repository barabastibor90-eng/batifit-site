"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

export default function BaTiFitPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showHint, setShowHint] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShowHint(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const waLink = "https://wa.me/32472211507?text=Hi%20Tibor%2C%20I%E2%80%99m%20interested%20in%20BaTiFit%20coaching.";

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex flex-col leading-none">
            <div className="text-2xl font-extrabold tracking-wider">
              <span className="text-white">Ba</span>
              <span className="text-red-500">Ti</span>
              <span className="text-white">Fit</span>
            </div>
            <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Fitness With Passion</span>
          </div>

          <nav className="hidden md:flex gap-8 text-sm uppercase tracking-wider">
            <a href="#story" className="hover:text-red-500 transition">Story</a>
            <a href="#programs" className="hover:text-red-500 transition">Programs</a>
                        <a href="#booking" className="hover:text-red-500 transition">Book</a>
            <a href="#contact" className="hover:text-red-500 transition">Contact</a>
          </nav>

          <div className="flex items-center gap-4">
            
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg border border-gray-700 text-white"
            >
              ☰
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-lg border-t border-gray-800 px-6 py-6">
            <nav className="flex flex-col gap-6 text-lg uppercase tracking-wider">
              <a onClick={() => setMobileOpen(false)} href="#story">Story</a>
              <a onClick={() => setMobileOpen(false)} href="#programs">Programs</a>
                            <a onClick={() => setMobileOpen(false)} href="#booking">Book</a>
              <a onClick={() => setMobileOpen(false)} href="#contact">Contact</a>
              
            </nav>
          </div>
        )}
      </header>

      <div className="h-24" />

      {/* Hero */}
      <section className="min-h-[calc(100vh-6rem)] flex flex-col justify-center items-center text-center p-8">
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="mb-4">
          <div className="text-6xl md:text-7xl font-extrabold tracking-wider">
            <span className="text-white">Ba</span>
            <span className="text-red-500">Ti</span>
            <span className="text-white">Fit</span>
          </div>
          <div className="text-sm uppercase tracking-[0.4em] text-gray-400 mt-2">Fitness With Passion</div>
        </motion.div>

        <motion.h1 initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }} className="text-5xl md:text-6xl font-extrabold mb-4">
          Transform Your Body & Mind
        </motion.h1>
        <p className="text-xl md:text-2xl mb-6 max-w-2xl text-gray-300">
          Coaching that builds discipline, confidence, and real results.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href={waLink} target="_blank" className="rounded-2xl px-8 py-4 text-lg bg-white text-black font-semibold hover:opacity-90">
            Start on WhatsApp
          </a>
          <a href="#booking" className="rounded-2xl px-8 py-4 text-lg border border-white hover:bg-white hover:text-black transition">
            Book a Session
          </a>
        </div>
      </section>

      {/* Sections unchanged below */}

      <section id="story" className="py-28 px-6 bg-gradient-to-b from-black to-gray-900">
        <h2 className="text-4xl font-bold text-center mb-10">Founder Story</h2>
        <div className="max-w-4xl mx-auto text-center text-gray-300 text-lg">
          <p className="mb-6">For most of my young adulthood, I was overweight, unhealthy, and disconnected from myself.</p>
          <p className="mb-6">At 28, one picture changed everything. I chose not to enter my 30s with that body or mindset.</p>
          <p className="mb-6">I rebuilt my habits, trained consistently, and turned discipline into identity.</p>
          <p className="mb-6">Then I studied and became a Fitness Instructor, Personal Trainer, and Les Mills instructor.</p>
          <p className="font-semibold text-white">Now I help others do the same.</p>
        </div>
      </section>

      <section className="py-20 px-6 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Our Philosophy</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {["Passion", "Discipline", "Consistency"].map((v) => (
            <div key={v} className="rounded-2xl shadow-xl bg-gray-900 border border-gray-800 p-8 text-center">
              <h3 className="text-2xl font-semibold mb-3">{v}</h3>
              <p className="text-gray-400">Real change is built through daily action.</p>
            </div>
          ))}
        </div>
      </section>

      <section id="programs" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <h2 className="text-4xl font-bold text-center mb-12">Training Programs</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {["Personal Transformation", "Group Training", "Online Coaching"].map((p) => (
            <div key={p} className="rounded-2xl shadow-xl bg-black border border-gray-800 p-8 text-center">
              <h3 className="text-xl font-semibold mb-3">{p}</h3>
              <p className="text-gray-400">Built for real results.</p>
            </div>
          ))}
        </div>
      </section>

      
      <section id="booking" className="py-24 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-sm uppercase tracking-[0.35em] text-red-400 mb-3">Private Coaching</p>
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Book Your Transformation Session</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Choose a time that suits you and take the first step toward a stronger, more confident version of yourself. Every session is tailored, focused, and results-driven.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_1.4fr] gap-8 items-start">
            <div className="rounded-3xl border border-gray-800 bg-black/60 p-8 shadow-2xl">
              <h3 className="text-2xl font-bold mb-4">What to expect</h3>
              <div className="space-y-4 text-gray-300">
                <p>• Personalised coaching focused on your goals</p>
                <p>• Clear structure, guidance, and accountability</p>
                <p>• Real results — physically and mentally</p>
              </div>

              

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-white px-6 py-4 text-center font-semibold text-white hover:bg-white hover:text-black transition">
                  Ask on WhatsApp
                </a>
              </div>
            </div>

            <div className="rounded-3xl border border-gray-800 bg-white p-3 shadow-2xl overflow-hidden">
              <div className="bg-gray-100 rounded-2xl p-3">
                <iframe
                  src="https://calendly.com/barabastibor90/personal-training-consultation?hide_gdpr_banner=1"
                  width="100%"
                  height="760"
                  frameBorder="0"
                  title="Book a BaTiFit session"
                  className="rounded-xl bg-white"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 bg-black border-t border-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-red-400 mb-3">Contact</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Let’s Start Your Transformation</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mb-10">
            Ready to take the first step? Reach out directly and I’ll help you choose the best option for your goals.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            <a href="mailto:barabastibor90@gmail.com?subject=Coaching%20Inquiry&body=Hi%20Tibor,%0A%0AI%E2%80%99m%20interested%20in%20BaTiFit%20coaching.%20My%20goal%20is:%20%0A%0AMy%20experience%20level:%20%0A%0AWhen%20I%E2%80%99d%20like%20to%20start:%20%0A%0AThanks!" className="rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-red-500 transition">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Email</p>
              <p className="text-white font-semibold break-all">barabastibor90@gmail.com</p>
            </a>

            <a href="https://instagram.com/fitbati" target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-red-500 transition">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">Instagram</p>
              <p className="text-white font-semibold">@fitbati</p>
            </a>

            <a href={waLink} target="_blank" rel="noopener noreferrer" className="rounded-2xl border border-gray-800 bg-gray-900 p-6 hover:border-red-500 transition">
              <p className="text-sm uppercase tracking-[0.25em] text-gray-400 mb-2">WhatsApp</p>
              <p className="text-white font-semibold">+32 472 21 15 07</p>
            </a>
          </div>
        </div>
      </section>

      <section className="py-28 bg-gradient-to-r from-red-600 to-orange-500 text-white text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Ready to start?</h2>
        <p className="text-lg md:text-xl mb-6">Book your slot online or message me directly if you want help choosing the right option.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#booking" className="mt-4 inline-block px-10 py-4 rounded-2xl bg-black hover:opacity-90 transition">
            Book Online
          </a>
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block px-10 py-4 rounded-2xl border border-white hover:bg-white hover:text-black transition">
            Chat on WhatsApp
          </a>
        </div>
      </section>

      {/* WhatsApp Button + conversion hint */}
      <div className="fixed bottom-6 right-6 z-50">
        {showHint && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="mb-3 bg-white text-black px-4 py-2 rounded-xl shadow-lg text-sm">
            Need help? Message me 👇
          </motion.div>
        )}
        <a href={waLink} target="_blank" className="group">
          <div className="absolute inset-0 rounded-full bg-green-500/30 blur-xl animate-pulse" />
          <div className="relative flex items-center gap-3 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-5 py-3 rounded-full shadow-2xl transition group-hover:scale-105">
            <span className="w-5 h-5">💬</span>
            <span className="hidden sm:inline">WhatsApp</span>
          </div>
        </a>
      </div>
    </div>
  );
}
