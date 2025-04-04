'use client';
import type {JSX} from 'react';
import Image from 'next/image';
import Link from 'next/link';

/**
 * Props for the NavbarLogo component
 * @group Navbar
 */
export interface NavbarLogoProps {
    /** The URL to navigate to when clicking the logo */
    href?: string;
}

/**
 * The logo component in the navbar that links to the homepage
 * @group Navbar
 */
export const NavbarLogo = ({ href = '/' }: NavbarLogoProps): JSX.Element => {
    return (
        <Link href={href}>
            <Image
                src="/assets/images/head.png"
                alt="Polly head"
                width={128}
                height={128}
                className="w-10 sm:w-12 md:w-16 lg:w-20"
            />
        </Link>
    );
};