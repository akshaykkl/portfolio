// app/layout.tsx
import './globals.css';
import Link from 'next/link';
import { Suspense } from 'react';
import Scene from '@/components/Scene';
import { Providers } from './providers'; // We'll create this next
import { CyberpunkNav } from '@/components/CyberpunkNav';
import { ParticleBackground } from '@/components/ParticleBackground';

export const metadata = {
  title: 'Ak | Portfolio',
  description: 'A fantastic portfolio site showcasing work and creativity by Ak',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900 relative overflow-x-hidden">
        {/* 3D Background */}
        <div className="fixed inset-0 -z-10 opacity-20">
          <Suspense fallback={null}>
            <Scene />
          </Suspense>
        </div>
        
        {/* Wrap the entire layout with Providers */}
        <Providers>
          {/* Header */}
          <header className="fixed top-0 left-0 right-0 bg-indigo-600/80 backdrop-blur-md shadow-lg z-50">
            <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
              <div className="text-2xl font-bold text-white">Ak</div>
              <ul className="flex gap-8">
                {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                  <li key={item}>
                    <Link 
                      href={`#${item.toLowerCase()}`} 
                      className="text-white hover:text-indigo-200 transition-colors relative group"
                    >
                      {item}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </header>
          
          <main className="pt-20">{children}</main>
          
          {/* Footer */}
          <footer className="bg-indigo-600/80 backdrop-blur-md py-6 shadow-lg text-center">
            <p className="text-white">
              &copy; {new Date().getFullYear()} Ak. All rights reserved.
            </p>
          </footer>
        </Providers>
      </body>
    </html>
  );
}