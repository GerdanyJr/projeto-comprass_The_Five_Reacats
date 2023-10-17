import { UserEventInstance } from "@testing-library/react-native/build/user-event/setup";
import { render, userEvent } from '@testing-library/react-native';
import Counter from "../../src/components/Cart/Counter";

describe('Counter Component test', ()=>{
    let user: UserEventInstance;

  beforeAll(() => {
    jest.useFakeTimers();

    user = userEvent.setup({
      advanceTimers: () => jest.runOnlyPendingTimers(),
    });
  });

  it('should render counter component', ()=>{
    const minusMock = jest.fn();
    const plusMock = jest.fn();

    const {getByText} = render(<Counter count={0} onPressMinus={minusMock} onPressPlus={plusMock}/>)

    expect(getByText('0')).toBeTruthy();
  })

  it('should call minus function', async ()=>{
    const minusMock = jest.fn();
    const plusMock = jest.fn();

    const { getByAccessibilityHint } = render(<Counter count={0} onPressMinus={minusMock} onPressPlus={plusMock}/>);

    const minusButton = getByAccessibilityHint('minusButton');

    await user.press(minusButton);

    expect(minusMock).toBeCalled();
  })

  it('should call plus function', async ()=>{
    const minusMock = jest.fn();
    const plusMock = jest.fn();

    const { getByAccessibilityHint } = render(<Counter count={0} onPressMinus={minusMock} onPressPlus={plusMock}/>);

    const plusButton = getByAccessibilityHint('plusButton');

    await user.press(plusButton);

    expect(plusMock).toBeCalled();
  })
})