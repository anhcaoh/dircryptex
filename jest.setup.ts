import '@testing-library/jest-dom';
import '@testing-library/jest-dom/extend-expect';
import {configure} from '@testing-library/react';
configure({testIdAttribute: 'data-testid'});

// mock matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // deprecated
    removeListener: jest.fn(), // deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});