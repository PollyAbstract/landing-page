'use client';
import Image from 'next/image';
import type {JSX} from 'react';

/**
 * Animated component displaying Pax and Polly penguins with a beating heart
 * @group Core
 */
export const PenguinCouple = (): JSX.Element => {
    return (
        <div className="fixed bottom-0 left-0 w-full flex justify-center items-end z-20"
             style={{ visibility: 'visible' }}>
            <div className="relative w-full flex justify-center">
                {/* Pax Penguin - on left */}
                <div className="absolute bottom-0 right-1/2 mr-2 sm:mr-4 md:mr-6 lg:mr-8 slide-right">
                    <Image
                        src="/assets/images/pax.png"
                        alt="Pax"
                        width={450}
                        height={600}
                        className="w-48 sm:w-56 md:w-64 lg:w-80"
                        priority
                    />
                </div>

                {/* Beating Heart */}
                <div className="absolute bottom-24 sm:bottom-28 md:bottom-32 lg:bottom-36 heart-beat z-30">
                    <Image
                        src="/assets/images/heart.png"
                        alt="Heart"
                        width={150}
                        height={150}
                        className="w-20 sm:w-24 md:w-28 lg:w-32"
                        priority
                    />
                </div>

                {/* Polly Penguin - on right */}
                <div className="absolute bottom-0 left-1/2 ml-2 sm:ml-4 md:ml-6 lg:ml-8 slide-left">
                    <Image
                        src="/assets/images/polly.png"
                        alt="Polly"
                        width={450}
                        height={600}
                        className="w-48 sm:w-56 md:w-64 lg:w-80"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};