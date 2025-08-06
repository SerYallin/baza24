import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from '@jest/globals';

import { Button } from './button';

describe('Проверка работы Кнопки', () => {
  test('Testing the button for clicking', async () => {
    const handleClick = jest.fn();

    render(<Button onClick={handleClick}>Button</Button>);

    await userEvent.click(screen.getByText('Button'));
    await waitFor(() => {
      expect(handleClick).toHaveBeenCalledTimes(1);
    });
  });

  test('Testing the custom class as string', () => {
    render(<Button classes="custom">Button</Button>);

    const button = screen.getByText('Button');
    expect(button).toHaveProperty('className', 'custom');
  });

  test('Testing the custom class as string[]', () => {
    render(<Button classes={['first', 'second']}>Button</Button>);

    const button = screen.getByText('Button');
    expect(button).toHaveProperty('className', 'first second');
  });
});
