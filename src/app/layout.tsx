// app/layout.tsx
import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'Ak | Portfolio',
  description: 'Showcasing work and ideas by Ak.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100 text-gray-900">
        <nav className="p-4 bg-white shadow">
          <ul className="flex gap-6">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/projects">Projects</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <main className="p-6 max-w-4xl mx-auto">{children}</main>
      </body>
    </html>
  );
}