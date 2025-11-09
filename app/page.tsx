"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ApplicationForm from "@/components/application-form";
import DownloadButton from "@/components/download-button";

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

export default function Home() {
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
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <motion.div variants={fadeIn} className="space-y-6">
                <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                  Instant Professional Photos in Seconds Not Days
                </motion.h1>
                <motion.div variants={fadeIn} className="text-lg text-gray-600 space-y-2">
                  <div>• Create Infinite AI Selfies</div>
                  <div>• Create Professional Headshots</div>
                  <div>• Create Aesthetic Photos</div>
                  <div>• Create Dating Photos</div>
                  <div>• Create Social Media Photos</div>
                  <div>• Add a Photo and Copy any Reference</div>
                </motion.div>
                <motion.div variants={fadeIn} className="pt-4">
                  <p className="text-xl font-semibold mb-3">Download Free!</p>
                  <div className="flex flex-col gap-4">
                    <DownloadButton className="h-14" />
                  </div>
                </motion.div>
              </motion.div>
              <motion.div variants={fadeIn} className="relative flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/Assets/glowtap.png"
                    alt="GlowTap App"
                    className="w-auto h-[500px] md:h-[600px] object-contain drop-shadow-2xl"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
              </motion.div>
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
