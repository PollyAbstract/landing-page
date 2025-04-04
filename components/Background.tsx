'use client';
import type {JSX, ReactNode} from 'react';

/**
 * Props for the Background component
 * @group Core
 */
export interface BackgroundProps {
  /** Child components to be rendered inside the background */
  children: ReactNode;
}

/**
 * A layout wrapper component that provides the main arctic background for the site
 * @group Core
 */
export const Background = ({ children }: BackgroundProps): JSX.Element => {
  return (
    <main 
      className="h-full bg-left lg:bg-center flex justify-center items-center overflow-hidden"
      style={{
        background: `url('./assets/images/background_arctic.png')`,
        backgroundSize: 'cover',
        position: 'relative',
        minHeight: '100vh',
      }}
    >
      {children}
    </main>
  );
};