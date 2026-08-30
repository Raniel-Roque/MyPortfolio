'use client';

import Link from 'next/link';
import { useState } from 'react';
import Navigation from '../../components/Navigation';

export default function LastSlicePage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const images = [
    '/assets/images/last-slice/Preview1.png',
    '/assets/images/last-slice/Preview2.png',
    '/assets/images/last-slice/Preview3.png',
    '/assets/images/last-slice/Preview4.png'
  ];
  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />
      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-4">Last Slice</h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">Personal Project • March — April 2025</p>
        </div>

        <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300 mb-16">
          <p>
            A comedic narrative-driven game built with Unity and C# that features branching storylines and player choice mechanics. Point, click, and choose your destiny. Plot your way through unpredictable scenarios, outrageous consequences, and bizarre cutscenes—all driven by your choices.
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
                alt={`Last Slice Screenshot ${index + 1}`} 
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
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">The Story</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              One party. One pizza. One slice left.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              What starts as a casual hangout turns into a full-blown mission. You are the mastermind behind an absurd, over-the-top heist to secure the last slice of pizza?
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              A silly choose-your-own-adventure where every decision leads to wildly different outcomes!
            </p>
          </div>
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6 text-gray-900 dark:text-white">Itch.io Page</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              <a href="https://kouhaii.itch.io/last-slice" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                https://kouhaii.itch.io/last-slice
              </a>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
