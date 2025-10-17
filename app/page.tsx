"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
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

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="py-6 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            Verso
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              Verso App
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
                  Your Daily Devotional & Bible Game
                </motion.h1>
                <motion.div variants={fadeIn} className="text-lg text-gray-600 space-y-2">
                  <div>• Collect devotional cards and get closer to God</div>
                  <div>• Learn about the Bible through engaging games</div>
                  <div>• Create custom devotionals based on your problems or blessings</div>
                  <div>• Track and improve your mood with the Bible</div>
                  <div>• Scripture-based reflections tailored to your needs</div>
                  <div>• Build a habit of daily spiritual growth</div>
                  <div>• Share devotionals and connect with your faith community</div>
                </motion.div>
                <motion.div variants={fadeIn} className="pt-4 flex items-center gap-6">
                  <img
                    src="/Assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                    alt="Download on the App Store"
                    className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
                  />
                </motion.div>
              </motion.div>
              <motion.div variants={fadeIn} className="relative flex items-center justify-center">
                <div className="relative">
                  <img
                    src="/Assets/flat-iphone.png"
                    alt="Verso App"
                    className="w-auto h-[500px] md:h-[600px] object-contain drop-shadow-2xl"
                    style={{ maxWidth: '100%' }}
                  />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Application Form Section */}
      <section id="signup" className="py-24">
        <div className="container">
          <motion.div
            className="max-w-5xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="text-center mb-16">
              <motion.span variants={fadeIn} className="inline-block px-3 py-1 bg-black/5 rounded-full text-sm font-medium mb-2">
                Contact Us
              </motion.span>
              <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-4">
                Get in Touch
              </motion.h2>
              <motion.p variants={fadeIn} className="text-gray-600 max-w-2xl mx-auto">
                Have questions about Verso? Want to learn more? Contact us below!
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
                <Link href="/" className="text-2xl font-bold tracking-tight inline-block mb-4">
                  Verso
                </Link>
                <p className="text-gray-600 mb-6 max-w-md">
                  Your daily devotional companion for spiritual growth, Bible learning, and mood improvement through faith.
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
                    <Link href="#" className="text-gray-600 hover:text-black transition-colors">
                      Verso App
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
                © 2025 Verso. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <Link href="#" className="text-gray-600 hover:text-black transition-colors text-sm">
                  Made with 🙏 for your spiritual journey
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
