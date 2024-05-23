import type { Meta, StoryObj } from '@storybook/react'

import { Typography } from './typography'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/UI/Typography',
} satisfies Meta<typeof Typography>

export default meta
type Story = StoryObj<typeof meta>

export const HeaderH1: Story = {
  args: {
    as: 'h1',
    children: 'Header H1',
    variant: 'h1',
  },
}

export const HeaderH2: Story = {
  args: {
    as: 'h2',
    children: 'Header H2',
    variant: 'h2',
  },
}
export const HeaderH3: Story = {
  args: {
    as: 'h3',
    children: 'Header H3',
    variant: 'h3',
  },
}
export const HeaderH4: Story = {
  args: {
    as: 'h4',
    children: 'Header H4',
    variant: 'h4',
  },
}
export const Body1: Story = {
  args: {
    children: 'Body 1',
    variant: 'body1',
  },
}
export const Subtitle1: Story = {
  args: {
    as: 'span',
    children: 'Subtitle 1',
    variant: 'subtitle1',
  },
}
export const Body2: Story = {
  args: {
    children: 'Body 2',
    variant: 'body2',
  },
}
export const Subtitle2: Story = {
  args: {
    as: 'span',
    children: 'Subtitle 2',
    variant: 'subtitle2',
  },
}
export const Caption: Story = {
  args: {
    as: 'span',
    children: 'Caption',
    variant: 'caption',
  },
}
export const Overline: Story = {
  args: {
    children: 'Overline',
    variant: 'overline',
  },
}
export const Link1: Story = {
  args: {
    as: 'a',
    children: 'Link 1',
    variant: 'link1',
  },
}
export const Link2: Story = {
  args: {
    as: 'a',
    children: 'Link 2',
    variant: 'link2',
  },
}
