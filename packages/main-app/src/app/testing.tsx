import { useState, useCallback } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import {
  Button,
  IconButton,
  Text,
  Tag,
  Heading,
  Checkbox,
  Toggle,
  Input,
  DropdownMenu,
  FormControl,
  Radio,
  Textarea,
  CheckboxCard,
  Spinner,
  Loading,
  FileDropZone,
  ProgressBar,
  Badge,
  Stack,
  useCheckboxGroup,
  RadioCard,
  useRadioGroup,
  Image,
  Box,
  DatePicker,
  DateRangePicker,
} from '@canvass/components';
import { CircleIcon, FilledCircleIcon } from '@canvass/shared/icons';

import {
  ChevronUpIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  QuestionOutlineIcon,
  EmailIcon,
} from '@chakra-ui/icons';

import { today, now, getLocalTimeZone } from '@internationalized/date';

export function Testing() {
  const [clicked, setClicked] = useState(false);

  const onDrop = useCallback((files: unknown) => {
    alert('Dropped!');
  }, []);

  const solutionNavigatorDropZoneLabels = {
    clickToUploadText: 'Click to upload',
    dragDropText: 'or drag and drop',
    uploadTypesText: '.CSV files only',
  };

  return (
    <Box p={6}>
      <DatePicker
        label="Date Picker"
        granularity="minute"
        minValue={today(getLocalTimeZone())}
        defaultValue={now(getLocalTimeZone())}
        placeholder="Date Input"
        errorMessage="This is an error for the datepicker of the component"
      />
      <br />
      <br />
      <DateRangePicker
        startLabel="Start Time"
        endLabel="End Time"
        granularity="minute"
        minValue={today(getLocalTimeZone())}
        defaultValue={{
          start: now(getLocalTimeZone()),
          end: now(getLocalTimeZone()).add({ days: 3 }),
        }}
        startErrorMessage="This is a range picker start error to be on only one start time side"
        endErrorMessage="This is a range picker end error to be on only one end time side"
      />
      <br />
      <br />
      <br />
      <DropdownMenu closeOnSelect={true}>
        <DropdownMenu.Button
          as={Button}
          variant="outline"
          colorScheme="gray"
          rightIcon={<ChevronUpIcon />}
        >
          Account
        </DropdownMenu.Button>
        <DropdownMenu.List>
          <DropdownMenu.Item>
            <Image
              boxSize="2.5rem"
              borderRadius="full"
              src="https://placekitten.com/100/100"
              mr="12px"
            />
            <span>
              <Heading size="sm" color="gray.700">
                Olivia Rye
              </Heading>
              <Text size="sm" color="gray.500">
                olivia@canvass.io
              </Text>
            </span>
          </DropdownMenu.Item>
          <DropdownMenu.Divider />
          <DropdownMenu.Item icon={<AddIcon />} command="⌘T">
            New Tab
          </DropdownMenu.Item>
          <DropdownMenu.Item icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </DropdownMenu.Item>
          <DropdownMenu.Item icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </DropdownMenu.Item>
          <DropdownMenu.Item icon={<EditIcon />} command="⌘O">
            Open File...
          </DropdownMenu.Item>
        </DropdownMenu.List>
      </DropdownMenu>
      <br />
      <br />
      <Heading>Hello Canvass!</Heading>
      <Text fontWeight="normal">Regular</Text>
      <Text fontWeight="medium">Medium</Text>
      <Text fontWeight="bold">Bold</Text>
      <Text fontWeight="semibold">Semibold</Text>
      <br />
      <br />
      <Button onClick={() => alert("It's clicking")} mr={4}>
        Primary
      </Button>
      <Button onClick={() => null} colorScheme="gray">
        Secondary
      </Button>
      <Button onClick={() => null} mx={4} leftIcon={<CircleIcon />}>
        With left icon
      </Button>
      <Button
        onClick={() => null}
        colorScheme="error"
        rightIcon={<CircleIcon />}
      >
        With right icon
      </Button>
      <Button onClick={() => null} ml={4} loadingText="Loading text" isLoading>
        With right icon
      </Button>
      <br />
      <br />
      <IconButton
        onClick={() => null}
        aria-label="Icon button example"
        icon={<CircleIcon />}
      />
      <IconButton
        onClick={() => null}
        aria-label="Icon button example 2"
        icon={<CircleIcon />}
      />
      <br />
      <br />
      <Toggle
        id="toggle"
        onChange={() => setClicked(!clicked)}
        isChecked={clicked}
      />
      <br />
      <br />
      <Tag>
        <Tag.Label>A Tag example</Tag.Label>
      </Tag>
      <br />
      <Tag>
        <Tag.Label>A Tag Example with a Close Button</Tag.Label>
        <Tag.CloseButton />
      </Tag>
      <br />
      <Tag>
        <Tag.Label>A Tag example with Count</Tag.Label>
        <Tag.Count count={5} />
      </Tag>
      <br />
      <br />
      <Textarea placeholder="This is a placeholder" />
      <br />
      <br />
      <Checkbox />
      <br />
      <br />
      <Input.Group width="fit-content">
        <Input.LeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input placeholder="email@email.com" />
        <Input.RightElement
          pointerEvents="none"
          children={<QuestionOutlineIcon color="gray.300" />}
        />
      </Input.Group>
      <Input.Group width="fit-content">
        <Input.LeftElement
          pointerEvents="none"
          children={<EmailIcon color="gray.300" />}
        />
        <Input placeholder="disabled" isDisabled />
        <Input.RightElement
          pointerEvents="none"
          children={<QuestionOutlineIcon color="gray.300" />}
        />
      </Input.Group>
      <Input.Group width="fit-content">
        <Input.LeftElement
          pointerEvents="none"
          children={<EmailIcon color="error.300" />}
        />
        <Input placeholder="invalid" isInvalid />
        <Input.RightElement
          pointerEvents="none"
          children={<QuestionOutlineIcon color="error.300" />}
        />
      </Input.Group>
      <br />
      <ProgressBar value={80} />
      <br />
      <ProgressBar value={10} labelOption="right" />
      <br />
      <ProgressBar value={20} labelOption="bottomRight" />
      <br />
      <ProgressBar isIndeterminate />
      <br />
      <FormControl width="fit-content">
        <FormControl.Label>Default Form Control</FormControl.Label>
        <Input.Group>
          <Input.LeftElement
            pointerEvents="none"
            children={<EmailIcon color="gray.300" />}
          />
          <Input placeholder="email@email.com" />
          <Input.RightElement
            pointerEvents="none"
            children={<QuestionOutlineIcon color="gray.300" />}
          />
        </Input.Group>
        <FormControl.HelperText>
          This is a hint to help the user
        </FormControl.HelperText>
      </FormControl>
      <br />
      <Radio />
      <Radio size="md" isChecked isDisabled />
      <br />
      <br />
      <CheckboxGroupExample />
      <Spinner size="xl" />
      <Loading size="xl" />
      <FileDropZone onDrop={onDrop} labels={solutionNavigatorDropZoneLabels} />
      <br />
      <Badge colorScheme="primary">
        <Badge.LeftIcon boxSize="1.5" as={FilledCircleIcon} />
        badge
        <Badge.RightIcon boxSize="1.5" as={AddIcon} />
      </Badge>

      <br />
      <br />
      <RadioGroupExample />
      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <br />
      <hr />
      <br />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/page-2">Page 2</Link>
          </li>
        </ul>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              This is the generated root route.{' '}
              <Link to="/page-2">Click here for page 2.</Link>
            </div>
          }
        />
        <Route
          path="/page-2"
          element={
            <div>
              <Link to="/">Click here to go back to root page.</Link>
            </div>
          }
        />
      </Routes>
      {/* END: routes */}
    </Box>
  );
}

