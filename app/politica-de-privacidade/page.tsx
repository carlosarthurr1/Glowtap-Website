"use client";

import Link from "next/link";
import Head from "next/head";
import { Button } from "@/components/ui/button";


export default function PoliticaDePrivacidade() {
  return (
    <main className="min-h-screen bg-white">
      <Head>
        <title>Privacy Policy | GlowTap</title>
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

      {/* Privacy Policy Content */}
      <section className="py-16">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold mb-8">Privacy Policy</h1>

            <div className="prose prose-lg">
              <p className="text-gray-600 mb-6">Last updated: January 20, 2025</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">1. Introduction</h2>
              <p>GlowTap ("we", "our" or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose and protect your personal information when you use our website, mobile application and related services.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li><strong>Personal Identification Information:</strong> Name, email address, phone number, and other information you voluntarily provide to us.</li>
                <li><strong>Photo Data:</strong> Photos you upload for processing, generation preferences, style selections, and reference images for photo generation.</li>
                <li><strong>Usage Information:</strong> Information about how you use our app and services, including features accessed, photos generated, and generation history.</li>
                <li><strong>Device Information:</strong> Device type, operating system, browser, IP address, and other technical information.</li>
                <li><strong>Preferences Data:</strong> Information about your photo generation preferences and style choices that you voluntarily share to help us provide personalized photo generation.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Provide, maintain and improve our photo generation services;</li>
                <li>Generate professional photos based on your inputs and preferences;</li>
                <li>Enhance photo quality based on your style and reference preferences;</li>
                <li>Create personalized photo generation recommendations;</li>
                <li>Analyze usage trends to improve our AI models and photo quality;</li>
                <li>Communicate with you about app updates and new features;</li>
                <li>Comply with legal obligations.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">4. AI and Machine Learning</h2>
              <p>GlowTap uses advanced AI technologies and machine learning models to:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Generate professional photos based on your inputs and preferences;</li>
                <li>Create AI selfies, headshots, and aesthetic photos;</li>
                <li>Learn from your style preferences to improve photo quality;</li>
                <li>Improve our service quality and accuracy over time.</li>
              </ul>
              <p>Your photo preferences, generation history, and engagement patterns may be used to train and improve our AI models, but this data is anonymized and aggregated to protect your privacy.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">5. Information Sharing</h2>
              <p>We may share your information in the following circumstances:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li><strong>With Service Providers:</strong> Companies that help us provide and improve our services (cloud storage, analytics, customer support).</li>
                <li><strong>For Legal Purposes:</strong> When we believe in good faith that disclosure is necessary to comply with a legal obligation, protect our rights, your safety or the safety of others.</li>
                <li><strong>With Your Consent:</strong> When you authorize us to share your information with third parties.</li>
                <li><strong>In Case of Business Transfer:</strong> In connection with a merger, acquisition or sale of assets, where your information may be transferred as part of the business assets.</li>
              </ul>

              <h2 className="text-xl font-semibold mt-8 mb-4">6. Data Security</h2>
              <p>We implement technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure or destruction. However, no method of transmission over the Internet or method of electronic storage is 100% secure, and we cannot guarantee absolute security.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">7. Your Rights</h2>
              <p>Depending on your location, you may have the following rights regarding your personal information:</p>
              <ul className="list-disc pl-6 mt-2 mb-4 space-y-2">
                <li>Access, correct or delete your information;</li>
                <li>Restrict or object to the processing of your information;</li>
                <li>Request data portability;</li>
                <li>Withdraw your consent at any time;</li>
                <li>Lodge a complaint with a data protection authority.</li>
              </ul>
              <p>To exercise these rights, please contact us at: privacy@bonsaibuddy.app</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">8. Cookies and Similar Technologies</h2>
              <p>We use cookies and similar technologies to collect information about your activities on our website and app. You can manage your cookie preferences through your browser settings.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">9. Data Retention</h2>
              <p>We retain your personal information for as long as necessary to provide our services and comply with our legal obligations. When we no longer need your information, we will delete or anonymize it. Your plant care history and growth tracking data is retained to provide you with long-term plant care insights.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">10. Children's Privacy</h2>
              <p>Our services are not directed to children under 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe we have collected information from your child, please contact us.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">11. Changes to This Policy</h2>
              <p>We may update this Privacy Policy periodically. The most recent version will always be available on our website and in the app, and we will notify you of significant changes.</p>

              <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact</h2>
              <p>If you have questions or concerns about this Privacy Policy or our data practices, please contact us at: privacy@versoapp.com</p>
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