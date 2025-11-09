"use client";

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const inputStyles = "w-full px-4 py-3 border border-black/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-black/20 focus:border-transparent transition-all duration-200";
const labelStyles = "block text-sm font-medium text-gray-700 mb-2";

export default function ApplicationForm() {
  const webhookUrl = process.env.NEXT_PUBLIC_DISCORD_WEBHOOK_URL || 'https://discord.com/api/webhooks/1417269402776113212/PD159_3i_1RsQWEC-hc8vLsmXTPueQSNvUTHkcXuWLAFV3V81p_P6ziIjacDm_Oz25w-';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    experience: '',
    features: '',
    consent: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleConsentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const payload = {
        content: "New GlowTap Contact Form Submission!",
        embeds: [
          {
            title: "Contact Form Message",
            color: 0x0099ff,
            fields: [
              {
                name: "Name",
                value: formData.name,
                inline: true
              },
              {
                name: "Email",
                value: formData.email,
                inline: true
              },
              {
                name: "Subject",
                value: formData.experience || 'Not provided',
                inline: false
              },
              {
                name: "Message",
                value: formData.features || 'Not provided',
                inline: false
              },
              {
                name: "Marketing Consent",
                value: formData.consent ? 'Yes' : 'No',
                inline: true
              }
            ],
            timestamp: new Date().toISOString()
          }
        ]
      };

      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          experience: '',
          features: '',
          consent: false
        });
      } else {
        setSubmitStatus('error');
        console.error('Failed to submit form');
      }
    } catch (error) {
      setSubmitStatus('error');
      console.error('Error submitting form:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {submitStatus === 'success' && (
        <motion.div
          className="bg-green-50 p-6 rounded-xl text-green-800 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h3 className="font-medium">Message sent!</h3>
              <p className="text-sm mt-1">Thank you for contacting us. We'll get back to you soon!</p>
            </div>
          </div>
        </motion.div>
      )}
      {submitStatus === 'error' && (
        <motion.div
          className="bg-red-50 p-6 rounded-xl text-red-800 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-start">
            <div className="mr-3 mt-0.5">
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="font-medium">Something went wrong</p>
              <p className="text-sm mt-1">We couldn't process your request. Please try again.</p>
            </div>
          </div>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className={labelStyles}>
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={inputStyles}
            required
            placeholder="Your full name"
          />
        </div>
        <div>
          <label htmlFor="email" className={labelStyles}>
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={inputStyles}
            required
            placeholder="your.email@example.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="experience" className={labelStyles}>
          Subject (Optional)
        </label>
        <input
          type="text"
          id="experience"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          className={inputStyles}
          placeholder="What's this about?"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="features" className={labelStyles}>
          Your Message
        </label>
        <textarea
          id="features"
          name="features"
          rows={4}
          value={formData.features}
          onChange={handleChange}
          className={inputStyles}
          placeholder="Tell us about your questions, feedback, or ideas for GlowTap..."
          required
        />
      </div>

      <div className="mb-6">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="consent"
              name="consent"
              type="checkbox"
              checked={formData.consent}
              onChange={handleConsentChange}
              className="h-4 w-4 text-black focus:ring-black border-gray-300 rounded"
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="consent" className="text-gray-600">
              I agree to receive updates and responses about GlowTap
            </label>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        variant="outline"
        size="lg"
        className="w-full border-black hover:bg-black hover:text-white transition-all duration-300 rounded-xl py-6"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          <span className="flex items-center justify-center">
            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-current" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            Joining...
          </span>
        ) : 'Send Message'}
      </Button>
    </form>
  );
}