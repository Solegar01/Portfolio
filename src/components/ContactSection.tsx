import React from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get In Touch</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm always interested in new opportunities and collaborations
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Whether you have a project in mind or just want to chat about technology,
                I'd love to hear from you. Let's create something amazing together!
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:alex@example.com"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Mail className="text-indigo-600" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">Email</p>
                    <p className="text-gray-600">alex@example.com</p>
                  </div>
                </a>
                <a
                  href="https://linkedin.com/in/alex"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Linkedin className="text-indigo-600" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">LinkedIn</p>
                    <p className="text-gray-600">linkedin.com/in/alex</p>
                  </div>
                </a>
                <a
                  href="https://github.com/alex"
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <Github className="text-indigo-600" size={24} />
                  <div>
                    <p className="font-medium text-gray-800">GitHub</p>
                    <p className="text-gray-600">github.com/alex</p>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-colors resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
                <button
                  type="button"
                  className="w-full bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
                  onClick={() => alert('Thanks for your message! This is a demo contact form.')}
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