const CheckboxGroupExample = () => {
  const { value, getCheckboxProps } = useCheckboxGroup({
    defaultValue: ['Basic'],
  });

  return (
    <Stack>
      <Text>The selected checkboxes are: {value.sort().join(' and ')}</Text>
      <CheckboxCard
        {...getCheckboxProps({ value: 'Basic' })}
        subTitle="$5 per month"
        description="This is the basic plan"
      />
      <CheckboxCard
        {...getCheckboxProps({ value: 'Premium' })}
        subTitle="$15 per month"
        description="This is the premium plan"
      />
      <CheckboxCard
        {...getCheckboxProps({ value: 'VIP' })}
        subTitle="$30 per month"
        description="This is the VIP plan"
      />
    </Stack>
  );
};

const RadioGroupExample = () => {
  const { value, getRadioProps } = useRadioGroup({
    defaultValue: 'Basic',
  });

  return (
    <Stack>
      <Text>The selected radio is: {value}</Text>
      <RadioCard
        {...getRadioProps({ value: 'Basic' })}
        subTitle="$5 per month"
        description="This is the basic plan"
      />
      <RadioCard
        {...getRadioProps({ value: 'Premium' })}
        subTitle="$15 per month"
        description="This is the premium plan"
      />
      <RadioCard
        {...getRadioProps({ value: 'VIP' })}
        subTitle="$30 per month"
        description="This is the VIP plan"
      />
    </Stack>
  );
};

export default Testing;
