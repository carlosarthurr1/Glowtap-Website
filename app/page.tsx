"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import ApplicationForm from "@/components/application-form";
import { useState } from "react";

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
  const [userCause, setUserCause] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccessAlert, setShowSuccessAlert] = useState(false);
  const [showErrorAlert, setShowErrorAlert] = useState(false);

  const submitCause = async () => {
    if (!userCause.trim()) return;

    setIsSubmitting(true);

    try {
      const webhookURL = "https://discord.com/api/webhooks/1428858959237742592/DpnXNVSsPtmA81iWbjem9QO0ZwUTCIaWvgU5zLT5iFgpT3NGckFvNN6tuamToEc4K73K";

      const payload = {
        content: `**New Charity Cause Submission**\n\n${userCause}`
      };

      const response = await fetch(webhookURL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error('Failed to submit');
      }

      setUserCause("");
      setShowSuccessAlert(true);
    } catch (error) {
      console.error("Failed to submit cause:", error);
      setShowErrorAlert(true);
    } finally {
      setIsSubmitting(false);
    }
  };

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
                  Deepen Your Faith, Build a Daily Bible Reading Habit
                </motion.h1>
                <motion.div variants={fadeIn} className="text-lg text-gray-600 space-y-2">
                  <div>• Daily Bible Verses & Devotionals</div>
                  <div>• Text & Audio Bible</div>
                  <div>• Build a Daily Bible Reading Habit</div>
                  <div>• Devotionals Based on How You Feel</div>
                  <div>• Prayers based on what you're going through</div>
                  <div>• Mood & Faith Journal</div>
                </motion.div>
                <motion.div variants={fadeIn} className="pt-4">
                  <p className="text-xl font-semibold mb-3">Download Free!</p>
                  <div className="flex flex-col gap-4">
                    <a
                      href="https://apps.apple.com/pt/app/verso-daily-devotional/id6753986891"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="/Assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                        alt="Download on the App Store"
                        className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
                      />
                    </a>
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => {
                        document.getElementById('charity-section')?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="text-base font-semibold"
                    >
                      The Charity...
                    </Button>
                  </div>
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

      {/* Charity Section */}
      <section id="charity-section" className="py-24 bg-gray-50">
        <div className="container">
          <motion.div
            className="max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={fadeIn} className="text-4xl md:text-5xl font-black text-center mb-12">
              Your Faith, Their Future
            </motion.h2>

            <div className="space-y-6 text-lg text-gray-800">
              {/* Introduction */}
              <p>Here&apos;s the truth most devotional apps won&apos;t tell you:</p>
              <p className="font-bold">Reading Scripture should change more than just you.</p>
              <p>You&apos;re here because you want to grow closer to God. You want that daily anchor, that voice cutting through the chaos, reminding you whose you are.</p>
              <p>And we built Verso to give you that.</p>
              <p>But if we&apos;re honest, and we&apos;re going to be, there&apos;s something that&apos;s been on our hearts since day one. Something we need your help with.</p>

              {/* Core message */}
              <p className="font-bold">James 2:17 says faith without works is dead.</p>
              <p>
                <span>So here&apos;s what we&apos;re doing: </span>
                <span className="font-bold">10% of every dollar from Verso Premium goes directly to children who are one meal away from starvation, one clean water source away from survival, one year of school away from breaking generational poverty.</span>
              </p>
              <p>
                <span>Not someday. Not &quot;when we&apos;re bigger.&quot; </span>
                <span className="font-bold">Right now.</span>
              </p>
              <p>We partner with SOS Children&apos;s Villages, World Vision, and Save the Children, organizations that are already there, in displacement camps, conflict zones, and forgotten villages, keeping kids alive.</p>

              {/* What Premium does */}
              <p>Here&apos;s what your Premium subscription actually does:</p>
              <p className="font-bold">With less than what you spend on coffee per day?</p>
              <ul className="list-none space-y-2 pl-6">
                <li>That&apos;s the therapeutic peanut paste that pulls a malnourished child back from the edge.</li>
                <li>That&apos;s the teacher&apos;s salary in a refugee camp where kids haven&apos;t seen a classroom in years.</li>
                <li>That&apos;s the clean water pump that means a 7-year-old girl doesn&apos;t have to walk 6 miles for dirty water.</li>
              </ul>
              <p className="font-bold">Your daily devotional becomes someone else&apos;s daily bread.</p>
              <p>This is what happens when your spiritual discipline becomes someone else&apos;s physical survival.</p>

              {/* You get / They get */}
              <p>You get:</p>
              <ul className="list-none space-y-2 pl-6">
                <li>Custom devotionals that meet you where you are</li>
                <li>Audio versions for your commute</li>
                <li>Mood tracking to see God&apos;s faithfulness over time</li>
                <li>Fun collection tracking and wallpapers</li>
              </ul>
              <p className="font-bold">They get:</p>
              <ul className="list-none space-y-2 pl-6 font-bold">
                <li>Food</li>
                <li>Water</li>
                <li>Education</li>
                <li>A fighting chance</li>
              </ul>

              {/* Why we're doing this */}
              <p className="font-bold">Why we&apos;re doing this:</p>
              <p>I grew up in a third-world country (Angola). I&apos;ve seen what $5 does there versus here.</p>
              <p>The coffee you didn&apos;t think twice about buying yesterday? That&apos;s a week of meals for a family. The streaming service you forgot you&apos;re paying for? That&apos;s a month of school supplies.</p>
              <p className="font-bold">We&apos;re made in God&apos;s image to do what He does: give, serve, and lift up those the world overlooks.</p>
              <p>Americans spend $4.99 on things that don&apos;t matter every single day.</p>
              <p>What if yours mattered?</p>
              <p>What if your daily practice of seeking God didn&apos;t just transform YOUR heart - but fed a child&apos;s body? Educated a child&apos;s mind? Gave them a childhood instead of a survival story?</p>
              <p>That&apos;s power. That&apos;s your faith with hands and feet.</p>

              {/* Bigger than us */}
              <p className="font-bold">This is bigger than us.</p>
              <p>We&apos;re not asking you to save the world. We&apos;re asking you to let your devotional habit be part of how God saves one child at a time.</p>
              <p className="font-bold">Every devotional you read. Every prayer you speak into your phone. Every moment of peace you find in Verso, it ripples out.</p>
              <p>Because the same subscription that&apos;s feeding your soul is literally feeding a child.</p>
              <p>
                <span>This isn&apos;t a feature. This is what </span>
                <span className="font-bold">Verso IS.</span>
              </p>
              <p>
                <span>We don&apos;t want to just help you grow spiritually. We want to prove that </span>
                <span className="font-bold">people of faith, when we move together, change everything.</span>
              </p>

              {/* User cause submission */}
              <div className="mt-12 space-y-4">
                <p>Have a cause that&apos;s written on your heart?</p>
                <p>Maybe there&apos;s a mission you support. A church doing work overseas. An organization that&apos;s part of your story.</p>
                <p>Tell us about it here →</p>

                <div className="space-y-4">
                  <textarea
                    value={userCause}
                    onChange={(e) => setUserCause(e.target.value)}
                    placeholder="Share the cause on your heart..."
                    rows={5}
                    className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-black/20 resize-none"
                  />
                  <Button
                    onClick={submitCause}
                    disabled={!userCause.trim() || isSubmitting}
                    className="w-full md:w-auto px-8"
                  >
                    {isSubmitting ? "Submitting..." : "Submit"}
                  </Button>
                </div>

                <p className="text-base text-gray-600 italic">
                  We can&apos;t fund every cause, but we&apos;re listening. As we grow, we want this community to shape where impact goes.
                </p>
              </div>

              {/* Final message */}
              <p className="mt-12">One more thing:</p>
              <p className="italic">To the people using Verso free - we&apos;re not asking you for anything. Keep growing. Keep seeking. We built the free tier to serve you, period.</p>
              <p>But to those considering Premium:</p>
              <p className="font-bold">You&apos;re not just upgrading your app. You&apos;re joining a movement of believers who refuse to let faith stop at inspiration.</p>
              <p className="font-bold">Your $4.99/week is worship.</p>
              <ul className="list-none space-y-2 pl-6">
                <li>Your subscription is discipleship.</li>
                <li>Your daily devotion is someone&apos;s answered prayer.</li>
              </ul>
              <p className="font-bold">That&apos;s Matthew 25:40.</p>
              <p className="italic">&quot;Whatever you did for the least of these brothers and sisters of mine, you did for me.&quot;</p>

              {/* CTA */}
              <div className="mt-12 text-center space-y-6">
                <p className="text-2xl md:text-3xl font-bold">Start Premium - Transform Your Walk, Change Their World →</p>
                <p className="text-base text-gray-600">10% of revenue to SOS Children&apos;s Villages, World Vision, and Save the Children. Every quarter, we&apos;ll show you exactly where your impact went.</p>

                <div className="flex justify-center pt-6">
                  <a
                    href="https://apps.apple.com/pt/app/verso-daily-devotional/id6753986891"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/Assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg"
                      alt="Download on the App Store"
                      className="h-14 cursor-pointer hover:opacity-80 transition-opacity"
                    />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Alerts */}
      {showSuccessAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">Thank You!</h3>
            <p className="text-gray-600 mb-4">Your message has been submitted. We appreciate you sharing what&apos;s on your heart.</p>
            <Button onClick={() => setShowSuccessAlert(false)} className="w-full">OK</Button>
          </div>
        </div>
      )}

      {showErrorAlert && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-xl font-bold mb-2">Submission Failed</h3>
            <p className="text-gray-600 mb-4">We couldn&apos;t submit your message right now. Please try again later.</p>
            <Button onClick={() => setShowErrorAlert(false)} className="w-full">OK</Button>
          </div>
        </div>
      )}

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
