import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // SHE IS AI dominant palette
        sage: {
          DEFAULT: '#6E8F7A',
          deep: '#4F6F5A',
          tint: '#AFC4B6',
          wash: '#E9EFEB',
        },
        gold: {
          DEFAULT: '#C9A24D',
          muted: '#B18A3A',
        },
        neutral: {
          warm: '#E6E1D8',
          paper: '#FBFAF7',
          ink: '#1A1B20',
        },
        // DivergenThinking accent (used in lockup, links, callouts)
        divergen: {
          DEFAULT: '#2B4FA8',
          deep: '#1E3A7A',
          tint: '#D6DFF1',
          pop: '#F5C518', // the "pop of pop" — warm yellow accent
        },
      },
      fontFamily: {
        serif: ['Georgia', 'ui-serif', 'serif'],
        sans: [
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      maxWidth: {
        prose: '68ch',
        page: '72rem',
      },
      boxShadow: {
        soft: '0 1px 2px rgba(26, 27, 32, 0.04), 0 8px 24px rgba(26, 27, 32, 0.06)',
      },
      backgroundImage: {
        'sage-gradient':
          'linear-gradient(135deg, #E9EFEB 0%, #AFC4B6 60%, #6E8F7A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
