import QueryProvider from '@/src/utils/QueryProvider';
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Provider from './_trpc/Provider';
import Nav, { NavigationMenuDemo } from '@/src/components/Nav';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'name',
	description: 'what we do..',
	keywords: ['A', 'B'],
	openGraph: {
		title: 'name',
		description: 'some descripiton',
		url: 'URL',
		siteName: 'search keyword',
		images: [
			{
				url: 'logo path should be absolute',
				width: 800,
				height: 600,
				alt: 'logo'
			},
			{
				url: 'logo path should be absolute',
				width: 1800,
				height: 1600,
				alt: 'logo',
			},
		],
		type: 'website',
	},

};
export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Provider>
					<div className="text-center">
						<NavigationMenuDemo />
						{children}
					</div>
				</Provider>
			</body>
		</html>
	)
}
