'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function IntelliHatchPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/assets/images/intellihatch/Dashboard.png',
    '/assets/images/intellihatch/Form.png',
    '/assets/images/intellihatch/Landing.png',
    '/assets/images/intellihatch/Telegram.png'
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">IntelliHatch</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Brookside Group of Companies • Jan 2026 — Feb 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-16">
          <p>
            An intelligent hatchery management system that analyzes form submissions to identify patterns and optimize hatching processes. The system uses artificial intelligence (AI) to provide insights and recommendations for different hatchery operations, reducing the amount of time needed to manually read and analyze data by about 95%.
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
                alt={`IntelliHatch Screenshot ${index + 1}`} 
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
              Hatchery operations generated vast amounts of data that can range to hundreds of forms to thousands in a day which was difficult to analyze manually. Form submissions needed intelligent analysis to identify patterns and optimize hatching processes without the need of skimming through all the data manually.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">The Solution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              An AI-powered system that analyzes hatchery data, generates reports, and provides actionable insights. The system processes form submissions and delivers intelligent analysis to improve hatchery efficiency.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
