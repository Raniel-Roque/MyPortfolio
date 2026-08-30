'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navigation from './components/Navigation';

export default function Home() {
  const [year, setYear] = useState('');
  const [activeTab, setActiveTab] = useState('skills');
  const [selectedCertImage, setSelectedCertImage] = useState<string | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear().toString());
    
    // Handle hash navigation for smooth scrolling
    if (window.location.hash === '#contact') {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        setTimeout(() => {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, []);

  const certificates = [
    {
      id: 1,
      title: 'HTML Essentials',
      date: 'May 2026',
      image: '/assets/images/certificates/HTML Essentials.png'
    },
    {
      id: 2,
      title: 'CCNA: Enterprise Networking, Security, and Automation',
      date: 'November 2025',
      image: '/assets/images/certificates/CCNA_ Enterprise Networking, Security, and Automation.png'
    },
    {
      id: 3,
      title: 'Introduction to Cybersecurity',
      date: 'March 2025',
      image: '/assets/images/certificates/Introduction to Cybersecurity.png'
    },
    {
      id: 4,
      title: 'CCNAv7: Switching, Routing, and Wireless Essentials',
      date: 'June 2024',
      image: '/assets/images/certificates/CCNAv7_ Switching, Routing, and Wireless Essentials.png'
    },
    {
      id: 5,
      title: 'CCNAv7: Introduction to Networks',
      date: 'December 2023',
      image: '/assets/images/certificates/CCNAv7_ Introduction to Networks.png'
    },
    {
      id: 6,
      title: 'Partner: PCAP - Programming Essentials in Python',
      date: 'December 2023',
      image: '/assets/images/certificates/Partner_ PCAP - Programming Essentials in Python.png'
    },
    {
      id: 7,
      title: 'Partner: JavaScript Essentials 1 (JSE)',
      date: 'November 2022',
      image: '/assets/images/certificates/Partner_ JavaScript Essentials 1 (JSE).png'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-8">
        <section id="about" className="mb-16">
          <p className="text-sm font-medium tracking-widest uppercase mb-4 text-black dark:text-gray-400">IT / Full-stack Developer</p>
          <div className="grid gap-12 md:grid-cols-2 items-center">
            <div className="space-y-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight">
                Hi, I'm Raniel Roque<br/>
              </h1>
              <p className="text-gray-600 dark:text-gray-300 text-xl leading-relaxed">
                I specialize in <strong>full-stack development</strong>, building reliable applications and practical IT solutions. With expertise in <strong>React, Next.js, PHP, Laravel</strong>, and modern web technologies, I create efficient systems that solve real-world challenges. I'm passionate about clean code, user experience, and delivering quality work that supports business goals.
              </p>
              <div className="flex gap-4">
                <a href="/assets/CV_RESUME.pdf" download className="inline-flex items-center justify-center rounded-full border border-gray-300 dark:border-white/20 bg-white dark:bg-transparent px-8 py-4 text-sm font-semibold text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-white/10 transition-all">Download Resume</a>
              </div>
            </div>
            <div>
              <img 
                src="/assets/images/MyPhoto.jpg" 
                alt="Raniel Roque" 
                className="w-96 h-auto rounded-3xl mx-auto"
              />
            </div>
          </div>
        </section>

        <section id="about-details" className="mb-16">
          <div className="flex mb-8 border-b border-gray-200 dark:border-white/10">
            <button
              onClick={() => setActiveTab('skills')}
              className={`flex-1 pb-4 px-2 text-sm font-medium transition-colors ${
                activeTab === 'skills'
                  ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Technical Skills
            </button>
            <button
              onClick={() => setActiveTab('certificates')}
              className={`flex-1 pb-4 px-2 text-sm font-medium transition-colors ${
                activeTab === 'certificates'
                  ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Certificates
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex-1 pb-4 px-2 text-sm font-medium transition-colors ${
                activeTab === 'education'
                  ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Education
            </button>
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex-1 pb-4 px-2 text-sm font-medium transition-colors ${
                activeTab === 'experience'
                  ? 'text-gray-900 dark:text-white border-b-2 border-gray-900 dark:border-white'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Work Experience
            </button>
          </div>

          {activeTab === 'skills' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-white/10">
                <span className="text-black dark:text-gray-400 font-medium">Languages</span>
                <span className="text-gray-700 dark:text-gray-300 text-right">TypeScript, JavaScript, Python, Java, HTML, CSS, PHP, Dart</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-white/10">
                <span className="text-black dark:text-gray-400 font-medium">Frameworks & Libraries</span>
                <span className="text-gray-700 dark:text-gray-300 text-right">React, Next.js, Node.js, Laravel, Flutter, Tailwind CSS, Bootstrap, RESTful APIs, .NET Framework, Java Swing</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-white/10">
                <span className="text-black dark:text-gray-400 font-medium">Databases</span>
                <span className="text-gray-700 dark:text-gray-300 text-right">MySQL, SQLite, PostgreSQL, MongoDB, Firebase, Convex</span>
              </div>
              <div className="flex justify-between items-center py-3 border-b border-gray-100 dark:border-white/10">
                <span className="text-black dark:text-gray-400 font-medium">Full-Stack</span>
                <span className="text-gray-700 dark:text-gray-300 text-right">TALL Stack, MERN Stack</span>
              </div>
              <div className="flex justify-between items-center py-3">
                <span className="text-black dark:text-gray-400 font-medium">Tools</span>
                <span className="text-gray-700 dark:text-gray-300 text-right">Git, GitHub, Figma, Docker, Capacitor, Electron, Unity, Microsoft Office Suite</span>
              </div>
            </div>
          )}

          {activeTab === 'certificates' && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="p-6 rounded-2xl bg-gray-50 dark:bg-white/5 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setSelectedCertImage(cert.image)}>
                  <img 
                    src={cert.image} 
                    alt={cert.title} 
                    className="w-full h-auto rounded-xl mb-4"
                  />
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{cert.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{cert.date}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'education' && (
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 transition-colors hover:shadow-lg">
                <div className="font-medium text-xl text-gray-900 dark:text-white mb-2">Bachelor of Science in Information Technology</div>
                <div className="text-black dark:text-gray-400 mb-3">Dominican College of Tarlac, Inc. • 2026</div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Achievements:</span> Cum Laude and Programmer of the Year. Best in Programming, Networking, Web Design and Development, and Internship.
                </div>
              </div>
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 transition-colors hover:shadow-lg">
                <div className="font-medium text-xl text-gray-900 dark:text-white mb-2">Accountancy, Business, and Management (ABM)</div>
                <div className="text-black dark:text-gray-400 mb-3">Sto. Niño Academy • 2022</div>
                <div className="text-gray-600 dark:text-gray-300">
                  <span className="font-semibold">Achievements:</span> High Honor Student.
                </div>
              </div>
            </div>
          )}

          {activeTab === 'experience' && (
            <div className="space-y-6">
              <div className="p-8 rounded-3xl bg-gray-50 dark:bg-white/5 transition-colors hover:shadow-lg">
                <div className="font-medium text-xl text-gray-900 dark:text-white mb-2">Brookside Group of Companies</div>
                <div className="text-black dark:text-gray-400 mb-3">OJT / IT / Web Developer • Nov 2025 — Feb 2026</div>
                <p className="text-gray-600 dark:text-gray-300">
                  Developed and deployed three web applications using TALL Stack to improve workflow and security across internal processes. Built systems for farm visit management, disinfection tracking, and AI-powered hatchery analysis that digitized 100% of tracking processes and reduced manual data analysis time by 95%. Implemented frontend interfaces, server-side logic, and database-backed features supporting guards, users, and permit management across 5+ farm locations.
                </p>
              </div>
            </div>
          )}
        </section>

        <section id="contact" className="mb-8">
          <h2 className="text-4xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">Contact Information</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-xl">Email</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">raniel.christian.roque@gmail.com</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-xl">Phone</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">(+63) 998-379-0133</p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-3 text-xl">Location</h3>
              <p className="text-gray-600 dark:text-gray-300 text-lg">Tarlac, Philippines</p>
            </div>
          </div>
        </section>

        <footer className="border-t border-gray-200 dark:border-white/10 pt-8 pb-6">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="text-sm text-black dark:text-gray-400">
              <p>© {year} Raniel Christian B. Roque. All rights reserved.</p>
            </div>
            <div className="flex gap-6">
              <a href="https://github.com/Raniel-Roque" target="_blank" rel="noreferrer" className="text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/in/raniel-christian-roque-1179523ba/" target="_blank" rel="noreferrer" className="text-black dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </main>

      {selectedCertImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedCertImage(null)}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:opacity-70 transition-opacity"
            onClick={() => setSelectedCertImage(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
          <img 
            src={selectedCertImage} 
            alt="Certificate" 
            className="max-w-full max-h-full object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
