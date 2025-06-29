'use client';
import { motion } from 'framer-motion';

export function CyberpunkFooter() {
  return (
    <footer className="py-8 backdrop-blur-md border-t border-cyan-500/20 mt-20">
      <div className="container mx-auto px-6 text-center">
        <motion.p 
          className="text-white/80 mb-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          © {new Date().getFullYear()} AK. All rights reserved.
        </motion.p>
        <motion.div 
          className="flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {['GitHub', 'LinkedIn', 'Twitter'].map((social) => (
            <a 
              key={social}
              href="#"
              className="text-white/60 hover:text-cyan-400 transition-colors"
            >
              {social}
            </a>
          ))}
        </motion.div>
      </div>
    </footer>
  );
}