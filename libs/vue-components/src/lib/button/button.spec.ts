import { render, screen } from '@testing-library/vue';
import GoAButton from './button.vue';
import userEvent from '@testing-library/user-event';

describe('Goa Vue Button', () => {
  const buttonType = 'primary';
  const buttonClassName = 'goa-button';
  const buttonSecondaryClassName = 'goa--secondary';
  const buttonTertiaryClassName = 'goa--tertiary';
  const buttonSize = 'large';
  const buttonTitle = 'Test Title';
  const buttonLargeClassName = 'large';
  const buttonTooltip = 'hovering';

  test('should render the button title', () => {
    const { baseElement } = render(GoAButton, {
      props: { buttonType: buttonType, buttonSize: buttonSize, content: buttonTitle }
    });

    expect(baseElement).toBeTruthy();
    expect(screen.getByText(buttonTitle))
  });

  test('buttonType=primary should render primary styling', () => {
    render(GoAButton, {
      props: { buttonType: buttonType, buttonSize: buttonSize, content: buttonTitle }
    });

    const button = screen.getByRole('button');
    expect(button.className).toContain(buttonClassName);
    expect(button.className).not.toContain(buttonSecondaryClassName);
    expect(button.className).not.toContain(buttonTertiaryClassName);
  });

  test('buttonType=secondary should render secondary styling', () => {
    render(GoAButton, {
      props: { buttonType: 'secondary', buttonSize: buttonSize, content: buttonTitle }
    });

    const button = screen.getByRole('button');
    expect(button.className).toContain(buttonClassName);
    expect(button.className).toContain(buttonSecondaryClassName);
    expect(button.className).not.toContain(buttonTertiaryClassName);
  });

  test('buttonType=tertiary should render tertiary styling', () => {
    render(GoAButton, {
      props: { buttonType: 'tertiary', buttonSize: buttonSize, content: buttonTitle }
    });

    const button = screen.getByRole('button');
    expect(button.className).toContain(buttonClassName);
    expect(button.className).not.toContain(buttonSecondaryClassName);
    expect(button.className).toContain(buttonTertiaryClassName);
  });

  test('buttonSize unset should render large styling', () => {
    render(GoAButton, {
      props: { buttonType: buttonType, buttonSize: 'small', content: buttonTitle }
    });

    const button = screen.getByRole('button');
    expect(button.className).not.toContain(buttonLargeClassName);
  });

  test('tooltip is set to button title', () => {
    render(GoAButton, {
      props: { buttonType: 'tertiary', content: buttonTitle, tooltip: buttonTooltip }
    });

    const button = screen.getByRole('button');
    expect(button.title).toContain(buttonTooltip);
  });
});
