import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Counter from '../src/components/Counter';

describe('Counter', () => {
  it('increments value on click', () => {
    render(<Counter />);
    expect(screen.getByText('0')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));

    expect(screen.getByText('1')).toBeInTheDocument();
  });
});

