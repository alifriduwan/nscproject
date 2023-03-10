import React from 'react';
import { render } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders the correct content', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('NSC – Thailand การแข่งขันพัฒนาโปรแกรมคอมพิวเตอร์แห่งประเทศไทย')).toBeInTheDocument();
  });

  test('has the correct styles', () => {
    const { container } = render(<Footer />);
    const footer = container.querySelector('footer');
    expect(footer).toHaveStyle('textAlign: center');
    expect(footer).toHaveStyle('backgroundColor: rgb(240, 240, 240)');
    expect(footer).toHaveStyle('padding: 20px');
    expect(footer).toHaveStyle('position: absolute');
    expect(footer).toHaveStyle('bottom: 0');
    expect(footer).toHaveStyle('width: 100%');
  });
});
