import type { Meta, StoryObj } from '@storybook/angular';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
  component: ButtonComponent,
  title: 'ButtonComponent',
};
export default meta;
type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button>
      Click Me
    </button>
    `,
  }),
};

export const Accent: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button [appearence]="'accent'">
      Click Me
    </button>
    `,
  }),
};

export const Secondary: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button [appearence]="'secondary'">
      Click Me
    </button>
    `,
  }),
};

export const Destructive: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button [appearence]="'destructive'">
      Click Me
    </button>
    `,
  }),
};

export const Flat: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button [appearence]="'flat'">
      Click Me
    </button>
    `,
  }),
};

export const Outline: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button [appearence]="'outline'">
      Click Me
    </button>
    `,
  }),
};

export const Sizes: Story = {
  tags: ['sizes'],
  name: 'Sizes',
  args: {},
  render: (args) => ({
    props: args,
    template: `
      <div style="display: flex; gap: 12px; flex-direction:column;">
        <div style="display: flex; gap: 12px;">
          <button cmp-button [size]="'l'">Large</button>
          <button cmp-button>Medium</button>
          <button cmp-button [size]="'s'">Small</button>
          <button cmp-button [size]="'xs'">Extra Small</button>
        </div>
        <div style="display: flex; gap: 12px;">
          <button cmp-button [appearence]="'accent'" [size]="'l'">Large</button>
          <button cmp-button [appearence]="'accent'">Medium</button>
          <button cmp-button [appearence]="'accent'" [size]="'s'">Small</button>
          <button cmp-button [appearence]="'accent'" [size]="'xs'">Extra Small</button>
        </div>
        <div style="display: flex; gap: 12px;">
          <button cmp-button [appearence]="'secondary'" [size]="'l'">Large</button>
          <button cmp-button [appearence]="'secondary'">Medium</button>
          <button cmp-button [appearence]="'secondary'" [size]="'s'">Small</button>
          <button cmp-button [appearence]="'secondary'" [size]="'xs'">Extra Small</button>
        </div>
        <div style="display: flex; gap: 12px;">
          <button cmp-button [appearence]="'destructive'" [size]="'l'">Large</button>
          <button cmp-button [appearence]="'destructive'">Medium</button>
          <button cmp-button [appearence]="'destructive'" [size]="'s'">Small</button>
          <button cmp-button [appearence]="'destructive'" [size]="'xs'">Extra Small</button>
        </div>
         <div style="display: flex; gap: 12px;">
          <button cmp-button [appearence]="'flat'" [size]="'l'">Large</button>
          <button cmp-button [appearence]="'flat'">Medium</button>
          <button cmp-button [appearence]="'flat'" [size]="'s'">Small</button>
          <button cmp-button [appearence]="'flat'" [size]="'xs'">Extra Small</button>
        </div>
         <div style="display: flex; gap: 12px;">
          <button cmp-button [appearence]="'outline'" [size]="'l'">Large</button>
          <button cmp-button [appearence]="'outline'">Medium</button>
          <button cmp-button [appearence]="'outline'" [size]="'s'">Small</button>
          <button cmp-button [appearence]="'outline'" [size]="'xs'">Extra Small</button>
        </div>
      </div>
    `,
  }),
};

export const IconStart: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button>
     <i icon-start class="fa fa-search" aria-hidden="true"></i>
      Search
    </button>
    `,
  }),
};

export const IconEnd: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button>
      Open
      <i icon-end class="fa fa-angle-down" aria-hidden="true"></i>
    </button>
    `,
  }),
};

export const OnlyIcon: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button>
      <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
    </button>
    `,
  }),
};

export const CircleShape: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
    <button cmp-button shape="circle">
      <i class="fa fa-sort-amount-desc" aria-hidden="true"></i>
    </button>
    `,
  }),
};

export const Disabled: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; gap: 12px;">
          <button cmp-button [disabled]="true" [size]="'l'">Large</button>
          <button cmp-button [disabled]="true">Medium</button>
          <button cmp-button [disabled]="true" [size]="'s'">Small</button>
          <button cmp-button [disabled]="true" [size]="'xs'">Extra Small</button>
        </div>
    `,
  }),
};

export const Loading: Story = {
  args: {},
  render: (args) => ({
    props: args,
    template: `
        <div style="display: flex; gap: 12px;">
          <button cmp-button loading="true" [size]="'l'">Large</button>
          <button cmp-button loading="true">Medium</button>
          <button cmp-button loading="true" [size]="'s'">Small</button>
          <button cmp-button loading="true" [size]="'xs'">Small</button>
        </div>
    `,
  }),
};
