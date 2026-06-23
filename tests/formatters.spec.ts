import { describe, it, expect } from 'vitest';
import { getInitials } from '../src/utils/formatters';

describe('getInitials', () => {
  it('returns initials for a valid name', () => {
    expect(getInitials('John Doe')).toBe('JD');
  });

  it('returns empty string if null or undefined is passed', () => {
    expect(getInitials(null)).toBe('');
    expect(getInitials(undefined)).toBe('');
  });
});

