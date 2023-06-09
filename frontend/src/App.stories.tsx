import { Meta, StoryFn } from '@storybook/react';

import AppComponent from './App';

export default {
  component: AppComponent,
  decorators: [],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  title: 'Betoch/common/components',
} as Meta<typeof AppComponent>;

const Template: StoryFn<typeof AppComponent> = (args: any) => <AppComponent />;
export const App = Template.bind({});
