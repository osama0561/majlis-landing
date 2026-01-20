import type { Preview } from '@storybook/react';
import '../src/index.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      default: 'cream',
      values: [
        {
          name: 'cream',
          value: '#FDFBF7',
        },
        {
          name: 'dark',
          value: '#142420',
        },
      ],
    },
    layout: 'centered',
  },
  globalTypes: {
    direction: {
      name: 'Direction',
      description: 'Text direction',
      defaultValue: 'rtl',
      toolbar: {
        icon: 'globe',
        items: ['ltr', 'rtl'],
      },
    },
  },
};

export default preview;
