import { Meta, StoryFn } from "@storybook/react";

import SwiperCardComponent from "./SwiperCard";

export default {
  component: SwiperCardComponent,
  decorators: [],
  parameters: {
    layout: "fullscreen",
    viewport: {
      defaultViewport: "mobile",
    },
  },
  title: "Betoch/Authentication/components",
} as Meta<typeof SwiperCardComponent>;

const Template: StoryFn<typeof SwiperCardComponent> = (args: any) => (
  <SwiperCardComponent {...args} />
);
export const SwiperCard = Template.bind({});
