// Refer to the Chakra UI documentation for more information about theming: https://chakra-ui.com/docs/styled-system/customize-theme#scaling-out-your-project

import { extendTheme, Theme } from '@chakra-ui/react';

// Global style overrides

// Foundational style overrides
import { colors, shadows, fonts, breakpoints } from '@canvass/foundations';

// Components style overrides

// Typography
import HeadingStyles from '../lib/typography/heading/Heading.styles';

// Overlay components overrides
import TooltipStyles from '../lib/overlay/tooltip/Tooltip.styles';
import DropdownMenuStyles from '../lib/overlay/dropdownMenu/DropdownMenu.styles';
import ModalStyles from '../lib/overlay/modal/Modal.styles';

// Data display components overrides
import TagStyles from '../lib/data-display/tag/Tag.styles';
import BadgeStyles from '../lib/data-display/badge/Badge.styles';
import TableStyles from '../lib/data-display/table/Table.styles';

// Form components overrides
import FormControlStyles from '../lib/forms/formControl/FormControl.styles';
import FormLabelStyles from '../lib/forms/formControl/FormLabel.styles';
import FormErrorMessageStyles from '../lib/forms/formControl/FormErrorMessage.styles';
import InputStyles from '../lib/forms/input/Input.styles';
import ButtonStyles from '../lib/forms/button/Button.styles';
import RadioStyles from '../lib/forms/radio/Radio.styles';
import ToggleStyles from '../lib/forms/toggle/Toggle.styles';
import CheckboxStyles from '../lib/forms/checkbox/Checkbox.styles';
import CheckboxCardStyles from '../lib/forms/checkbox/checkbox-card/CheckboxCard.styles';
import TextareaStyles from '../lib/forms/textarea/Textarea.styles';
import FileDropZoneStyles from '../lib/forms/fileUpload/fileDropZone/FileDropZone.styles';
import FileUploadItemStyles from '../lib/forms/fileUpload/fileUploadItem/FileUploadItem.styles';
import TabsStyles from '../lib/navigation/tabs/Tabs.styles';
import SelectStyles from '../lib/forms/select/Select.styles';
import RadioCardStyles from '../lib/forms/radio/radio-card/RadioCard.styles';

// Feedback component overrides
import SpinnerStyles from '../lib/feedback/spinner/Spinner.styles';
import ProgressBarStyles from '../lib/feedback/progressBar/ProgressBar.styles';
import { ProgressStepsStyles } from '../lib/feedback/progressSteps/ProgressSteps.styles';
import AlertStyles from '../lib/feedback/alert/Alert.styles';

// Layout component overrides
import FeaturedCircleIconStyles from '../lib/layout/featured-icons/featured-circle-icon/FeaturedCircleIcon.styles';
import FeaturedSquareIconStyles from '../lib/layout/featured-icons/featured-square-icon/FeaturedSquareIcon.styles';
import RadioTableCardStyles from '../lib/forms/radio/RadioTableCard/RadioTableCard.styles';

export const theme = {
  colors,
  shadows,
  fonts,
  breakpoints,
  // List of components: https://github.com/chakra-ui/chakra-ui/blob/main/packages/components/theme/src/components/index.ts#L83
  components: {
    Heading: HeadingStyles,
    // Form
    Button: ButtonStyles,
    Switch: ToggleStyles,
    Checkbox: CheckboxStyles,
    CheckboxCard: CheckboxCardStyles,
    Input: InputStyles,
    Form: FormControlStyles,
    FormLabel: FormLabelStyles,
    FormError: FormErrorMessageStyles,
    Radio: RadioStyles,
    Textarea: TextareaStyles,
    FileDropZone: FileDropZoneStyles,
    FileUploadItem: FileUploadItemStyles,
    Tabs: TabsStyles,
    Select: SelectStyles,
    RadioCard: RadioCardStyles,
    RadioTableCard: RadioTableCardStyles,
    // Data display
    Badge: BadgeStyles,
    Tag: TagStyles,
    Table: TableStyles,
    // Overlay
    Modal: ModalStyles,
    Tooltip: TooltipStyles,
    Menu: DropdownMenuStyles,
    // Feedback
    Spinner: SpinnerStyles,
    Progress: ProgressBarStyles,
    Steps: ProgressStepsStyles,
    Alert: AlertStyles,
    // Layout
    FeaturedCircleIcon: FeaturedCircleIconStyles,
    FeaturedSquareIcon: FeaturedSquareIconStyles,
  },
};

export default extendTheme(theme) as Theme;
