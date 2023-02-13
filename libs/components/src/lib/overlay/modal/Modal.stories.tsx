import { ComponentStory, ComponentMeta } from '@storybook/react';
import { getThemingArgTypes } from '@chakra-ui/storybook-addon';
import theme from '../../../theme';

// Main Component
import Modal from './Modal';

// Template
import { InfoOutlineIcon } from '@chakra-ui/icons';
import FormControl from '../../forms/formControl/FormControl';
import Input from '../../forms/input/Input';
import ButtonGroup from '../../forms/button/buttonGroup/ButtonGroup';
import Button from '../../forms/button/Button';
import Textarea from '../../forms/textarea/Textarea';
import CircleIcon from '../../layout/featured-icons/featured-circle-icon/FeaturedCircleIcon';
import { Stack, useDisclosure as useModal } from '../../../index';

export default {
  component: Modal,
  title: 'Overlay/Modal',
  ...getThemingArgTypes(theme, 'Modal'),
  parameters: {
    docs: {
      description: {
        component:
          'More information about the usage of this component can be found on [Chakra Docs](https://chakra-ui.com/docs/components/modal).',
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/rZ85ug2cOmQQOqg8G6Uzmx/Canvass-Library-(v0.1)?node-id=172%3A4293',
    },
  },
} as ComponentMeta<typeof Modal>;

const ModalTemplate: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Close />
          <Modal.Header>
            <Modal.Title>Lorem ipsum</Modal.Title>
            <Modal.Description>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse quas
              saepe odit mollitia officia expedita est.
            </Modal.Description>
          </Modal.Header>
          <Modal.Body>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem
            porro error laboriosam magni ducimus labore iure impedit? Numquam
            consequatur maiores, at, architecto neque doloribus in,
            reprehenderit sunt laboriosam possimus eaque! Dolores ipsa et
            consequatur minus numquam, at voluptatem accusamus iusto nobis
            aspernatur alias iste. Aliquid neque recusandae veritatis minima!
            Laudantium beatae fugiat nostrum facere quis consequatur quo
            voluptatem nulla nemo? Velit, odit asperiores eligendi aliquam
            adipisci assumenda. Accusantium atque, ad ullam omnis non similique
            illo doloremque. Omnis itaque ab totam consequatur, dignissimos,
            sint tempore est earum natus ipsum debitis praesentium. Itaque optio
            debitis quae sapiente quaerat fugiat, provident qui, odit
            perferendis laboriosam laborum voluptates possimus labore doloremque
            deserunt minus inventore magnam cumque suscipit a quas est aperiam
            consequatur rerum. Dolor! Dolores, velit recusandae, provident
            repellendus ex voluptatem repellat, corporis sint architecto non
            numquam aliquam ut facilis accusamus voluptatum voluptates incidunt
            neque quis et reiciendis odit officia? Minima quaerat omnis ut?
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};
export const Simple = ModalTemplate.bind({});
Simple.args = {};

const CreateProjectTemplate: ComponentStory<typeof Modal> = (args) => {
  const { isOpen, onOpen, onClose } = useModal();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>
      <Modal {...args} isOpen={isOpen} onClose={onClose}>
        <Modal.Overlay />
        <Modal.Content>
          <Modal.Close />
          <Modal.Header>
            <CircleIcon
              colorScheme="primary"
              icon={<InfoOutlineIcon />}
              size="md"
            />
          </Modal.Header>
          <Modal.Body>
            <Stack gap={6}>
              <div>
                <Modal.Title>Create a new project</Modal.Title>
                <Modal.Description>
                  Once you create a project, you can select a Canvass solution
                  to solve your use-case.
                </Modal.Description>
              </div>
              <FormControl>
                <FormControl.Label>Name</FormControl.Label>
                <Input placeholder="Enter project name" />
              </FormControl>

              <FormControl>
                <FormControl.Label>Description (optional)</FormControl.Label>
                <Textarea placeholder="Enter a description..." />
              </FormControl>
            </Stack>
          </Modal.Body>
          <Modal.Footer>
            <ButtonGroup w="full">
              <Button
                flex={1}
                colorScheme="gray"
                variant="outline"
                onClick={onClose}
              >
                Close
              </Button>
              <Button flex={1} onClick={onClose}>
                Save
              </Button>
            </ButtonGroup>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </>
  );
};

export const CreateProject = CreateProjectTemplate.bind({});
CreateProject.args = {};
