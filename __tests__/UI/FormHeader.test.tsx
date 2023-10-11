import '@testing-library/jest-native/extend-expect';
import { render } from '@testing-library/react-native';
import { FormHeader } from '../../src/components/UI/FormHeader';

describe('Form Header tests', () => {
  it('should render correctly', () => {
    const { getByText } = render(<FormHeader title="teste" />);

    const formHeader = getByText(/teste/i);

    expect(formHeader).toBeTruthy();
  });
  it('should render description if passed', () => {
    const { getByText } = render(
      <FormHeader title="teste" description="description" />
    );

    const description = getByText(/description/i);

    expect(description).toBeTruthy();
  });
});
