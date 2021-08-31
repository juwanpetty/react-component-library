import { Icon } from 'components/index';
import Button from './Button';

export default {
  title: 'Design System/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: 'Button',
  size: 'medium',
};

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  size: 'medium',
  buttonIcon: <Icon icon="menu" />,
};

ButtonWithIcon.storyName = 'Button with icon';

export const ButtonWithLeadingIcon = Template.bind({});
ButtonWithLeadingIcon.args = {
  label: 'Button',
  size: 'medium',
  leadingIcon: <Icon icon="search" />,
};

ButtonWithLeadingIcon.storyName = 'Button with leading icon';
