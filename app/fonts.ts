import localFont from 'next/font/local';
import { Poppins } from 'next/font/google';

export const headingFont = localFont({
  src: [
    {
      path: '../fonts/TTF/PerfectlyNineties-Regular.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/TTF/PerfectlyNineties-RegularItalic.ttf',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/TTF/PerfectlyNineties-Bold.ttf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/TTF/PerfectlyNineties-BoldItalic.ttf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/TTF/PerfectlyNineties-Black.ttf',
      weight: '900',
      style: 'normal',
    },
    {
      path: '../fonts/TTF/PerfectlyNineties-Semibold.ttf',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../fonts/TTF/PerfectlyNineties-Extrabold.ttf',
      weight: '800',
      style: 'normal',
    }
  ],
  variable: '--font-perfectly-nineties',
});

export const bodyFont = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});
