import { describe, expect, it } from 'vitest';
import { getGreeting } from '../../src/core/greeting';

describe('getGreeting', () => {
  it('returns a generic greeting with no name', () => {
    expect(getGreeting()).toBe('Hello from Plotline!');
  });

  it('returns a personalized greeting with a name', () => {
    expect(getGreeting('Quinn')).toBe('Hello, Quinn! Welcome to Plotline.');
  });
});
