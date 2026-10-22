import type { Meta, StoryObj } from '@storybook/nextjs-vite';
 
import { MainNav } from '@/EngineDS/Organisms/MainNav/MainNav';
 
const meta = {
  title: 'Engine DS/Organisms/MainNav',
  component: MainNav,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof MainNav>;
 
export default meta;
// 👇 Type helper to reduce boilerplate 
type Story = StoryObj<typeof meta>;

// 👇 A story named Primary that renders `<Button primary label="Button" />`
export const Initial: Story = {};