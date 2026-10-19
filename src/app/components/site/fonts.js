import { Bricolage_Grotesque, Instrument_Serif, Manrope } from 'next/font/google';

const displayFont = Bricolage_Grotesque({ subsets: ['latin'], axes: ['opsz', 'wdth'], variable: '--font-display' });
const serifFont = Instrument_Serif({ subsets: ['latin'], weight: '400', style: ['normal', 'italic'], variable: '--font-serif' });
const bodyFont = Manrope({ subsets: ['latin'], variable: '--font-body' });

export const fontClasses = `${displayFont.variable} ${serifFont.variable} ${bodyFont.variable}`;
