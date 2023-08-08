const { render } = require('utils/test.utils');
const { PrimaryButton, SecondaryButton, DangerButton } = require('./Buttons');

describe('Button', () => {
  it('should render the primary button', () => {
    const component = render(<PrimaryButton />);
    const primaryButton = component.getByTestId('primary-button');

    expect(primaryButton).toBeDefined();
  });
  it('should render the secondary button', () => {
    const component = render(<SecondaryButton />);
    const secondaryButton = component.getByTestId('secondary-button');

    expect(secondaryButton).toBeDefined();
  });
  it('should render the danger button', () => {
    const component = render(<DangerButton />);
    const dangerButton = component.getByTestId('danger-button');

    expect(dangerButton).toBeDefined();
  });
});
