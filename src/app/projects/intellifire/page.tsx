'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function IntelliFirePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/assets/images/intellifire/Landing.png',
    '/assets/images/intellifire/Home.png',
    '/assets/images/intellifire/Rooms.png',
    '/assets/images/intellifire/Miniature.jpg'
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">IntelliFire</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Freelancing Commission • February 2026</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-16">
          <p>
            An IoT-based fire detection system using Arduino, and Firebase for real-time monitoring and alerts. The system achieved 95% detection accuracy in testing with real-time alerts within 2 seconds of hazard detection.
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
                alt={`IntelliFire Screenshot ${index + 1}`} 
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
              Traditional fire alarm systems are expensive and lack real-time monitoring capabilities. Many environments, especially in developing regions, need affordable fire detection solutions.
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">The Solution</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              An IoT-based fire detection system using Arduino sensors for gas and fire detection. The system includes a web application and MIT Android app for real-time monitoring and instant alerts.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
