import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('home', () => {
  context('Without current user', () => {
    it('Should render hello world text', () => {
      const { getByText } = render(<App />);
      const text = getByText('Hello World!');
      expect(text).toBeInTheDocument();
    });
  });  
});
