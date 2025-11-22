import type { Meta, StoryObj } from '@storybook/vue3';
import App from './App.vue';

const meta: Meta<typeof App> = {
  title: 'App',
  component: App,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof App>;

export const Default: Story = {
  render: () => ({
    components: { App },
    template: '<App />',
  }),
};
