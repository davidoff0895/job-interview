import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import UserCard from '../src/components/UserCard';

describe('UserCard', () => {
  it('renders user name if provided', () => {
    render(<UserCard user={{ name: 'Alice' }} />);
    expect(screen.getByText('Alice')).toBeInTheDocument();
  });

  it('renders Guest User if user is null', () => {
    render(<UserCard />);
    expect(screen.getByText('Guest User')).toBeInTheDocument();
  });
});

