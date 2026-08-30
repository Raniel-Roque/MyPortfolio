'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function DocTaskPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/assets/images/doctask/Student.png',
    '/assets/images/doctask/Login.png',
    '/assets/images/doctask/Tasks.png',
    '/assets/images/doctask/Word.png'
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">DocTask</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Personal Project • Dec 2024 — Nov 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-16">
          <p>
            A collaborative documentation and project management platform for admins, advisers, and students partaking in capstone projects. The application supported 50+ student teams with real-time collaboration, reducing project documentation time by 40%.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-16">
          {images.map((image, index) => (
            <div 
              key={index}
              className="aspect-video rounded-3xl overflow-hidden bg-gray-100 dark:bg-white/5 cursor-pointer hover:opacity-80 transition-opacity border border-gray-200 dark:border-white/10 shadow-sm"
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image} 
                alt={`DocTask Screenshot ${index + 1}`} 
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        {selectedImage && (
          <div 
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-4 right-4 text-white bg-black/50 hover:bg-black/70 rounded-full w-10 h-10 flex items-center justify-center transition-colors text-4xl"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              ×
            </button>
            <img 
              src={selectedImage} 
              alt="Full size screenshot" 
              className="max-w-full max-h-full object-contain"
            />
          </div>
        )}

        <div className="grid gap-16 md:grid-cols-2 mb-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">The Problem</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Student teams struggle with collaborative documentation and project management during capstone projects. Existing tools are either too complex or lack features specific to academic project requirements.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Students are often scrambling through different tabs and applications which leads to inefficiency and disorganization. While capstone advisers struggle with checking papers and providing feedback in a timely manner.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">The Solution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              A progressive web application that can be run in any modern browser and desktop environment (windows, linux, and mac), built with TypeScript, Tailwind, React, and Next.js. It provides collaborative documentation and project management features specifically designed for capstone projects.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              The application allows students to work together on documents, track progress, and manage tasks in one centralized location. Advisers can provide feedback and track student progress in real-time. The system ensures security and privacy for any data stored within the application.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
