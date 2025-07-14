// src/components/HeroSection.tsx
import { ChevronDown } from 'lucide-react';

export default function HeroSection({ scrollToSection }: { scrollToSection: (id: string) => void }) {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6 animate-slide-up">
            Hi, I'm <span className="text-indigo-600">Solegar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 animate-slide-up animation-delay-200">
            .NET & Flutter Android Developer
          </p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto animate-slide-up animation-delay-s400">
            I create beautiful, functional, and user-centered digital experiences that make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up animation-delay-600">
            <button
              onClick={() => scrollToSection('projects')}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors font-medium"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors font-medium"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="mt-16 animate-bounce">
          <ChevronDown className="mx-auto text-gray-400" size={32} />
        </div>
      </div>
    </section>
  );
}
