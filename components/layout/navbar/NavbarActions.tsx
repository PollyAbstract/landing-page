'use client';
import type {JSX} from 'react';
import Link from 'next/link';
import {Button} from '~components/ui';

/**
 * Props for the NavbarActions component
 * @group Navbar
 */
export interface NavbarActionsProps {
    /** The URL to navigate to when clicking the buy button */
    buyUrl?: string;
}

/**
 * The actions section of the navbar, containing the buy button
 * @group Navbar
 */
export const NavbarActions = ({
    buyUrl = 'https://dexscreener.com/abstract/0x987cf44f3f5d854ec0703123d7fd003a8b56ebb4',
}: NavbarActionsProps): JSX.Element => {
    return (
        <Link
            href={buyUrl}
            className="cursor-pointer"
            target="_blank"
        >
            <Button>
                BUY $POLLY
            </Button>
        </Link>
    );
};