"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import DownloadButton from "@/components/download-button";
import { SEOPage } from "@/lib/seo-data";

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

interface SEOPageClientProps {
  page: SEOPage;
}

export default function SEOPageClient({ page }: SEOPageClientProps) {
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

      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-8">
              <motion.div variants={fadeIn} className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
                  {page.headline}
                </h1>
                <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                  {page.subheadline}
                </p>
              </motion.div>

              <motion.div variants={fadeIn} className="bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
                <p className="text-lg text-gray-800 font-semibold mb-4">
                  {page.mainBenefit}
                </p>
                <ul className="space-y-3">
                  {page.keyFeatures.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-blue-600 font-bold mt-1">✓</span>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* CTA Section */}
              <motion.div variants={fadeIn} className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-2xl p-8 md:p-12 text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Ready to Create Professional Photos?
                </h2>
                <p className="text-lg text-blue-100 mb-8">
                  Join thousands of users who are creating stunning photos with GlowTap. Download free today and start creating.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <DownloadButton className="h-14" />
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose GlowTap Section */}
      <section className="py-20 md:py-28 bg-gray-50">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Why Choose GlowTap?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: "⚡",
                  title: "Lightning Fast",
                  description: "Generate professional photos in seconds, not hours or days"
                },
                {
                  icon: "🎨",
                  title: "Endless Possibilities",
                  description: "Create unlimited variations and styles to find the perfect shot"
                },
                {
                  icon: "💰",
                  title: "Affordable",
                  description: "No expensive photographers or equipment needed"
                },
                {
                  icon: "📱",
                  title: "Mobile Friendly",
                  description: "Create professional photos directly from your smartphone"
                },
                {
                  icon: "🤖",
                  title: "Advanced AI",
                  description: "Powered by cutting-edge artificial intelligence technology"
                },
                {
                  icon: "🔒",
                  title: "Privacy First",
                  description: "Your photos and data are always secure and private"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white rounded-xl p-6 text-center shadow-sm"
                >
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </motion.h2>

            <div className="space-y-6">
              {[
                {
                  question: "Is GlowTap really free?",
                  answer: "Yes! GlowTap is completely free to download and use. Create as many photos as you want without any hidden fees or subscriptions required."
                },
                {
                  question: "How fast can I create photos?",
                  answer: "Most photos are generated in seconds! Depending on your device and complexity, you can have professional-looking photos ready in less than a minute."
                },
                {
                  question: "What quality are the generated photos?",
                  answer: "Our AI generates high-resolution, professional-quality photos suitable for LinkedIn, portfolios, social media, and dating apps."
                },
                {
                  question: "Can I edit the generated photos?",
                  answer: "Absolutely! Once generated, you can further customize and edit your photos using our built-in editing tools before downloading."
                },
                {
                  question: "Are my photos private?",
                  answer: "Your privacy is our priority. All photos are encrypted and stored securely. You have complete control over your data."
                },
                {
                  question: "What devices does GlowTap work on?",
                  answer: "GlowTap is available on iOS devices. Simply download from the App Store and start creating immediately."
                }
              ].map((faq, index) => (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
                >
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="container">
          <motion.div
            className="max-w-2xl mx-auto text-center text-white"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-6">
              Start Creating Professional Photos Today
            </motion.h2>
            <motion.p variants={fadeIn} className="text-lg text-blue-100 mb-8">
              Join thousands of creators, professionals, and social media influencers using GlowTap.
            </motion.p>
            <motion.div variants={fadeIn}>
              <DownloadButton className="h-14 inline-block" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-black/5 bg-white">
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
