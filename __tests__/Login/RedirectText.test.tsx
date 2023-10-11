import { render, userEvent } from '@testing-library/react-native';
import { RedirectText } from '../../src/components/Login/RedirectText';

describe('Compass Background tests', () => {
  it('should render correctly', () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <RedirectText title='teste' onPress={mockFn} />
    );

    const redirect = getByText(/teste/i);

    expect(redirect).toBeTruthy();
  });

  it('should call the function on text press', async () => {
    const mockFn = jest.fn();
    const { getByText } = render(
      <RedirectText title='teste' onPress={mockFn} />
    );

    const redirect = getByText(/teste/i);
    await userEvent.press(redirect);

    expect(mockFn).toBeCalled();
  });
});
