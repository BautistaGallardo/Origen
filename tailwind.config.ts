import type { Config } from 'tailwindcss'
import settings from './settings.json'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        Custm_primary: settings.colors.Custm_primary,
        Custm_secondary: settings.colors.Custm_secondary,
        Custm_letter: settings.colors.letter,
        'Custm_background-light': settings.colors.Custm_background_light,
      },
      fontFamily: {
        Custm_font: settings.fontFamily.Custm_font,
      },
    },
  },
  plugins: [],
}
export default config
