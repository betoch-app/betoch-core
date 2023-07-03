import { Meta, StoryFn } from "@storybook/react";

import SpinnerComponent from "./GenericSpinner";

export default {
  component: SpinnerComponent,
  decorators: [],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  title: "Betoch/Common/components",
} as Meta<typeof SpinnerComponent>;

const Template: StoryFn<typeof SpinnerComponent> = (args: any) => (
  <SpinnerComponent {...args} />
);
export const SpinnerWrapper = Template.bind({});
