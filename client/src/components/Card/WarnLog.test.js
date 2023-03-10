import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import WarnLog from './WarnLog';

describe('WarnLog', () => {
  test('renders without error', () => {
    render(
      <BrowserRouter>
        <WarnLog />
      </BrowserRouter>
    );
  });
});