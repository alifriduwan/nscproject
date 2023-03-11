import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import ButtonForMeet from './ButtonForMeeting'

describe('ButtonForMeet', () => {
  it('renders 6 buttons with correct text and links', () => {
    const { getByText } = render(<ButtonForMeet />)
    expect(getByText('1')).toHaveAttribute('href', '/meeting1')
    expect(getByText('2')).toHaveAttribute('href', '/meeting2')
    expect(getByText('3')).toHaveAttribute('href', '/meeting3')
    expect(getByText('4')).toHaveAttribute('href', '/meeting4')
    expect(getByText('5')).toHaveAttribute('href', '/meeting5')
    expect(getByText('6')).toHaveAttribute('href', '/meeting6')
  })
})