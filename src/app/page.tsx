// app/page.tsx
'use client';
import { motion } from 'framer-motion';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom * 0.2, duration: 0.6 },
  }),
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
        className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-r from-indigo-500 to-blue-600 text-white py-20"
      >
        <h1 className="text-5xl md:text-7xl font-bold mb-4">Hi, I'm Ak 👋</h1>
        <p className="text-xl md:text-3xl mb-8 max-w-2xl">
          I create innovative digital experiences using modern web technologies and cutting-edge machine learning.
        </p>
        <div className="flex gap-6">
          <a
            href="#projects"
            className="px-8 py-3 bg-white text-indigo-600 rounded-lg shadow hover:bg-gray-200 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-white rounded-lg hover:bg-white hover:text-indigo-600 transition"
          >
            Contact Me
          </a>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={1}
        variants={fadeInUp}
        className="py-20 bg-white text-gray-900 px-6"
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center text-indigo-600">About Me</h2>
          <p className="text-lg leading-relaxed mb-4">
            I'm a passionate developer and machine learning enthusiast based in India. I love blending art and technology to solve real-world challenges.
          </p>
          <p className="text-lg leading-relaxed">
            With experience ranging from designing visually appealing interfaces to developing robust AI models, I’m always pushing the boundaries of what’s possible.
          </p>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={2}
        variants={fadeInUp}
        className="py-20 bg-gray-50 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center text-indigo-600">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project Card 1 */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={0}
              variants={fadeInUp}
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-200"
            >
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project One"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Project One</h3>
                <p className="text-gray-700 mb-4">
                  A cutting-edge solution leveraging machine learning to deliver real-time insights.
                </p>
                <a href="#" className="text-indigo-600 hover:underline">
                  Learn More
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
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-200"
            >
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project Two"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Project Two</h3>
                <p className="text-gray-700 mb-4">
                  An innovative web application that streamlines digital workflows for modern businesses.
                </p>
                <a href="#" className="text-indigo-600 hover:underline">
                  Learn More
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
              className="bg-white rounded-lg shadow-lg overflow-hidden border border-indigo-200"
            >
              <img
                src="https://via.placeholder.com/600x400"
                alt="Project Three"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-indigo-600">Project Three</h3>
                <p className="text-gray-700 mb-4">
                  A personal project that blends creative design with functional development.
                </p>
                <a href="#" className="text-indigo-600 hover:underline">
                  Learn More
                </a>
              </div>
            </motion.div>
            {/* Add more project cards as needed */}
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        custom={3}
        variants={fadeInUp}
        className="py-20 bg-white text-gray-900 px-6"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">Get In Touch</h2>
          <p className="text-lg mb-8">
            I'm open to discussing projects, brainstorming creative ideas, or even sharing a cup of coffee.
            Let's connect!
          </p>
          <a
            href="mailto:your.email@example.com"
            className="inline-block px-10 py-4 bg-indigo-600 rounded-lg text-white text-lg hover:bg-indigo-700 transition"
          >
            Email Me
          </a>
        </div>
      </motion.section>
    </div>
  );
}