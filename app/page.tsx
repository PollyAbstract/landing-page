'use client';
import type { JSX } from 'react';
import { Background, Navbar, Hero, PenguinCouple } from '~components';

/**
 * Home page component that displays the main landing page
 */
export function Home(): JSX.Element {
  return (
    <Background>
      <Navbar />
      <Hero />
      <PenguinCouple />
    </Background>
  );
}

export default Home;