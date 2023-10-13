import { ClerkProvider } from '@clerk/nextjs';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToasterProvider from '@/components/provider/toaster-provider';
import ConfettiProvider from '@/components/provider/confetti-provider';

import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LMS Platform',
  description: 'A LMS platform build with Next.js 13',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
		<ClerkProvider>
			<html lang="en">
				<body className={inter.className}>
					{children}
					<ToasterProvider />
					<ConfettiProvider/>
				</body>
			</html>
		</ClerkProvider>
  );
}
