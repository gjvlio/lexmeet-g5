/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // LexMeet palette — canonical 9-step scale (docs/NAMING_CONVENTIONS.md)
        'carbon-black':  '#1D1F10',
        'charcoal-brown': '#2A2C19',
        'dark-khaki':    '#3C4222',
        'olive-leaf':    '#545A2F',
        'dusty-olive':   '#6F7742',
        'palm-leaf':     '#959A6B',
        'sage-mist':     '#BCC199',
        'linen-olive':   '#DCDFC6',
        parchment:       '#F0F1E4',

        // legacy short aliases — existing components reference these,
        // kept in sync with the scale above instead of rewriting every usage
        ink:    '#1D1F10', // = carbon-black
        deep:   '#2A2C19', // = charcoal-brown
        forest: '#3C4222', // = dark-khaki
        olive:  '#545A2F', // = olive-leaf
        sage:   '#959A6B', // = palm-leaf
        mist:   '#DCDFC6', // = linen-olive
        cream:  '#F0F1E4', // = parchment
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
        'hero-fade': 'linear-gradient(180deg, #1D1F10 0%, #3C4222 100%)',
        'services-fade': 'linear-gradient(180deg, #F0F1E4 0%, #DCDFC6 100%)',
        'practice-fade': 'linear-gradient(180deg, #DCDFC6 0%, #F0F1E4 100%)',
        'everyday-fade': 'linear-gradient(180deg, #F0F1E4 0%, #DCDFC6 100%)',
        'footer-fade': 'linear-gradient(180deg, #2A2C19 0%, #1D1F10 100%)',
        'olive-pill': 'linear-gradient(90deg, #545A2F 0%, #2A2C19 100%)',
        'service-card': 'linear-gradient(180deg, rgba(84,90,47,0.96) 0%, rgba(42,44,25,0.98) 100%)',
      },
    },
  },
  plugins: [],
};
