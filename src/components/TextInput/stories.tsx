import { Story, Meta } from '@storybook/react'
import TextInput, { TextFieldProps } from '.'

export default {
  title: 'TextInput',
  component: TextInput,
  args: {
    initialValue: 'teste'
  }
} as Meta

export const Default: Story<TextFieldProps> = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextInput {...args} />
  </div>
)
