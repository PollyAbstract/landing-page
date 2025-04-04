'use client';
import type {JSX} from 'react';
import {NavbarLogo} from './NavbarLogo';
import {NavbarActions} from './NavbarActions';

/**
 * Props for the Navbar component
 * @group Layout
 */
export interface NavbarProps {
  /** URL for the buy button, defaults to the one in NavbarActions */
  buyUrl?: string;
}

/**
 * The main navigation bar component for the site
 * @group Layout
 */
export const Navbar = ({ buyUrl }: NavbarProps): JSX.Element => {
  return (
    <div className="p-4 w-full fixed top-0 sm:p-6 md:p-8 lg:p-10 xl:p-12 z-10">
      <nav className="flex justify-between items-center">
        <NavbarLogo />
        <NavbarActions buyUrl={buyUrl} />
      </nav>
    </div>
  );
};