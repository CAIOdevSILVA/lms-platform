import { ClerkProvider } from '@clerk/nextjs';
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ToasterProvider from '@/components/provider/toaster-provider';

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
				</body>
			</html>
		</ClerkProvider>
  );
}
