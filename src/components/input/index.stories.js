// Button.stories.js

import React from 'react';
import Input from '.';

export default {
    title: 'Components/Input',
    component: Input,
}

const Template = (args) => <Input {...args} />;

// Each story then reuses that template
export const Primary = Template.bind({});
Primary.args = {
    label: 'Primary label'
};

export const WithError = Template.bind({});
WithError.args = {
    errors: ['Main Error']
};
