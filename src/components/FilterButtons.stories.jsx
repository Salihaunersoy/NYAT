import React from 'react';
import FilterButtons from './FilterButtons';

export default {
  title: 'Components/FilterButtons',
  component: FilterButtons,
};

const Template = (args) => <FilterButtons {...args} />;

export const AllActive = Template.bind({});
AllActive.args = {
  currentFilter: 'all',
  onFilterChange: (val) => alert(`Filtre seçildi: ${val}`)
};
