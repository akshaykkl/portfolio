'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';

export function CyberpunkNav() {
  const links = ['Home', 'About', 'Projects', 'Contact'];
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b border-cyan-500/20">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div 
          className="text-2xl font-bold cyber-text"
          animate={{ textShadow: [
            '0 0 5px #00f0ff',
            '0 0 10px #00f0ff, 0 0 20px #ff00f0',
            '0 0 5px #00f0ff'
          ]}}
          transition={{ duration: 2, repeat: Infinity }}
        >
          AK
        </motion.div>
        
        <ul className="flex gap-8">
          {links.map((link) => (
            <motion.li key={link} whileHover={{ scale: 1.1 }}>
              <Link 
                href={`#${link.toLowerCase()}`} 
                className="relative group text-white/80 hover:text-white"
              >
                {link}
                <span className="absolute left-0 bottom-0 w-0 h-px bg-cyan-400 transition-all group-hover:w-full" />
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
}