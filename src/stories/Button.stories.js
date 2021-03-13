import React from 'react';

import { Button } from '../components/Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'transform' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant:"primary"
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant:"secondary"
};

export const Disabled= Template.bind({});
Disabled.args={
    disabled:true
}
export const PrimaryDisabled= Template.bind({});
PrimaryDisabled.args={
    disabled:true,
    variant:"primary"
}


export const Small= Template.bind({});
Small.args={
    size:"small"
}

export const Large= Template.bind({});
Large.args={
    size:"large"
}

export const Children= Template.bind({});
Children.args={
    children:"Button"
}

