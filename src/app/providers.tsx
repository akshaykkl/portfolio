// app/providers.tsx
'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import Link from 'next/link';

export function Providers({ children }: { children: ReactNode }) {
  return (
    <>
      {/* Animated Header */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 bg-indigo-600/80 backdrop-blur-md shadow-lg z-50"
      >
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold text-white"
          >
            Ak
          </motion.div>
          <ul className="flex gap-8">
            {['Home', 'About', 'Projects', 'Contact'].map((item, index) => (
              <motion.li
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              >
                <Link 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white hover:text-indigo-200 transition-colors relative group"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all group-hover:w-full"></span>
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.header>
      
      {children}
      
      {/* Animated Footer */}
      <motion.footer 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="bg-indigo-600/80 backdrop-blur-md py-6 shadow-lg text-center"
      >
        <p className="text-white">
          &copy; {new Date().getFullYear()} Ak. All rights reserved.
        </p>
      </motion.footer>
    </>
  );
}