import type { Preview } from '@storybook/react';
import '../src/styles/scss/main.scss';
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  viewport: {
    viewports: {
      mobile: {
        name: 'Mobile',
        styles: {
          height: '620px',
          width: '375px',
        },
        type: 'mobile',
      },
      mobileLarge: {
        name: 'MobileLarge',
        styles: {
          height: '896px',
          width: '414px',
        },
        type: 'mobile',
      },
      ipad: {
        name: 'iPad',
        styles: {
          height: '1024px',
          width: '769px',
        },
        type: 'tablet',
      },
      ipadPro: {
        name: 'iPad Pro',
        styles: {
          height: '1366px',
          width: '1024px',
        },
        type: 'tablet',
      },
      desktopSmall: {
        name: 'Desktop Small',
        styles: {
          height: '768px',
          width: '1200px',
        },
        type: 'desktop',
      },
      desktopLarge: {
        name: 'Desktop Large',
        styles: {
          height: '1080px',
          width: '1920px',
        },
        type: 'desktop',
      },
      kioskStandard: {
        name: 'Kiosk - Standard',
        styles: {
          height: '1920px',
          width: '1080px',
        },
        type: 'desktop',
      },
    },
  },
};

const preview: Preview = {
  parameters: parameters,
};

export default preview;
