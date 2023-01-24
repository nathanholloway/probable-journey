import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { HelloWorld } from './HelloWorld';

export default {
  title: 'Components/HelloWorld',
  component: HelloWorld,
} as ComponentMeta<typeof HelloWorld>;

const Template: ComponentStory<typeof HelloWorld> = (args) => <HelloWorld />;

export const Primary = Template.bind({});
