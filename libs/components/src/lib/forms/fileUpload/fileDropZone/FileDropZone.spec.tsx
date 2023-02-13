import { screen, fireEvent, waitFor } from '@testing-library/react';
import { renderWithTheme } from '@canvass/shared/test-utils';

import FileDropZone from './FileDropZone';

function createDtWithFiles(files: File[] = []) {
  return {
    dataTransfer: {
      files,
      types: ['Files'],
    },
  };
}

beforeEach(() => jest.clearAllMocks());

describe('FileDropZone', () => {
  const labels = {
    clickToUploadText: 'Click to upload',
    dragDropText: 'or drag and drop',
    uploadTypesText: '.CSV files only',
  };
  test('should render file drop zone', () => {
    const { baseElement } = renderWithTheme(<FileDropZone labels={labels} />);
    expect(baseElement).toBeVisible();
  });

  test('should be enabled', () => {
    const onDrop = jest.fn();
    renderWithTheme(<FileDropZone onDrop={onDrop} labels={labels} />);

    const BoxElement = screen.getByRole('presentation');
    const InputElement = screen.getByTestId('drop-input');

    expect(BoxElement).toHaveAttribute('aria-disabled', 'false');
    expect(InputElement).toBeEnabled();
  });

  test('should be disabled', () => {
    const onDrop = jest.fn();
    renderWithTheme(
      <FileDropZone isDisabled onDrop={onDrop} labels={labels} />
    );
    const BoxElement = screen.getByRole('presentation');
    const InputElement = screen.getByTestId('drop-input');

    expect(BoxElement).toHaveAttribute('aria-disabled', 'true');
    expect(InputElement).toBeDisabled();
  });

  test('should accept csv file type', () => {
    renderWithTheme(<FileDropZone labels={labels} />);
    const InputElement = screen.getByTestId('drop-input');

    expect(InputElement).toHaveAttribute('accept', 'text/csv,.csv');
  });

  test('should accept drop', async () => {
    const spy = jest.fn();
    renderWithTheme(<FileDropZone onDrop={spy} labels={labels} />);
    const BoxElement = screen.getByRole('presentation');

    fireEvent.drop(BoxElement, createDtWithFiles());
    await waitFor(() => expect(spy).toHaveBeenCalled());
  });

  test('should disallow drop', async () => {
    const spy = jest.fn();
    renderWithTheme(<FileDropZone onDrop={spy} isDisabled labels={labels} />);
    const BoxElement = screen.getByRole('presentation');

    fireEvent.drop(BoxElement, createDtWithFiles());
    await waitFor(() => expect(spy).not.toHaveBeenCalled());
  });

  test.todo(
    'confirm unsupported file types are rejected when we add file upload component'
  );
});
