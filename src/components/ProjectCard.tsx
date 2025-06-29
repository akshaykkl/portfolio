'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';

export function ProjectCard({ project, index }: { project: any, index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      whileHover={{ 
        y: -10,
        boxShadow: '0 0 15px rgba(0, 240, 255, 0.5)'
      }}
      className="relative overflow-hidden border border-cyan-500/20 rounded-lg group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      
      <div className="relative z-10 p-6">
        <h3 className="text-2xl font-bold mb-3 cyber-text">{project.title}</h3>
        <p className="text-white/80 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map((tech: string) => (
            <span key={tech} className="px-2 py-1 text-xs bg-cyan-900/50 rounded">
              {tech}
            </span>
          ))}
        </div>
        
        <a 
          href={project.link} 
          target="_blank"
          rel="noopener noreferrer"
          className="text-cyan-400 hover:text-white flex items-center"
        >
          View Project
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </motion.div>
  );
}