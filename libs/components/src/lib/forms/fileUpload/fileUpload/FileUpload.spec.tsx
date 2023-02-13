import { fireEvent, waitFor, render, within } from '@testing-library/react';
import { screen } from '@testing-library/react';
import { formatBytes } from '@canvass/shared/utils';

import React from 'react';
import FileUpload from './FileUpload';

function createDtWithFiles(files: File[] = []) {
  return {
    dataTransfer: {
      files,
      types: ['Files'],
    },
  };
}

describe('Upload File', () => {
  function createFile(name: string, size: number) {
    const file = new File(['file contents'], name, {
      type: 'text/csv',
    });
    Object.defineProperty(file, 'size', { value: size });
    return file;
  }

  function dropFile(files: File[]) {
    const BoxElement = screen.getByRole('presentation');

    fireEvent.drop(BoxElement, createDtWithFiles(files));
  }

  const FileItems = async () =>
    await waitFor(() => screen.getAllByTestId('file-upload-item-container'));

  async function validateItem(
    index: number,
    fileName: string,
    fileSize: number
  ) {
    const FileContainers = await FileItems();
    const FileItemContainer = FileContainers[index];
    expect(within(FileItemContainer).getByText(fileName)).toBeVisible();
    expect(
      within(FileItemContainer).getByText(formatBytes(fileSize))
    ).toBeVisible();
  }

  test('drop one file', async () => {
    render(<FileUpload />);
    const fileName = 'test.csv';
    const fileSize = 1;
    const file = createFile(fileName, fileSize);
    dropFile([file]);
    await validateItem(0, fileName, fileSize);

    expect(await FileItems()).toHaveLength(1);
  });
  test('drop more than one file', async () => {
    render(<FileUpload />);

    const fileProperties = [
      { name: 'file1', size: 1 },
      { name: 'file2', size: 2 },
    ];
    const files = fileProperties.map(({ name, size }) =>
      createFile(name, size)
    );
    dropFile(files);
    files.map(async ({ name, size }, index) => {
      await validateItem(index, name, size);
    });

    expect(await FileItems()).toHaveLength(files.length);
  });

  test('delete the only file', async () => {
    render(<FileUpload />);
    const fileName = 'test.csv';
    const fileSize = 1;
    const file = createFile(fileName, fileSize);
    dropFile([file]);
    await validateItem(0, fileName, fileSize);

    expect(await FileItems()).toHaveLength(1);
    fireEvent.click(screen.getByRole('button', { name: 'Delete' }));
    expect(await screen.queryByTestId('file-upload-item-container')).toBeNull();
  });

  test('delete a file from a list of files', async () => {
    render(<FileUpload />);

    const fileProperties = [
      { name: 'file1', size: 1 },
      { name: 'file2', size: 2 },
    ];
    const files = fileProperties.map(({ name, size }) =>
      createFile(name, size)
    );
    dropFile(files);
    files.map(async ({ name, size }, index) => {
      await validateItem(index, name, size);
    });

    expect(await FileItems()).toHaveLength(files.length);
    screen
      .getAllByRole('button', { name: 'Delete' })
      .forEach(async (element) => {
        fireEvent.click(element);
        expect(await FileItems()).toHaveLength(files.length - 1);
      });
  });
});
