'use client';
import type {JSX} from 'react';

/**
 * The main hero section of the homepage featuring Polly's introduction
 * @group Core
 */
export const Hero = (): JSX.Element => {
    return (
        <header className="flex flex-col items-center text-center w-4/5 md:w-1/2 m-auto z-10">
            <p className="text-typography-inverse text-4xl sm:text-5xl md:text-6xl lg:text-7xl">Hey there, I&apos;m</p>
            <h1
                className="text-white uppercase text-center text-shadow-drop"
                style={{
                    lineHeight: 'clamp(6rem, 35vw, 13rem)',
                    width: '100%',
                    maxWidth: '1000px',
                    fontSize: 'clamp(6rem, 40vw, 15rem)',
                    letterSpacing: '-0.02em',
                    WebkitTextStroke: 'clamp(4px, 1vw, 8px) #000000',
                    paintOrder: 'stroke fill',
                    margin: '0 auto',
                    textAlign: 'center',
                }}
            >
                Polly
            </h1>
            <p className="w-4/5 m-auto text-typography-inverse text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                The official wife of Pax
            </p>
        </header>
    );
};