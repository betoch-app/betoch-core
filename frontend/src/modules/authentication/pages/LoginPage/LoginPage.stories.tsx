import { Meta, StoryFn } from "@storybook/react";

import LoginPageComponent from "./LoginPage";

export default {
  component: LoginPageComponent,
  decorators: [],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  title: "Betoch/Authentication/pages",
} as Meta<typeof LoginPageComponent>;

const Template: StoryFn<typeof LoginPageComponent> = (args: any) => (
  <LoginPageComponent {...args} />
);
export const LoginPage = Template.bind({});
