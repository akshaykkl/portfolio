// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ak | Portfolio',
  description: 'A fantastic portfolio site showcasing work and creativity by Ak',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white text-gray-900">
        <header className="fixed top-0 left-0 right-0 bg-indigo-600 shadow z-50">
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-2xl font-bold text-white">Ak</div>
            <ul className="flex gap-8">
              <li>
                <Link href="#home" className="text-white hover:text-gray-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-white hover:text-gray-200">
                  About
                </Link>
              </li>
              <li>
                <Link href="#projects" className="text-white hover:text-gray-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-white hover:text-gray-200">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <main className="pt-20">{children}</main>
        <footer className="bg-indigo-600 py-6 shadow text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Ak. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  );
}