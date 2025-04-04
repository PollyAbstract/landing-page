import localFont from 'next/font/local';

/**
 * TT Trailers ExtraBold font configuration
 * @group Fonts
 */
export const ttTrailersExtraBold = localFont({
  src: '../../public/assets/fonts/TT_Trailers-ExtraBold.woff2',
  variable: '--font-tt-trailers',
  weight: '800',
  display: 'swap',
  fallback: ['Arial Black', 'sans-serif'],
  preload: true,
});

/**
 * Fobble Regular font configuration
 * @group Fonts
 */
export const fobbleRegular = localFont({
  src: '../../public/assets/fonts/Fobble-Regular.woff2',
  variable: '--font-fobble',
  weight: '400',
  display: 'swap',
  fallback: ['Arial', 'sans-serif'],
  preload: true,
});

/**
 * Font variable classes to be applied to HTML element
 */
export const fontVariables = `${ttTrailersExtraBold.variable} ${fobbleRegular.variable}`;