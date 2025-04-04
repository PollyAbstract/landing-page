'use client';
import type {JSX, ReactNode} from 'react';

/**
 * Props for the Button component
 * @group UI
 */
export interface ButtonProps {
    /** Content to be displayed inside the button */
    children: ReactNode;
    /** Additional CSS classes */
    className?: string;
    /** Click event handler */
    onClick?: () => void;
    /** Background color (defaults to #FCB0FF) */
    background?: string;
}

/**
 * A styled button component with customizable appearance
 * @group UI
 */
export const Button = ({
    children,
    className = '',
    onClick,
    background = '#FCB0FF',
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={`
        cursor-pointer hover-scale
        flex justify-center items-center border-2 sm:border-3 lg:border-4 border-typography-inverse
        text-typography-inverse font-bold text-2xl sm:text-3xl md:text-4xl
        py-0.5 px-3 rounded-md sm:py-1 sm:px-5 rounded-lg md:py-1 md:px-6 
        ${className}
      `}
            style={{ background }}
            onClick={onClick}
        >
            {children}
        </button>
    );
};