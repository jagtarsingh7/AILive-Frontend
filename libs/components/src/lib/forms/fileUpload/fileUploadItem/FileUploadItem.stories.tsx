import styled from '@emotion/styled';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ThemingProps } from '@chakra-ui/react';

import FileUploadItem from './FileUploadItem';

export default {
  component: FileUploadItem,
  title: 'Forms/File Upload/FileUploadItem',
  decorators: [
    (Story) => (
      <Wrapper>
        <Story />
      </Wrapper>
    ),
  ],
  argTypes: {
    onDelete: { action: 'delete' },
  },
  parameters: {
    docs: {
      description: {
        component:
          'This component is a part of `FileUpload` component that includes `FileDropzone`',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=1175%3A100366',
    },
  },
} as ComponentMeta<typeof FileUploadItem>;

type StoryProps = typeof FileUploadItem & ThemingProps<'FileUploadItem'>;

const Template: ComponentStory<StoryProps> = (args) => {
  return <FileUploadItem {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  fileName: 'Boiler Data.csv',
  fileSize: 200,
  lastModified: 7777,
};

export const WithError = Template.bind({});
WithError.args = {
  ...Primary.args,
  errors: [
    'One or more tag names is duplicated. Please ensure that each tag name is unique.',
  ],
};

const Wrapper = styled.main`
  width: 512px;
`;
