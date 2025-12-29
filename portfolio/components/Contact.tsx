'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create mailto link
    const mailtoLink = `mailto:aditya.sharma.11072001@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(message)}%0A%0AFrom: ${encodeURIComponent(email)}`;
    window.location.href = mailtoLink;
  };

  return (
    <section id="contact" className="section relative overflow-hidden bg-[var(--color-void)]">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-[var(--color-ghost)] mb-4">
            <span className="neon-text">{'// '}</span>Get In Touch
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-neon-lime)] to-[var(--color-neon-cyan)]" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-[var(--color-ghost)] mb-4">
                Let's Build Something Amazing
              </h3>
              <p className="text-[var(--color-silver)] text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities
                to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              {[
                {
                  icon: <Mail size={20} />,
                  label: 'Email',
                  value: 'aditya.sharma.11072001@gmail.com',
                  href: 'mailto:aditya.sharma.11072001@gmail.com',
                  color: 'var(--color-neon-cyan)',
                },
                {
                  icon: <Phone size={20} />,
                  label: 'Phone',
                  value: '+91 9389263175',
                  href: 'tel:+919389263175',
                  color: 'var(--color-neon-magenta)',
                },
                {
                  icon: <MapPin size={20} />,
                  label: 'Location',
                  value: 'Mathura, India',
                  href: null,
                  color: 'var(--color-neon-yellow)',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg bg-[var(--color-charcoal)] border hover:border-opacity-100 transition-all"
                  style={{ borderColor: item.color }}
                  whileHover={{ x: 5 }}
                >
                  <div style={{ color: item.color }}>{item.icon}</div>
                  <div>
                    <p className="text-sm text-[var(--color-zinc)] font-mono mb-1">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-[var(--color-fog)] hover:text-[var(--color-ghost)] transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[var(--color-fog)]">{item.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="pt-4 border-t border-[var(--color-carbon)]">
              <p className="text-sm text-[var(--color-zinc)] font-mono mb-4">Connect with me</p>
              <div className="flex gap-4">
                {[
                  { icon: <Github size={24} />, href: 'https://github.com/dtr-beast', label: 'GitHub' },
                  { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/aditya-5harma', label: 'LinkedIn' },
                  { icon: <Mail size={24} />, href: 'mailto:aditya.sharma.11072001@gmail.com', label: 'Email' },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center rounded-lg bg-[var(--color-carbon)] text-[var(--color-silver)] border border-[var(--color-slate)] hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] transition-all"
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-mono text-[var(--color-silver)] mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-slate)] rounded-lg text-[var(--color-ghost)] font-mono focus:outline-none focus:border-[var(--color-primary)] transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-mono text-[var(--color-silver)] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-[var(--color-charcoal)] border border-[var(--color-slate)] rounded-lg text-[var(--color-ghost)] font-mono focus:outline-none focus:border-[var(--color-primary)] transition-colors resize-none"
                  placeholder="Your message here..."
                />
              </div>

              <motion.button
                type="submit"
                className="btn w-full justify-center"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                Send Message
              </motion.button>
            </form>

            <div className="mt-8 p-4 rounded-lg bg-[var(--color-charcoal)] border border-[var(--color-carbon)]">
              <p className="text-sm text-[var(--color-zinc)] font-mono">
                <span className="text-[var(--color-primary)]">Note:</span> This will open your default email client. Alternatively, you can email me directly at <a href="mailto:aditya.sharma.11072001@gmail.com" className="text-[var(--color-neon-cyan)] hover:underline">aditya.sharma.11072001@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
