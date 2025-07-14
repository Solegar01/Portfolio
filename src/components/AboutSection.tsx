// src/components/AboutSection.tsx
import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Me</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I'm a passionate developer who loves creating exceptional digital experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop"
              alt="Profile"
              className="rounded-2xl shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Crafting Digital Solutions with Passion
            </h3>
            <p className="text-gray-600 mb-6">
              With over 5 years of experience in web development, I specialize in creating
              modern, scalable applications using the latest technologies. My journey began
              with a curiosity about how things work, which led me to discover the world of
              programming.
            </p>
            <p className="text-gray-600 mb-8">
              I believe in writing clean, maintainable code and creating user experiences
              that are both beautiful and functional. When I'm not coding, you'll find me
              exploring new technologies, contributing to open source projects, or enjoying
              a good book.
            </p>

            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Code className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Clean Code</h4>
                  <p className="text-sm text-gray-600">Maintainable solutions</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Palette className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Great Design</h4>
                  <p className="text-sm text-gray-600">Beautiful interfaces</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Zap className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Fast Performance</h4>
                  <p className="text-sm text-gray-600">Optimized applications</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-indigo-100 rounded-lg flex items-center justify-center">
                  <Users className="text-indigo-600" size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">Team Player</h4>
                  <p className="text-sm text-gray-600">Collaborative approach</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
