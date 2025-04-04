import type {JSX, ReactNode} from 'react';
import type {Metadata} from 'next';
import { fontVariables } from '~utils/fonts';
import '~styles/index.css';

/**
 * Metadata for the Polly website
 */
export const metadata: Metadata = {
    title: 'Polly — Pudgy Penguins Character & Companion of Pax',
    description: 'Meet Polly, the beloved wife of Pax and official character from Pudgy Penguins. Discover her story, explore artwork, and join the Polly Penguin community!',
    icons: {
        icon: [
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon-96x96.png', type: 'image/png', sizes: '96x96' },
            { url: '/favicon.ico', type: 'image/x-icon' },
        ],
        apple: '/apple-touch-icon.png',
        shortcut: '/favicon.ico',
    },
    appleWebApp: {
        title: 'Polly — Pudgy Penguins',
        statusBarStyle: 'black-translucent',
        capable: true,
    },
    manifest: '/site.webmanifest',

    openGraph: {
        title: 'Polly — Pudgy Penguins Character & Companion of Pax',
        description: 'Explore the world of Polly — a charming character in the Pudgy Penguins universe and Pax’s beloved companion.',
        url: 'https://pollyabstract.xyz',
        siteName: 'Polly — Pudgy Penguins',
        images: [
            {
                url: 'https://pollyabstract.xyz/og-image.png',
                width: 1200,
                height: 630,
                alt: 'Polly the Penguin — Pudgy Penguins Character',
            },
        ],
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Polly — Pudgy Penguins Character',
        description: 'Official website of Polly, Pax’s beloved companion in the Pudgy Penguins universe.',
        site: '@PollyAbstract',
        creator: '@PollyAbstract',
        images: ['https://pollyabstract.xyz/og-image.png'],
    },

    authors: [{ name: 'Polly Team' }],
    keywords: [
        'Polly', 'Pax', 'Pudgy Penguins', 'NFT', 'Web3',
        'Pengu', 'Polly Penguin', 'Penguin NFT', 'Companion NFT',
        'Polly On Abstract', 'Cute NFT Character'
    ],
    robots: {
        index: true,
        follow: true,
        nocache: false,
    },
};


/**
 * Props for the RootLayout component
 */
export interface RootLayoutProps {
    /** The child components to be rendered inside the layout */
    children: ReactNode;
}

/**
 * Root layout component that wraps all pages with common HTML structure and global styles
 */
export function RootLayout({ children }: RootLayoutProps): JSX.Element {
    return (
        <html lang="en" className={`${fontVariables} h-full m-0 p-0`}>
        <body className="bg-purple-500 min-h-screen w-full m-0 p-0 relative">
        {children}
        </body>
        </html>
    );
}

export default RootLayout;
