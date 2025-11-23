import React from 'react';
import { Inter, Poppins } from 'next/font/google';
import Header from './Header';
import Footer from './Footer';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
});

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className={`${inter.variable} ${poppins.variable} font-sans`}>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="grow">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
}