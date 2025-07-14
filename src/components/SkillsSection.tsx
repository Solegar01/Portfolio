// src/components/SkillsSection.tsx
import React from 'react';

interface Skill {
  name: string;
  level: number;
  color: string;
}

const skills: Skill[] = [
  { name: 'React', level: 90, color: 'bg-blue-500' },
  { name: 'TypeScript', level: 85, color: 'bg-blue-600' },
  { name: 'Node.js', level: 80, color: 'bg-green-500' },
  { name: 'Python', level: 75, color: 'bg-yellow-500' },
  { name: 'Tailwind CSS', level: 95, color: 'bg-cyan-500' },
  { name: 'MongoDB', level: 70, color: 'bg-green-600' },
];

const SkillBar = ({ skill, index }: { skill: Skill; index: number }) => (
  <div className="mb-6">
    <div className="flex justify-between items-center mb-2">
      <span className="text-gray-700 font-medium">{skill.name}</span>
      <span className="text-gray-500 text-sm">{skill.level}%</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${skill.color} transition-all duration-1000 ease-out`}
        style={{ 
          width: `${skill.level}%`,
          transitionDelay: `${index * 100}ms`
        }}
      />
    </div>
  </div>
);

export default function SkillsSection() {
  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Skills & Technologies</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            I work with modern technologies to deliver exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">Technical Skills</h3>
            {skills.map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} />
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-800 mb-8">What I Do</h3>
            <div className="space-y-6">
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Frontend Development</h4>
                <p className="text-gray-600">
                  Creating responsive, interactive user interfaces using React, TypeScript, and modern CSS frameworks.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">Backend Development</h4>
                <p className="text-gray-600">
                  Building robust APIs and server-side applications using Node.js, Python, and various databases.
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-2">UI/UX Design</h4>
                <p className="text-gray-600">
                  Designing intuitive and visually appealing interfaces that provide excellent user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
