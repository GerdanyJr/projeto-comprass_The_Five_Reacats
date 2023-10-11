import '@testing-library/jest-native/extend-expect';
import { render, userEvent } from '@testing-library/react-native';
import { FormButton } from '../../src/components/UI/FormButton';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { Colors } from 'react-native/Libraries/NewAppScreen';

describe('Form Button tests', () => {
  let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });
  it('should render correctly', () => {
    const { getByText } = render(
      <FormButton title={'Teste'} onPress={() => {}} />
    );

    const button = getByText(/Teste/i);

    expect(button).toBeTruthy();
  });
  it('should call the function on press', async () => {
    const mockfn = jest.fn();
    const { getByText } = render(
      <FormButton title={'Teste'} onPress={mockfn} />
    );

    const button = getByText(/Teste/i);

    await user.press(button);

    expect(mockfn).toHaveBeenCalled();
  });
  it('should be disabled when disabled is passed', async () => {
    const mockfn = jest.fn();
    const { getByText } = render(
      <FormButton title={'Teste'} onPress={mockfn} disabled />
    );

    const button = getByText(/Teste/i);

    await user.press(button);

    expect(mockfn).not.toHaveBeenCalled();
  });
  it('should have disabled styles when disabled', () => {
    const { getByText } = render(
      <FormButton title={'Teste'} onPress={() => {}} disabled />
    );

    const button = getByText(/Teste/i);

    expect(button).toHaveStyle({ backgroundColor: Colors.gray_900 });
  });
  it('should render a loding overlay when isLoading is passed', () => {
    const { getByAccessibilityHint } = render(
      <FormButton title={'Teste'} onPress={() => {}} isLoading />
    );

    const loading = getByAccessibilityHint(/Loading/i);

    expect(loading).toBeTruthy();
  });
});
