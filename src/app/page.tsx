// app/page.tsx
'use client';


import FloatingText from '@/components/FloatingText';
import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Text3D } from '@react-three/drei';
import { Suspense } from 'react';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
};

const FloatingText = () => {
  return (
    <Canvas camera={{ position: [0, 0, 10] }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <Suspense fallback={null}>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={1}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
          position={[-3.5, 0, 0]}
        >
          {`AK`}
          <meshStandardMaterial color="#4f46e5" />
        </Text3D>
      </Suspense>
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
    </Canvas>
  );
};

export default function Home() {
  return (
    <div className="space-y-20">
      {/* Hero Section */}
      <motion.section
        id="home"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={0}
        variants={fadeInUp}
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500/20 to-blue-600/20 text-white py-20 relative overflow-hidden"
      >
        {/* Floating 3D Text */}
        <div className="absolute w-64 h-64 -right-10 -top-10 opacity-30">
          <Suspense fallback={null}>
            <FloatingText />
          </Suspense>
        </div>
        
        <motion.h1 
          className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-indigo-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Hi, I'm Ak 👋
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-3xl mb-8 max-w-2xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          I create <span className="font-bold text-indigo-300">innovative digital experiences</span> using modern web technologies and cutting-edge machine learning.
        </motion.p>
        
        <motion.div 
          className="flex gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg shadow-lg hover:bg-gray-200 transition-all hover:scale-105"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border-2 border-white rounded-lg hover:bg-white hover:text-indigo-600 transition-all hover:scale-105"
          >
            Contact Me
          </a>
        </motion.div>
        
        {/* Animated scroll indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
            <motion.div
              className="w-1 h-2 bg-white rounded-full mt-2"
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
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeInUp}
        className="py-20 bg-white/80 backdrop-blur-sm text-gray-900 px-6 relative"
      >
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-center text-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            About Me
          </motion.h2>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed mb-4">
                I'm a passionate <span className="font-semibold text-indigo-600">developer</span> and <span className="font-semibold text-indigo-600">machine learning enthusiast</span> based in India. I love blending art and technology to solve real-world challenges.
              </p>
              <p className="text-lg leading-relaxed">
                With experience ranging from designing visually appealing interfaces to developing robust AI models, I'm always pushing the boundaries of what's possible.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-64"
            >
              {/* 3D Skill Visualization */}
              <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <mesh rotation={[0.5, 0.5, 0]}>
                  <octahedronGeometry args={[1, 0]} />
                  <meshStandardMaterial 
                    color="#4f46e5" 
                    wireframe 
                    transparent 
                    opacity={0.8} 
                  />
                </mesh>
              </Canvas>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Projects Section - Updated with 3D Cards */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        variants={fadeInUp}
        className="py-20 bg-gray-50/80 backdrop-blur-sm px-6"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-8 text-center text-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Projects
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 with 3D hover effect */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Project One"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Project One</h3>
                <p className="text-gray-700 mb-4">
                  A Streamlit web application that detects fake news using both Logistic Regression and Deep Learning models.
                </p>
                <a 
                  href="https://github.com/akshaykkl/fake-news-prediction.git" 
                  className="text-indigo-600 hover:underline flex items-center"
                  target='_blank'
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Project Card 2 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Project Two"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Project Two</h3>
                <p className="text-gray-700 mb-4">
                  A Streamlit web app that predicts PC prices based on hardware specifications using machine learning.
                </p>
                <a 
                  href="https://github.com/akshaykkl/pc-price-predictor.git" 
                  className="text-indigo-600 hover:underline flex items-center"
                  target='_blank'
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
            
            {/* Project Card 3 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={2}
              variants={fadeInUp}
              whileHover={{ y: -10 }}
              className="bg-white rounded-xl shadow-xl overflow-hidden border border-indigo-100 hover:shadow-2xl transition-all duration-300 group"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://via.placeholder.com/600x400"
                  alt="Project Three"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-indigo-600/20 group-hover:bg-transparent transition-all duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Project Three</h3>
                <p className="text-gray-700 mb-4">
                  A personal project that is used for football auctions.
                </p>
                <a 
                  href="https://github.com/akshaykkl/bpl.git" 
                  className="text-indigo-600 hover:underline flex items-center"
                  target='_blank'
                >
                  Learn More
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section with Interactive Form */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
        variants={fadeInUp}
        className="py-20 bg-white/80 backdrop-blur-sm text-gray-900 px-6"
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2 
            className="text-4xl font-bold mb-6 text-center text-indigo-600"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Get In Touch
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
                  className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600 -top-3 text-sm bg-white px-1"
                >
                  Your Name
                </label>
              </div>
              
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600 -top-3 text-sm bg-white px-1"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative">
              <textarea
                id="message"
                rows={4}
                className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder=" "
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-gray-500 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-2 peer-focus:-top-3 peer-focus:text-sm peer-focus:text-indigo-600 -top-3 text-sm bg-white px-1"
              >
                Your Message
              </label>
            </div>
            
            <motion.button
              type="submit"
              className="w-full px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition-colors"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
          </motion.form>
        </div>
      </motion.section>
    </div>
  );
}