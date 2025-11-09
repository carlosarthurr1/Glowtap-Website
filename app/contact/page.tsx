"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ApplicationForm from "@/components/application-form";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="py-6 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2">
            <img src="/Assets/appicon11.jpg" alt="GlowTap" className="w-8 h-8 rounded-lg" />
            <span className="text-2xl font-bold tracking-tight">GlowTap</span>
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Contact Form Section */}
      <section className="py-24">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="text-center mb-16">
              <motion.span variants={fadeIn} className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium mb-2">
                Contact Us
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
                Have questions about GlowTap? Want to learn more? Contact us below!
              </motion.p>
            </div>

            <motion.div
              variants={fadeIn}
              className="max-w-2xl mx-auto bg-white p-8 md:p-10 rounded-2xl border border-black/5 shadow-sm"
            >
              <ApplicationForm />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-black/5">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-1 md:col-span-2">
                <Link href="/" className="flex items-center gap-2 inline-flex mb-4">
                  <img src="/Assets/appicon11.jpg" alt="GlowTap" className="w-10 h-10 rounded-lg" />
                  <span className="text-2xl font-bold tracking-tight">GlowTap</span>
                </Link>
                <p className="text-gray-600 mb-6 max-w-md">
                  Transform your photos into professional portraits. Glow Up with AI-powered photo generation.
                </p>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="text-gray-600 hover:text-black transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="text-gray-600 hover:text-black transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Legal</h3>
                <ul className="space-y-2">
                  <li>
                    <Link href="/termos-de-uso" className="text-gray-600 hover:text-black transition-colors">
                      Terms of Use
                    </Link>
                  </li>
                  <li>
                    <Link href="/politica-de-privacidade" className="text-gray-600 hover:text-black transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="pt-8 border-t border-black/5 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-600 text-sm mb-4 md:mb-0">
                © 2025 GlowTap. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Made with ✨ to help you Glow Up
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
