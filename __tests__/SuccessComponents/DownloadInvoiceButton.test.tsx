import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import DownloadInvoiceButton from '../../src/components/Success/DownloadInvoiceButton';
import { Linking } from 'react-native';

describe('<DownloadInvoiceButton />', () => {
  it('calls Linking.openURL when DownloadInvoiceButton is pressed', async () => {
    const mockOpenURL = jest.spyOn(Linking, 'openURL').mockImplementation(() => Promise.resolve(true));
    const downloadUrl = 'https://drive.google.com/uc?id=1NMJFDL7lBE86OWwvRBB8GC_JOWrd-F2l&export=download';

    const { getByText } = render(<DownloadInvoiceButton downloadUrl={downloadUrl} />);
    const button = getByText('Download');
    await fireEvent.press(button);

    expect(mockOpenURL).toHaveBeenCalledWith(downloadUrl);

    mockOpenURL.mockRestore();
  });
});
