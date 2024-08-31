import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

import { expect } from '@storybook/jest';
import { within } from '@storybook/testing-library';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {
    loading: true,
  },
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button [size]="'l'">
      Click Me
    </button>
    `,
  }),
};

export const Heading: Story = {
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/button works!/gi)).toBeTruthy();
  },
};
