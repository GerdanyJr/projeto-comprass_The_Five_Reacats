import { render } from '@testing-library/react-native';
import { CompassBackground } from '../../src/components/Login/CompassBackground';
import { Text } from 'react-native';

describe('Compass Background tests', () => {
  it('should render correctly', () => {
    const { getByAccessibilityHint } = render(
      <CompassBackground>
        <Text />
      </CompassBackground>
    );

    const background = getByAccessibilityHint(/Comprass logo/i);

    expect(background).toBeTruthy();
  });
});
