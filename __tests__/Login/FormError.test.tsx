import { render } from '@testing-library/react-native';
import { FormError } from '../../src/components/Login/FormError';

describe('Compass Background tests', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FormError message="erro" />);

    const formError = getByText(/erro/i);

    expect(formError).toBeTruthy();
  });
});
