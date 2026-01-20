import type { Meta, StoryObj } from '@storybook/react';
import { PrimaryButton } from './PrimaryButton';

const meta: Meta<typeof PrimaryButton> = {
  title: 'Components/PrimaryButton',
  component: PrimaryButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
    },
    iconPosition: {
      control: 'select',
      options: ['start', 'end'],
    },
    disabled: {
      control: 'boolean',
    },
    loading: {
      control: 'boolean',
    },
    fullWidth: {
      control: 'boolean',
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'اشترك الآن',
    variant: 'primary',
    size: 'md',
  },
};

export const Secondary: Story = {
  args: {
    children: 'معرفة المزيد',
    variant: 'secondary',
    size: 'md',
  },
};

export const Outline: Story = {
  args: {
    children: 'تواصل معنا',
    variant: 'outline',
    size: 'md',
  },
};

export const Small: Story = {
  args: {
    children: 'زر صغير',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: 'زر كبير',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: 'غير متاح',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'جاري الإرسال',
    loading: true,
  },
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

export const WithIconStart: Story = {
  args: {
    children: 'ابدأ الآن',
    icon: <ArrowIcon />,
    iconPosition: 'start',
  },
};

export const WithIconEnd: Story = {
  args: {
    children: 'المتابعة',
    icon: <ArrowIcon />,
    iconPosition: 'end',
  },
};

export const FullWidth: Story = {
  args: {
    children: 'انضم للمجلس',
    fullWidth: true,
  },
  decorators: [
    (Story) => (
      <div style={{ width: '400px' }}>
        <Story />
      </div>
    ),
  ],
};

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-4 p-8 bg-cream-50">
      <div className="flex gap-4 items-center">
        <PrimaryButton variant="primary">Primary</PrimaryButton>
        <PrimaryButton variant="secondary">Secondary</PrimaryButton>
        <PrimaryButton variant="outline">Outline</PrimaryButton>
      </div>
      <div className="flex gap-4 items-center">
        <PrimaryButton size="sm">Small</PrimaryButton>
        <PrimaryButton size="md">Medium</PrimaryButton>
        <PrimaryButton size="lg">Large</PrimaryButton>
      </div>
      <div className="flex gap-4 items-center">
        <PrimaryButton disabled>Disabled</PrimaryButton>
        <PrimaryButton loading>Loading</PrimaryButton>
      </div>
    </div>
  ),
};

export const DarkMode: Story = {
  render: () => (
    <div className="dark bg-forest-800 p-8 rounded-lg">
      <div className="flex gap-4">
        <PrimaryButton variant="primary">Primary</PrimaryButton>
        <PrimaryButton variant="secondary">Secondary</PrimaryButton>
        <PrimaryButton variant="outline">Outline</PrimaryButton>
      </div>
    </div>
  ),
};
