// app/page.tsx
export default function Home() {
  return (
    <section className="text-center py-20">
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        Hi, I’m Ak 👋
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto">
        I build thoughtful machine learning solutions, sleek web interfaces, and love unraveling complex systems.
      </p>
      <div className="mt-8 flex justify-center gap-4">
        <a
          href="/projects"
          className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          View Projects
        </a>
        <a
          href="/contact"
          className="px-6 py-3 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition"
        >
          Contact Me
        </a>
      </div>
    </section>
  );
}