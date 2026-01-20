export const theme = {
  colors: {
    primary: {
      cream50: '#FDFBF7',
      cream100: '#FAF7F0',
      cream200: '#F5EFE3',
    },
    accent: {
      terracotta400: '#D4845A',
      terracotta500: '#C4704B',
      terracotta600: '#A85A3A',
    },
    dark: {
      forest600: '#2D4A3E',
      forest700: '#1F352C',
      forest800: '#142420',
    },
    cta: {
      amber400: '#FBBF24',
      amber500: '#F59E0B',
      amber600: '#D97706',
    },
  },
  fonts: {
    heading: "'Playfair Display', Georgia, serif",
    body: "'Cairo', 'Tajawal', sans-serif",
  },
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
  },
} as const;

export type Theme = typeof theme;
