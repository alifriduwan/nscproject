import { render, waitForElement, fireEvent } from '@testing-library/react'
import Login from './Login'
jest.mock('axios')

it('shounld have a username and a password field, also a submit button', () => {
  render(<Login/>)

  const UsernameField = screen.getByLabelText(/Username/i);
  const PasswordField = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByText(/submit/i);


  expect(UsernameField).toBeInTheDocument();
  expect(PasswordField).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

it('should allow the user to submit their credentials', () =>{
  const submit = jest.fn();
  render(<Login submit={submit}/>)

  const UsernameField = screen.getByLabelText(/Username/i);
  const PasswordField = screen.getByLabelText(/Password/i);
  const submitButton = screen.getByText(/submit/i);


  userEvent.type(UsernameField, "email");
  userEvent.type(PasswordField, "password");
  userEvent.click(submitButton);

});


