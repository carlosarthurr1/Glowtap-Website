"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DownloadButton from "@/components/download-button";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const glowPulse = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.05, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const floatAnimation = {
  initial: { y: 0 },
  animate: {
    y: [-10, 10, -10],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white overflow-hidden relative">
      {/* Atmospheric Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Main gradient orbs */}
        <motion.div
          className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, rgba(212,175,55,0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
        />
        <motion.div
          className="absolute bottom-[-30%] left-[-20%] w-[900px] h-[900px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(180,130,70,0.12) 0%, rgba(180,130,70,0.04) 40%, transparent 70%)',
            filter: 'blur(80px)',
          }}
          variants={glowPulse}
          initial="initial"
          animate="animate"
        />
        {/* Subtle noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Header/Navigation */}
      <header className="py-6 sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/70 border-b border-white/[0.03]">
        <div className="container mx-auto px-6 flex justify-between items-center max-w-7xl">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <img
                src="/Assets/appicon11.jpg"
                alt="GlowTap"
                className="w-10 h-10 rounded-xl shadow-lg shadow-black/50 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-[#d4af37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <span className="text-xl font-bold tracking-tight bg-gradient-to-r from-white via-white to-white/60 bg-clip-text text-transparent">
              GlowTap
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#d4af37] to-[#b8860b] group-hover:w-full transition-all duration-300" />
            </Link>
            <Link
              href="/contact"
              className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-300 relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-[#d4af37] to-[#b8860b] group-hover:w-full transition-all duration-300" />
            </Link>
          </nav>
          <button className="md:hidden p-2 text-white/60 hover:text-white transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 md:py-32 lg:py-40">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
              {/* Left Content */}
              <motion.div variants={fadeIn} className="space-y-8 text-center lg:text-left">
                {/* Badge */}
                <motion.div
                  variants={fadeIn}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/5 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 rounded-full bg-[#d4af37] animate-pulse" />
                  <span className="text-xs font-medium tracking-wider uppercase text-[#d4af37]">
                    AI-Powered Photo Studio
                  </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1
                  variants={fadeIn}
                  className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight leading-[1.1]"
                >
                  <span className="block text-white">Professional</span>
                  <span className="block bg-gradient-to-r from-[#d4af37] via-[#f0d78c] to-[#b8860b] bg-clip-text text-transparent">
                    Headshots
                  </span>
                  <span className="block text-white/90">in Seconds</span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                  variants={fadeIn}
                  className="text-lg md:text-xl text-white/50 max-w-md mx-auto lg:mx-0 leading-relaxed"
                >
                  Transform any selfie into studio-quality portraits.
                  No photographers, no waiting—just instant perfection.
                </motion.p>

                {/* Feature Pills */}
                <motion.div
                  variants={fadeIn}
                  className="flex flex-wrap gap-3 justify-center lg:justify-start"
                >
                  {[
                    "AI Headshots",
                    "Dating Photos",
                    "Social Media",
                    "LinkedIn Ready"
                  ].map((feature, i) => (
                    <span
                      key={feature}
                      className="px-4 py-2 text-sm font-medium text-white/70 bg-white/[0.03] border border-white/[0.08] rounded-full backdrop-blur-sm hover:bg-white/[0.06] hover:border-white/[0.12] transition-all duration-300"
                    >
                      {feature}
                    </span>
                  ))}
                </motion.div>

                {/* CTA Section */}
                <motion.div variants={fadeIn} className="pt-4 space-y-4">
                  <p className="text-sm font-medium text-white/40 uppercase tracking-widest">
                    Download Free on iOS
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start">
                    <div className="relative group">
                      <div className="absolute -inset-1 bg-gradient-to-r from-[#d4af37]/40 to-[#b8860b]/40 rounded-xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <DownloadButton className="h-14 relative" />
                    </div>
                  </div>
                  <p className="text-xs text-white/30 flex items-center gap-2 justify-center lg:justify-start">
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Trusted by 10,000+ users worldwide
                  </p>
                </motion.div>
              </motion.div>

              {/* Right - Phone Mockup */}
              <motion.div
                variants={fadeIn}
                className="relative flex items-center justify-center"
              >
                {/* Glow behind phone */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-[400px] h-[400px] rounded-full"
                    style={{
                      background: 'radial-gradient(circle, rgba(212,175,55,0.2) 0%, rgba(212,175,55,0.05) 50%, transparent 70%)',
                      filter: 'blur(40px)',
                    }}
                  />
                </div>

                {/* Phone Image */}
                <motion.div
                  className="relative z-10"
                  variants={floatAnimation}
                  initial="initial"
                  animate="animate"
                >
                  <div className="relative">
                    {/* Phone glow ring */}
                    <div className="absolute -inset-4 rounded-[3rem] bg-gradient-to-b from-[#d4af37]/20 via-transparent to-[#b8860b]/10 blur-xl opacity-60" />
                    <img
                      src="/Assets/glowtap.png"
                      alt="GlowTap App"
                      className="w-auto h-[500px] md:h-[550px] lg:h-[600px] object-contain relative z-10 drop-shadow-2xl"
                      style={{
                        filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.5)) drop-shadow(0 0 100px rgba(212,175,55,0.1))'
                      }}
                    />
                  </div>
                </motion.div>

                {/* Floating accent elements */}
                <motion.div
                  className="absolute top-20 -left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-[#d4af37]/20 to-transparent border border-[#d4af37]/10 backdrop-blur-sm"
                  animate={{
                    y: [0, -15, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                />
                <motion.div
                  className="absolute bottom-32 -right-8 w-16 h-16 rounded-full bg-gradient-to-br from-[#f0d78c]/20 to-transparent border border-[#f0d78c]/10 backdrop-blur-sm"
                  animate={{
                    y: [0, 20, 0],
                    rotate: [0, -10, 0]
                  }}
                  transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="text-white">Create </span>
              <span className="bg-gradient-to-r from-[#d4af37] to-[#f0d78c] bg-clip-text text-transparent">Any Look</span>
            </h2>
            <p className="text-white/40 text-lg max-w-2xl mx-auto">
              Upload a selfie, choose a style, and watch AI transform your photo into professional quality
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Professional Headshots",
                description: "LinkedIn-ready portraits that command respect and open doors",
                icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              },
              {
                title: "Dating Profile Photos",
                description: "Authentic, attractive photos that show your best self",
                icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              },
              {
                title: "Social Media Content",
                description: "Scroll-stopping photos for Instagram, TikTok & more",
                icon: "M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"
              },
              {
                title: "Aesthetic Transformations",
                description: "Turn casual selfies into editorial-quality art",
                icon: "M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
              },
              {
                title: "Reference Matching",
                description: "Upload any reference photo and recreate the look",
                icon: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              },
              {
                title: "Infinite AI Selfies",
                description: "Generate unlimited variations of your perfect look",
                icon: "M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              }
            ].map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative p-8 rounded-2xl bg-white/[0.02] border border-white/[0.05] hover:bg-white/[0.04] hover:border-[#d4af37]/20 transition-all duration-500"
              >
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                  <div className="w-12 h-12 mb-6 rounded-xl bg-gradient-to-br from-[#d4af37]/20 to-[#b8860b]/10 flex items-center justify-center border border-[#d4af37]/20">
                    <svg className="w-6 h-6 text-[#d4af37]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={feature.icon} />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[#f0d78c] transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-white/40 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-6 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative text-center p-12 md:p-16 rounded-3xl overflow-hidden"
          >
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-[#1a1a1a] to-[#b8860b]/10 border border-[#d4af37]/20 rounded-3xl" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
                <span className="text-white">Ready to </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f0d78c] bg-clip-text text-transparent">Glow Up?</span>
              </h2>
              <p className="text-white/50 text-lg mb-8 max-w-xl mx-auto">
                Join thousands who&apos;ve transformed their photos with GlowTap.
                Download free and create your first headshot in under a minute.
              </p>
              <div className="flex justify-center">
                <div className="relative group">
                  <div className="absolute -inset-2 bg-gradient-to-r from-[#d4af37]/50 to-[#b8860b]/50 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
                  <DownloadButton className="h-14 relative" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/[0.05]">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="flex items-center gap-3 inline-flex mb-6">
                <img src="/Assets/appicon11.jpg" alt="GlowTap" className="w-12 h-12 rounded-xl" />
                <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                  GlowTap
                </span>
              </Link>
              <p className="text-white/40 mb-6 max-w-md leading-relaxed">
                Transform your photos into professional portraits with AI-powered photo generation.
                Your personal photo studio, always in your pocket.
              </p>
              <DownloadButton className="h-12" />
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/" className="text-white/40 hover:text-[#d4af37] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-white/40 hover:text-[#d4af37] transition-colors duration-300">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link href="/termos-de-uso" className="text-white/40 hover:text-[#d4af37] transition-colors duration-300">
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link href="/politica-de-privacidade" className="text-white/40 hover:text-[#d4af37] transition-colors duration-300">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/[0.05] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/30 text-sm">
              © 2025 GlowTap. All rights reserved.
            </p>
            <p className="text-white/20 text-sm flex items-center gap-2">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#d4af37]" />
              Crafted to help you glow
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
