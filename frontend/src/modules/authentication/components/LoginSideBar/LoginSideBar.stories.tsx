import { Meta, StoryFn } from '@storybook/react';

import LoginSideBarComponent from './LoginSideBar';

export default {
  component: LoginSideBarComponent,
  decorators: [],
  parameters: {
    layout: 'fullscreen',
    viewport: {
      defaultViewport: 'mobile',
    },
  },
  title: 'Betoch/Authentication/components',
} as Meta<typeof LoginSideBarComponent>;

const Template: StoryFn<typeof LoginSideBarComponent> = (args: any) => <LoginSideBarComponent />;
export const LoginSideBar = Template.bind({});
