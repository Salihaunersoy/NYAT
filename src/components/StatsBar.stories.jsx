import React from 'react';
import StatsBar from './StatsBar';

export default {
  title: 'Components/StatsBar',
  component: StatsBar,
};

const Template = (args) => <StatsBar {...args} />;

export const Ornek = Template.bind({});
Ornek.args = {
  total: 10,
  completed: 4
};
