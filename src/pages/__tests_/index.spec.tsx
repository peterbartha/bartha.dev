import { render } from '@testing-library/react';
import React from 'react';
import Home from '../index';

test('Displays the correct title', () => {
  const { getByTestId } = render(<Home />);
  expect(getByTestId('hello')).toHaveTextContent('Hello world!');
});
