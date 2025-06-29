'use client';

import { motion } from 'framer-motion';
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { FloatingText } from '@/components/FloatingText';
import { GridLines } from '@/components/GridLines';
import { ProjectCard } from '@/components/ProjectCard';
import { SkillSphere } from '@/components/SkillSphere';

const projects = [
  {
    title: "Fake News Detection",
    description: "A Streamlit web application that detects fake news using both Logistic Regression and Deep Learning models.",
    tech: ["Python", "TensorFlow", "NLP"],
    link: "https://github.com/akshaykkl/fake-news-prediction.git"
  },
  {
    title: "PC Price Predictor",
    description: "A Streamlit web app that predicts PC prices based on hardware specifications using machine learning.",
    tech: ["Python", "Scikit-learn", "Streamlit"],
    link: "https://github.com/akshaykkl/pc-price-predictor.git"
  },
  {
    title: "Football Auction System",
    description: "A personal project that is used for football auctions with real-time bidding features.",
    tech: ["JavaScript", "React", "Firebase"],
    link: "https://github.com/akshaykkl/bpl.git"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 }
  })
};

export default function Home() {
  return (
    <div className="space-y-40">
      {/* Hero Section */}
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={0}
        className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-20">
          <Canvas>
            <GridLines />
          </Canvas>
        </div>

        <div className="absolute w-full h-64 top-20">
          <Suspense fallback={null}>
            <FloatingText text="AK" size={2} color="#00f0ff" />
          </Suspense>
        </div>

        <motion.h1 
          className="cyber-text text-5xl md:text-8xl font-bold mb-6 text-center"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BUILDING THE FUTURE
        </motion.h1>

        <motion.p 
          className="text-xl md:text-2xl max-w-2xl text-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <span className="cyber-text">Full-stack developer</span> creating immersive digital experiences at the intersection of design and technology
        </motion.p>

        <motion.div 
          className="flex gap-6 flex-wrap justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a href="#projects" className="cyber-button glitch">
            <span>VIEW PROJECTS</span>
          </a>
          <a href="#contact" className="cyber-button glitch" style={{ borderColor: 'var(--neon-purple)', color: 'var(--neon-purple)' }}>
            <span>CONTACT</span>
          </a>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-cyan-400 rounded-full mt-2"
              animate={{ opacity: [0, 1, 0] }}
              transition={{ repeat: Infinity, duration: 2, delay: 0.5 }}
            />
          </div>
        </motion.div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={1}
        className="py-20 glass-panel mx-6 rounded-xl"
      >
        <div className="max-w-6xl mx-auto px-6">
          <motion.h2 
            className="cyber-text text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ABOUT ME
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed mb-6">
                I'm a passionate <span className="cyber-text">developer</span> and <span className="cyber-text">machine learning enthusiast</span> based in India. I love blending art and technology to solve real-world challenges.
              </p>
              <p className="text-lg leading-relaxed mb-6">
                With experience ranging from designing visually appealing interfaces to developing robust AI models, I'm always pushing the boundaries of what's possible.
              </p>
              <div className="flex flex-wrap gap-3">
                {['JavaScript', 'Python', 'React', 'Next.js', 'TensorFlow', 'Three.js'].map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-cyan-900/50 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="h-64 md:h-96"
            >
              <Suspense fallback={null}>
                <SkillSphere />
              </Suspense>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={2}
        className="py-20 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="cyber-text text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            MY PROJECTS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title}
                project={project}
                index={index}
              />
            ))}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        custom={3}
        className="py-20 glass-panel mx-6 rounded-xl"
      >
        <div className="max-w-3xl mx-auto px-6">
          <motion.h2 
            className="cyber-text text-4xl font-bold mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            GET IN TOUCH
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            I'm open to discussing projects, brainstorming creative ideas, or even sharing a cup of coffee. Let's connect!
          </motion.p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  className="peer w-full px-4 py-3 bg-cyber-gray border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-400 -top-2 text-sm bg-cyber-gray px-1"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full px-4 py-3 bg-cyber-gray border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-400 -top-2 text-sm bg-cyber-gray px-1"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                rows={4}
                className="peer w-full px-4 py-3 bg-cyber-gray border border-cyan-500/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-white"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-3 text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-sm peer-focus:text-cyan-400 -top-2 text-sm bg-cyber-gray px-1"
              >
                Your Message
              </label>
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-lg shadow-lg hover:shadow-cyan-500/30 transition-all"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              SEND MESSAGE
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
}