// app/layout.tsx
import './globals.css';
import { CyberpunkNav } from '@/components/CyberpunkNav';
import ParticleBackground from '@/components/ParticleBackground';
import { CyberpunkFooter } from '@/components/CyberpunkFooter';
import { Providers } from './providers';

export const metadata = {
  title: 'AK | Cyberpunk Portfolio',
  description: 'Next-gen developer portfolio with cyberpunk aesthetics',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="bg-cyber-dark text-white overflow-x-hidden">
        <Providers>
          <ParticleBackground />
          <CyberpunkNav />
          <main className="relative z-10 pt-20">{children}</main>
          <CyberpunkFooter />
        </Providers>
      </body>
    </html>
  );
}