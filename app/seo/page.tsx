"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { seoPages } from "@/lib/seo-data";

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

export default function SEOIndexPage() {
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

      {/* Content */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold text-center mb-6">
              Photo Generation Features
            </motion.h1>
            <motion.p variants={fadeIn} className="text-xl text-gray-600 text-center mb-12">
              Explore different ways to use GlowTap to create stunning professional photos
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {seoPages.map((page, index) => (
                <motion.div key={page.id} variants={fadeIn}>
                  <Link
                    href={`/seo/${page.slug}`}
                    className="block p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl hover:shadow-lg transition-shadow border border-blue-200 hover:border-blue-400"
                  >
                    <h2 className="text-xl font-bold text-gray-900 mb-2 hover:text-blue-600 transition-colors">
                      {page.headline}
                    </h2>
                    <p className="text-gray-600 mb-4 text-sm">
                      {page.description}
                    </p>
                    <div className="flex items-center text-blue-600 font-semibold text-sm">
                      Learn more →
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
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
