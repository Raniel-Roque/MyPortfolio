'use client';

import Link from 'next/link';
import Navigation from '../components/Navigation';

export default function WorkPage() {

  const projects = [
    {
      id: 'fvp',
      title: 'Farm Visit Portal (FVP)',
      description: 'A farm visit slip management system developed for security that includes the management of users, locations, and farm visit slips.',
      company: 'Brookside Group of Companies',
      date: 'February 2026',
      images: [
        '/assets/images/fvp/Dashboard.png',
        '/assets/images/fvp/Guard.png',
        '/assets/images/fvp/Landing.png',
        '/assets/images/fvp/Permits.png'
      ],
      link: '/projects/fvp'
    },
    {
      id: 'intellifire',
      title: 'IntelliFire',
      description: 'An IoT research project developed as an automatic fire alarm system that detects gas and fire using Arduino, web-based application, and MIT Android app.',
      company: 'Freelancing Commission',
      date: 'February 2026',
      images: [
        '/assets/images/intellifire/Landing.png',
        '/assets/images/intellifire/Home.png',
        '/assets/images/intellifire/Rooms.png',
        '/assets/images/intellifire/Miniature.jpg'
      ],
      link: '/projects/intellifire'
    },
    {
      id: 'intellihatch',
      title: 'IntelliHatch',
      description: 'An intelligent AI-supported analysis and reporting, and management system developed for data analysis of submitted forms for hatchery relating to hatching.',
      company: 'Brookside Group of Companies',
      date: 'Jan 2026 — Feb 2026',
      images: [
        '/assets/images/intellihatch/Dashboard.png',
        '/assets/images/intellihatch/Form.png',
        '/assets/images/intellihatch/Landing.png',
        '/assets/images/intellihatch/Telegram.png'
      ],
      link: '/projects/intellihatch'
    },
    {
      id: 'ddss',
      title: 'Digital Disinfection Slip System (DDSS)',
      description: 'A digital disinfection slip management system for security that includes users, guards, trucks, locations, and permits with features that includes reports, dynamic settings, and more.',
      company: 'Brookside Group of Companies',
      date: 'Dec 2025 — Jan 2026',
      images: [
        '/assets/images/ddss/Landing.png',
        '/assets/images/ddss/Admin.png',
        '/assets/images/ddss/Guard.png',
        '/assets/images/ddss/Mobile.png'
      ],
      link: '/projects/ddss'
    },
    {
      id: 'doctask',
      title: 'DocTask',
      description: 'A capstone project developed as a progressive web application for collaborative documentation and project management of capstone projects using TypeScript, Tailwind, React, and Next.js.',
      company: 'Personal Project',
      date: 'Dec 2024 — Nov 2025',
      images: [
        '/assets/images/doctask/Student.png',
        '/assets/images/doctask/Login.png',
        '/assets/images/doctask/Tasks.png',
        '/assets/images/doctask/Word.png'
      ],
      link: '/projects/doctask'
    },
    {
      id: 'whispr',
      title: 'Whispr',
      description: 'An Android application developed as a messaging app using Flutter and Firebase.',
      company: 'Personal Project',
      date: 'Oct 2024 — Nov 2024',
      images: [
        '/assets/images/whispr/Logo.png',
        '/assets/images/whispr/Login.jpg',
        '/assets/images/whispr/Message.jpg',
        '/assets/images/whispr/Message_Dark.jpg'
      ],
      link: '/projects/whispr',
      isLogo: true
    },
    {
      id: 'last-slice',
      title: 'Last Slice',
      description: 'A silly choose-your-own-adventure where every decision leads to wildly different outcomes developed using Unity.',
      company: 'Personal Project',
      date: 'March — April 2025',
      images: [
        '/assets/images/last-slice/Preview1.png',
        '/assets/images/last-slice/Preview2.png',
        '/assets/images/last-slice/Preview3.png',
        '/assets/images/last-slice/Preview4.png'
      ],
      link: '/projects/last-slice'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white">
      <Navigation />

      <main className="mx-auto max-w-6xl px-6 pt-32 pb-16">
        <section className="mb-16">
          <h2 className="text-4xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">Projects</h2>
          <div className="space-y-16">
            {projects.map((project, index) => (
              <article key={project.id} className="group">
                <a href={project.link} className="block">
                  <div className="aspect-video overflow-hidden rounded-3xl bg-gray-100 dark:bg-white/5 mb-8 transition-all duration-500">
                    <img 
                      className={`h-full w-full ${project.isLogo ? 'object-contain p-16' : 'object-cover'} transition-transform duration-700`} 
                      src={project.images[0]} 
                      alt={project.title} 
                      loading="lazy" 
                    />
                  </div>
                  <div className="flex items-start justify-between gap-8">
                    <div className="flex-1">
                      <h3 className="text-2xl font-semibold mb-3 text-gray-900 dark:text-white">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed mb-4">{project.description}</p>
                      <p className="text-sm text-gray-700 dark:text-gray-500">{project.company} • {project.date}</p>
                    </div>
                    <span className="text-gray-700 dark:text-gray-600 text-3xl">→</span>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}
