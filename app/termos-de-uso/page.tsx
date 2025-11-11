"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function TermosDeUso() {
  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Terms of Use | GlowTap</title>
        <link rel="icon" href="/Assets/appicon11.jpg" />
        <link rel="apple-touch-icon" href="/Assets/appicon11.jpg" />
        <link rel="shortcut icon" href="/Assets/appicon11.jpg" />
      </Head>
      {/* Header/Navigation */}
      <header className="py-6 sticky top-0 bg-white/95 backdrop-blur-sm z-50">
        <div className="container flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold tracking-tight">
            GlowTap
          </Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
              Home
            </Link>
            <Link
              href="#"
              className="text-sm font-medium text-gray-600 hover:text-black transition-colors"
            >
              GlowTap App
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

      {/* Terms Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Use</h1>

            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">Last updated: November 11, 2025</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
              <p>By accessing and using the services offered by GlowTap, you agree to these Terms of Use. If you do not agree with any part of these terms, please do not use our services.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Service Description</h2>
              <p>GlowTap is an AI-powered photo generation mobile application that helps users create professional-quality photos in seconds. Our services include AI selfie generation, professional headshot creation, aesthetic photo generation, dating profile photos, social media content creation, and reference-based photo copying.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. Eligibility</h2>
              <p>To use our services, you must be at least 13 years old. If you are between 13 and 18 years old, you must obtain consent from a parent or legal guardian before using our services.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. User Accounts</h2>
              <p>When creating an account on our platform, you are responsible for maintaining the confidentiality of your login credentials and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. User Content</h2>
              <p>By submitting content to our platform (including photos, preferences, and generation settings), you grant GlowTap a worldwide, non-exclusive, transferable, sublicensable, royalty-free license to use, reproduce, modify, adapt, publish, translate, create derivative works from, distribute, and display such content in any media.</p>
              <p>You are solely responsible for the content you submit and warrant that you have all necessary rights to grant the license above. You also agree that your content will not violate third-party rights or contain illegal or offensive material.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. AI and Data Usage</h2>
              <p>GlowTap uses advanced AI technologies to generate professional photos based on your inputs. By using our services, you acknowledge that:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>AI-generated photos are created for personal and commercial use</li>
                <li>We collect and process your photos and preferences to provide better photo generation results</li>
                <li>Your feedback and engagement data may be used to improve our AI models and photo quality</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Fair Use Policy for "Infinite Credits"</h2>
              <p>
                Our yearly subscription may be advertised as providing "infinite credits" for ease of marketing, but legally it is governed by this Fair Use Policy. Each paid yearly subscription includes an allowance of up to 500 credits (or photo generations) per
                subscription year and per account. Attempting to generate more than 500 credits in the same subscription year without GlowTap&apos;s prior written approval constitutes misuse of the plan and may result in temporary throttling, additional charges, or
                cancellation.
              </p>
              <p>
                Staying within the 500-credit annual allowance keeps you in compliance with this policy and ensures that the "infinite credits" claim reflects reasonable, good-faith usage. If your professional or enterprise needs require a higher cap, contact support@glowtap.com so we can
                evaluate an extended-use agreement in writing before you exceed the allowance.
              </p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Intellectual Property</h2>
              <p>All content made available on our platform, including but not limited to text, graphics, logos, icons, images, audio clips, digital downloads, scripture references, and data compilations, is the property of GlowTap or its content suppliers and is protected by copyright laws.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
              <p>GlowTap shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, use, goodwill, or other intangible losses, resulting from the use or inability to use our services. Users are responsible for ensuring that AI-generated photos comply with all applicable laws and regulations in their jurisdiction.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Modifications to Terms</h2>
              <p>We reserve the right to modify these Terms of Use at any time. Modifications will take effect immediately upon publication of the updated terms. Your continued use of our services after the publication of any modifications constitutes acceptance of such modifications.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">11. Governing Law</h2>
              <p>These Terms of Use shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact</h2>
              <p>If you have any questions about these Terms of Use, please contact us at: support@glowtap.com</p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <Link href="/" className="text-black hover:underline flex items-center">
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to homepage
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-black/[0.02]">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div className="md:col-span-1">
                <h3 className="font-semibold mb-4">About GlowTap</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Daily devotional and Bible game app helping users deepen their faith with personalized spiritual guidance.
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
                      GlowTap App
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
