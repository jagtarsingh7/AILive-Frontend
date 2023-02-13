import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileUpload from './FileUpload';

export default {
  component: FileUpload,
  title: 'Forms/File Upload/File Upload',
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [React-Dropzone](https://react-dropzone.js.org/).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1175%3A101149',
    },
  },
} as ComponentMeta<typeof FileUpload>;

const Template: ComponentStory<typeof FileUpload> = () => <FileUpload />;

export const Primary = Template.bind({});
Primary.args = {};
