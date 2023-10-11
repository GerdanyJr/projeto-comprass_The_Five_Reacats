import '@testing-library/jest-native/extend-expect';
import { render, userEvent } from '@testing-library/react-native';
import { InputField } from '../../src/components/Login/InputField';
import { Colors } from '../../src/assets/constants/Colors';
import { UserEventInstance } from '@testing-library/react-native/build/user-event/setup';
import { act } from 'react-test-renderer';

describe('Input field tests', () => {
  const defaultProps = {
    label: 'Username',
    error: false,
    value: '',
    enabledInput: true,
  };
  let user: UserEventInstance;

  beforeAll(() => {
    user = userEvent.setup({ delay: 250 });
  });

  it('should render correctly', () => {
    const { getByDisplayValue } = render(
      <InputField
        label=""
        error={false}
        value="Username"
        enabledInput={false}
      />
    );

    const inputField = getByDisplayValue('Username');

    expect(inputField).toBeTruthy();
  });

  it('should render the icon if passed', () => {
    const iconPath = require('../../src/assets/images/closed-eye.png');

    const { getByAccessibilityHint } = render(
      <InputField {...defaultProps} icon={iconPath} />
    );
    const icon = getByAccessibilityHint('icon');

    expect(icon).toBeTruthy();
  });

  it('should call the onChangeText when passed', async () => {
    const mockFn = jest.fn();
    const { getByDisplayValue } = render(
      <InputField {...defaultProps} onChangeText={mockFn} />
    );

    const inputField = getByDisplayValue('');
    await act(async () => {
      await user.type(inputField, 't');
    });

    expect(mockFn).toHaveBeenCalledWith('t');
  });

  it('should call the onIconPress', async () => {
    const iconPath = require('../../src/assets/images/closed-eye.png');
    const mockFn = jest.fn();

    const { getByAccessibilityHint } = render(
      <InputField {...defaultProps} icon={iconPath} onIconPress={mockFn} />
    );

    const icon = getByAccessibilityHint('icon');
    await user.press(icon);

    expect(mockFn).toHaveBeenCalled();
  });

  it('should apply error styles when error', () => {
    const { getByTestId, getByText } = render(
      <InputField {...defaultProps} error={true} />
    );

    const inputField = getByTestId(/input field/i);
    const inputValue = getByText(/username/i);

    expect(inputValue).toHaveStyle({ color: Colors.red_500 });
    expect(inputField).toHaveStyle({
      borderColor: Colors.red_500,
      borderWidth: 1,
    });
  });
  it('should apply default styles on empty values', async () => {
    const mockFn = jest.fn();
    const { getByDisplayValue, getByText } = render(
      <InputField {...defaultProps} onChangeText={mockFn} />
    );

    const inputField = getByDisplayValue('');
    const inputValue = getByText(/username/i);

    await act(async () => {
      await user.type(inputField, 't');
      await user.clear(inputField);
    });

    expect(inputValue).toHaveStyle({ fontSize: 18 });
  });
});
