import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react';
import Login from './Login';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test('renders login component', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Enter Username/i);
  expect(linkElement).toBeInTheDocument();
});


describe('Login component', () => {
  test('renders login form and submits successfully', async () => {
    const { getByLabelText, getByText } = render(<Login />);

    const emailInput = getByLabelText('Enter Username');
    fireEvent.change(emailInput, { target: { value: 'testuser@example.com' } });

    const passwordInput = getByLabelText('Enter Password');
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    const submitButton = getByText('Sign In');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(getByText('เข้าสู่ระบบสำเร็จ!')).toBeInTheDocument();
      // Add more assertions as needed
    });

  test('renders login component', () => {
    render(<Login />);
    const linkElement = screen.getByText(/Enter Username/i);
    expect(linkElement).toBeInTheDocument();
  
  test('renders login form', () => {
    const { getByText, getByLabelText } = render(<Login />);
    const usernameInput = getByLabelText('Enter Username');
    const passwordInput = getByLabelText('Enter Password');
    const signInButton = getByText('Sign In');
  
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(signInButton).toBeInTheDocument();  

  });   
  });
});
});

