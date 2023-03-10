import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Header from './Header';

describe('Header', () => {
  it('renders without errors', () => {
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });

  it('renders the correct navigation links when user is not logged in', () => {
    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(getByText('หน้าหลัก')).toBeInTheDocument();
    expect(getByText('การแข่งขัน')).toBeInTheDocument();
    expect(getByText('ผลการแข่งขัน')).toBeInTheDocument();
    expect(getByText('เข้าสู่ระบบ')).toBeInTheDocument();
  });

  it('renders the correct navigation links when user is logged in', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));

    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    expect(getByText('หน้าหลัก')).toBeInTheDocument();
    expect(getByText('การแข่งขัน')).toBeInTheDocument();
    expect(getByText('ผลการแข่งขัน')).toBeInTheDocument();
    expect(getByText('testuser')).toBeInTheDocument();
    expect(getByText('ออกจากระบบ')).toBeInTheDocument();

    localStorage.removeItem('user');
  });

  it('calls navigate function when login button is clicked', () => {
    const navigateMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => navigateMock,
    }));

    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(getByText('เข้าสู่ระบบ'));
    expect(navigateMock).toHaveBeenCalledWith('/login');
  });

  it('removes user from local storage and calls navigate function when logout button is clicked', () => {
    localStorage.setItem('user', JSON.stringify({ username: 'testuser' }));

    const navigateMock = jest.fn();
    jest.mock('react-router-dom', () => ({
      useNavigate: () => navigateMock,
    }));

    const { getByText } = render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );

    fireEvent.click(getByText('ออกจากระบบ'));
    expect(navigateMock).toHaveBeenCalledWith('/');
    expect(localStorage.getItem('user')).toBeNull();
  });
});
