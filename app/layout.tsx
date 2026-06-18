import type { Metadata } from 'next';
import { seo } from '@/data/profile';
import './globals.css';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  metadataBase: new URL('https://mukeshwaran.dev'),
  openGraph: {
    title: seo.title,
    description: seo.description,
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
