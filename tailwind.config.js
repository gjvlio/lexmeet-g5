/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // LexMeet palette (from the Figma color-palette section)
        ink:    '#1C1F11',
        deep:   '#2B2D19',
        forest: '#3D4223',
        olive:  '#555B2F',
        sage:   '#949A6A',
        mist:   '#DDDEC6',
        cream:  '#F0F1E4',
      },
      fontFamily: {
        // Spectral = display/headings, IBM Plex Sans = body/UI
        display: ['Spectral', 'Georgia', 'serif'],
        sans:    ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glass: '0 12px 40px rgba(28,31,17,0.14)',
        pill:  '0 6px 14px rgba(28,31,17,0.25)',
        card:  '0 14px 36px rgba(0,0,0,0.22)',
      },
      backdropBlur: {
        glass: '24px',
      },
      backgroundImage: {
        'hero-fade': 'linear-gradient(180deg, #1C1F11 0%, #3D4223 100%)',
        'services-fade': 'linear-gradient(180deg, #F0F1E4 0%, #DDDEC6 100%)',
        'practice-fade': 'linear-gradient(180deg, #DDDEC6 0%, #F0F1E4 100%)',
        'everyday-fade': 'linear-gradient(180deg, #F0F1E4 0%, #DDDEC6 100%)',
        'footer-fade': 'linear-gradient(180deg, #2B2D19 0%, #1C1F11 100%)',
        'olive-pill': 'linear-gradient(90deg, #555B2F 0%, #2B2D19 100%)',
        'service-card': 'linear-gradient(180deg, rgba(85,91,47,0.96) 0%, rgba(43,45,25,0.98) 100%)',
      },
    },
  },
  plugins: [],
};
