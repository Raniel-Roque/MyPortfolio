'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function DDSSPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/assets/images/ddss/Landing.png',
    '/assets/images/ddss/Admin.png',
    '/assets/images/ddss/Guard.png',
    '/assets/images/ddss/Mobile.png'
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">Digital Disinfection Slip System (DDSS)</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Brookside Group of Companies • Dec 2025 — Jan 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-16">
          <p>
            A digital disinfection slip system for tracking truck disinfection at agricultural facilities. The system digitized 100% of disinfection tracking processes, eliminating paper waste and improving audit compliance.
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
                alt={`DDSS Screenshot ${index + 1}`} 
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
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Manual disinfection tracking through paper-based records was inefficient, costly, and prone to errors. Security guards struggled with paper-based systems, making it difficult to track trucks, locations, and disinfection permits effectively.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">The Solution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A comprehensive digital system that digitizes and manages relevant data for disinfection permits. Features included dynamic settings, backups, and real-time tracking to modernize, and efficiently handle the disinfection process without compromising security.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
