import { describe, test, expect } from '@jest/globals';
import { renderHook, waitFor, act } from '@testing-library/react';

import { useResponsiveDetector } from '@app/shared/hooks';

const originalInnerWidth = window.innerWidth;

describe('Проверка работы useResponsiveDetector', () => {
  beforeAll(() => {
    // Mock window.innerWidth and innerHeight
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1024,
    });
  });

  afterAll(() => {
    // Restore original values if necessary
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: originalInnerWidth,
    });
  });
  test('Проверка изменения окна', async () => {
    const { result } = renderHook(() => useResponsiveDetector());
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 1280,
    });
    await act(async () => {
      window.dispatchEvent(new Event('resize'));
    });
    await waitFor(() => {
      expect(result.current).toEqual({
        isMobile: false,
        isTablet: false,
        isDesktop: true,
      });
    });
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 800,
    });
    await act(async () => {
      window.dispatchEvent(new Event('resize'));
    });
    await waitFor(() => {
      expect(result.current).toEqual({
        isMobile: false,
        isTablet: true,
        isDesktop: false,
      });
    });
    Object.defineProperty(window, 'innerWidth', {
      writable: true,
      configurable: true,
      value: 300,
    });
    await act(async () => {
      window.dispatchEvent(new Event('resize'));
    });
    await waitFor(() => {
      expect(result.current).toEqual({
        isMobile: true,
        isTablet: false,
        isDesktop: false,
      });
    });
  });
});
