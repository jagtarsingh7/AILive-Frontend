import { screen } from '@testing-library/react';
import { renderWithTheme } from '@canvass/shared/test-utils';
import { formatBytes } from '@canvass/shared/utils';

import FileUploadItem from './FileUploadItem';

describe('FileUploadItem', () => {
  const renderFileUpload = (errors?: string[]) => {
    return renderWithTheme(
      <FileUploadItem
        fileName="Boiler Data Test.csv"
        fileSize={200}
        lastModified={7777}
        errors={errors}
        onDelete={() => alert('deleted')}
      />
    );
  };

  test('should render file upload item', () => {
    const { baseElement } = renderFileUpload();
    expect(baseElement).toBeVisible();
    // Expect there is file name element
    const fileNameElement = screen.getByText('Boiler Data Test.csv');
    expect(fileNameElement).toBeVisible();
    // Expect there is file size element
    const fileSizeElement = screen.getByText(formatBytes(200));
    expect(fileSizeElement).toBeVisible();

    // expect this upload item is valid
    expect(screen.getByTestId('file-upload-item-container')).toBeValid();
  });

  test('should display number of error list if has Error', () => {
    const errors = ['Value Error', 'Header Error'];
    const { baseElement } = renderFileUpload(errors);

    expect(baseElement).toBeVisible();
    expect(screen.getByTestId('file-upload-item-container')).toBeInvalid();

    const errorList = screen.getAllByTestId('file-upload-item-error');
    expect(errorList.length).toBe(errors.length);
  });
});
