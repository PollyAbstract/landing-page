import type {JSX, ReactNode} from 'react';
import type {Metadata} from 'next';
import { fontVariables } from '~utils/fonts';
import '~styles/index.css';

/**
 * Metadata for the Polly website
 */
export const metadata: Metadata = {
    title: 'Polly — Wife of Pax',
    description: 'Official Polly penguin character website',
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
        title: 'Polly',
    },
    manifest: '/site.webmanifest',
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
