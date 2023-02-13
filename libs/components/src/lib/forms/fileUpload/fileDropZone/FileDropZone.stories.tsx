import { ComponentStory, ComponentMeta } from '@storybook/react';
import FileDropZone from './FileDropZone';

export default {
  component: FileDropZone,
  title: 'Forms/File Upload/File DropZone',
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [React-Dropzone](https://react-dropzone.js.org/).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1175%3A100312',
    },
  },
} as ComponentMeta<typeof FileDropZone>;

const Template: ComponentStory<typeof FileDropZone> = (args) => (
  <FileDropZone {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  isDisabled: false,
  labels: {
    clickToUploadText: 'Click to upload',
    dragDropText: 'or drag and drop',
    uploadTypesText: '.CSV files only',
  },
};
