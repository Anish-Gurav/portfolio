import type { Metadata } from 'next';
import { Space_Grotesk, Outfit, JetBrains_Mono } from 'next/font/google';
import { GrainOverlay } from '@/components/ui/GrainOverlay';
import { CustomCursor } from '@/components/ui/CustomCursor';
import Navbar from '@/components/layout/Navbar';
import './globals.css';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const outfit = Outfit({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Anish | DevOps & AI Engineer',
  description:
    'Portfolio of Anish — a DevOps and AI Engineer passionate about building scalable infrastructure, intelligent systems, and elegant developer experiences.',
  openGraph: {
    title: 'Anish | DevOps & AI Engineer',
    description:
      'Portfolio of Anish — a DevOps and AI Engineer passionate about building scalable infrastructure, intelligent systems, and elegant developer experiences.',
    type: 'website',
    locale: 'en_US',
    url: 'https://anish.dev',
    siteName: 'Anish Portfolio',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body className="font-body bg-[#0A0A0F] text-[#E4E4E7] antialiased">
        <GrainOverlay />
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
